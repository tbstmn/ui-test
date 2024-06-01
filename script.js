const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('fa-times');
});

document.addEventListener('DOMContentLoaded', () => {
  const clock = document.getElementById('clock');

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }

  // Initial call to display the clock immediately
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);
});
