/* Gianluca Craca — portfolio
   Piccolo script senza dipendenze:
   1. comparsa delle opere allo scroll
   2. dissolvenza tra le pagine
   3. lightbox per vedere le opere a schermo intero
   4. modulo contatti (apre il programma di posta)
*/
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.add("js");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Comparsa allo scroll -------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* 2. Dissolvenza tra le pagine ---------------------------- */
  if (!reduceMotion) {
    document.addEventListener("click", function (e) {
      var a = e.target.closest("a");
      if (!a || e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (a.target && a.target !== "_self") return;
      if (a.hasAttribute("download")) return;
      var url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.protocol.indexOf("http") !== 0) return;
      if (url.pathname === location.pathname && url.hash) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      setTimeout(function () { location.href = url.href; }, 260);
    });
    // Ripristina la pagina quando si torna indietro col browser
    window.addEventListener("pageshow", function () {
      document.body.classList.remove("is-leaving");
    });
  }

  /* 3. Lightbox --------------------------------------------- */
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  if (triggers.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Opera a schermo intero");
    box.tabIndex = -1;
    box.innerHTML =
      '<img alt="">' +
      '<button class="lb-close" type="button" aria-label="Chiudi">CHIUDI</button>' +
      '<button class="lb-prev" type="button" aria-label="Opera precedente">&larr;</button>' +
      '<button class="lb-next" type="button" aria-label="Opera successiva">&rarr;</button>' +
      '<div class="lb-count" aria-live="polite"></div>';
    document.body.appendChild(box);

    var lbImg = box.querySelector("img");
    var lbCount = box.querySelector(".lb-count");
    var btnPrev = box.querySelector(".lb-prev");
    var btnNext = box.querySelector(".lb-next");
    var current = 0;
    var lastFocus = null;

    if (triggers.length < 2) { btnPrev.hidden = true; btnNext.hidden = true; }

    var show = function (i) {
      current = (i + triggers.length) % triggers.length;
      var img = triggers[current].querySelector("img");
      var src = img.currentSrc || img.src;
      lbImg.classList.add("is-swapping");
      var pre = new Image();
      pre.onload = pre.onerror = function () {
        lbImg.src = src;
        lbImg.alt = img.alt;
        lbImg.classList.remove("is-swapping");
      };
      pre.src = src;
      lbCount.textContent = triggers.length > 1 ? (current + 1) + " / " + triggers.length : "";
    };

    var open = function (i) {
      lastFocus = document.activeElement;
      show(i);
      box.classList.add("is-open");
      document.body.classList.add("lb-lock");
      box.focus({ preventScroll: true });
    };

    var close = function () {
      box.classList.remove("is-open");
      document.body.classList.remove("lb-lock");
      if (lastFocus) lastFocus.focus();
    };

    triggers.forEach(function (t, i) {
      t.addEventListener("click", function () { open(i); });
    });
    box.querySelector(".lb-close").addEventListener("click", close);
    btnPrev.addEventListener("click", function () { show(current - 1); });
    btnNext.addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });

    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(current - 1);
      else if (e.key === "ArrowRight") show(current + 1);
      else if (e.key === "Tab") {
        // tiene il focus dentro la lightbox
        var f = Array.prototype.filter.call(box.querySelectorAll("button"), function (b) { return !b.hidden; });
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // Swipe su mobile
    var startX = null;
    box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50 && triggers.length > 1) show(current + (dx < 0 ? 1 : -1));
      startX = null;
    });
  }

  /* 4. Modulo contatti -------------------------------------- */
  // I messaggi arrivano nella casella dell'artista tramite Web3Forms (servizio gratuito).
  // Senza JavaScript il modulo funziona lo stesso (pagina di conferma di Web3Forms).
  var form = document.querySelector("form[data-web3forms]");
  if (form && window.fetch) {
    var status = form.querySelector(".form-status");
    var btn = form.querySelector("button[type=submit]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      data.subject = "Sito — " + data.Oggetto;
      btn.disabled = true;
      btn.textContent = "Invio…";
      status.textContent = "";
      fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (!res.success) throw new Error(res.message || (res.body && res.body.message));
          form.reset();
          status.textContent = "Grazie, il messaggio è stato inviato.";
        })
        .catch(function () {
          status.textContent = "Invio non riuscito. Riprova più tardi o scrivi all'indirizzo email qui sopra.";
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = "Invia";
        });
    });
  }

  /* Anno nel footer ------------------------------------------ */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();
})();
