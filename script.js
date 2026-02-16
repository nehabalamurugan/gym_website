(function () {
  "use strict";

  // ——— Testimonials auto-scroll ———
  var track = document.getElementById("testimonialsTrack");
  var dotsContainer = document.getElementById("testimonialsDots");
  if (!track || !dotsContainer) return;

  var testimonials = track.querySelectorAll(".testimonial");
  var total = testimonials.length;
  var currentIndex = 0;
  var intervalMs = 5500;
  var timer = null;

  function showTestimonial(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    testimonials.forEach(function (el, i) {
      el.classList.toggle("is-active", i === currentIndex);
    });
    var dots = dotsContainer.querySelectorAll("button");
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === currentIndex);
      dot.setAttribute("aria-pressed", i === currentIndex);
    });
  }

  function next() {
    showTestimonial(currentIndex + 1);
  }

  function startAutoScroll() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, intervalMs);
  }

  function stopAutoScroll() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // Build dots
  for (var i = 0; i < total; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", "Show testimonial " + (i + 1) + " of " + total);
    btn.setAttribute("aria-pressed", i === 0);
    btn.addEventListener("click", function (j) {
      return function () {
        showTestimonial(j);
        startAutoScroll();
      };
    }(i));
    dotsContainer.appendChild(btn);
  }

  // Pause auto-scroll when hovering over testimonials area
  var wrapper = track.closest(".testimonials-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoScroll);
    wrapper.addEventListener("mouseleave", startAutoScroll);
  }

  showTestimonial(0);
  startAutoScroll();
})();
