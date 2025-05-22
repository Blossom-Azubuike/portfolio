window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

function countUp(id, target) {
    let count = 0;
    const speed = 30;
    const increment = Math.ceil(target / 100);

    const counter = setInterval(() => {
    count += increment;
    if (count >= target) {
        count = target;
        clearInterval(counter);
    }
    document.getElementById(id).innerText = count + (count === target ? "+" : "");
    }, speed);
}

window.addEventListener("load", () => {
    countUp("clients-count", 25);   // Update these numbers as needed
    countUp("projects-count", 40);
});

// Initialize AOS when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  
    // Load Particles.js
    particlesJS.load('student-feature', 'particles.json', function () {
      console.log('particles.js config loaded');
    });
  });
  

