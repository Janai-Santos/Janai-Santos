const cards = Array.from(document.querySelectorAll(".card"));
const cardsContainer = document.querySelector("#cards");

cardsContainer.addEventListener("mousemove", (e) => {
  for (const card of cards) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
});

// Adicionando evento de clique para redirecionar
const followLinks = document.querySelectorAll(".card-content a");

followLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // Aqui, vamos impedir o comportamento padrão para evitar que o link siga o comportamento do <a>
    event.preventDefault();
    window.open(link.href, '_blank');
  });
});

