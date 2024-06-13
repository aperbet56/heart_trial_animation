// Récupération de l'élément body
const body = document.querySelector("body");

// Ecoute de l'événement "mousemove" sur le body
body.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  // Création de l'élément span
  const span = document.createElement("span");
  span.style.left = xPos + "px";
  span.style.top = yPos + "px";
  // Création de taille aléatoire
  const size = Math.random() * 100;
  span.style.width = size + "px";
  span.style.height = size + "px";
  // Insertion de l'élément span dans le DOM
  body.appendChild(span);
  // La méthode globale setTimeout() permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.
  setTimeout(() => {
    span.remove();
  }, 3000);
});
