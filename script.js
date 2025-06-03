
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 7);

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function hamburguerMenu() {
    const navbar = document.getElementById("myLinks");
    navbar.classList.toggle("show");
  }

  function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("active");
  }