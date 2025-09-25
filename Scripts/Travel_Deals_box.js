 



document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".Travel_Deals_box");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // ensures it only runs once
      }
    });
  }, { threshold: 0.1 }); // trigger when 10% of the box is visible

  boxes.forEach(box => {
    observer.observe(box);
  });
});

