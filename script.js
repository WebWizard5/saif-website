// Smooth scrolling with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    const headerOffset = 80; // Adjust this based on your navbar height
    const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});


// Contact form handling
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

// Smooth cinematic scroll animation using GSAP
gsap.registerPlugin(ScrollTrigger);

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
      delay: 0.15 * index, // Slight delay between sections
      ease: "power4.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});
