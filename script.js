
const button = document.getElementById("surpriseButton");
const surprise = document.getElementById("surprise");

button.addEventListener("click", () => {
  // Revela a surpresa
  surprise.hidden = false;
  surprise.classList.remove("show");

  // Reinicia as animações
  void surprise.offsetWidth;
  surprise.classList.add("show");

  // Atualiza o botão
  button.textContent = "Uma surpresa só sua 💗";
  button.setAttribute("aria-expanded", "true");

  // Cria corações e brilhos animados
  for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "sparkle";
    sparkle.textContent = i % 2 === 0 ? "♥" : "✦";

    sparkle.style.left = `${15 + Math.random() * 70}%`;
    sparkle.style.top = `${35 + Math.random() * 40}%`;
    sparkle.style.animationDelay = `${Math.random() * 0.4}s`;

    document.body.appendChild(sparkle);

    sparkle.addEventListener("animationend", () => {
      sparkle.remove();
    });
  }
});