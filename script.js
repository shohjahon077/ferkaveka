window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const cardsContainer = document.getElementById("cards-container");

  setTimeout(() => {
    intro.style.display = "none";          // Intro yo'qoladi
    cardsContainer.classList.remove("hidden");  // Kartalar ko'rinadi
  }, 15000); // 15 soniya davomida intro ko'rinadi
});
