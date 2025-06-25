// ✅ Smooth scrolling (pure CSS does the job, but we ensure support)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ✅ Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "#FF005C";
    return;
  }

  status.textContent = "Thank you! Your message has been sent.";
  status.style.color = "#00FFE0";
  this.reset();
});

// ✅ GSAP animations for sections
gsap.registerPlugin(ScrollTrigger);

const isMobile = window.innerWidth < 768;

if (!isMobile) {
  // Only run GSAP on non-mobile
  gsap.utils.toArray(".section").forEach((section, index) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 120,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        delay: 0.15 * index,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
}

