// Se eu não te convenci até agora, não sei o que fazer 😔 👊👊
document.querySelectorAll(".secao").forEach((secao) => {
  secao.querySelector("h2").addEventListener("click", () => {
    secao.classList.toggle("aberta");
  });
});


const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  if (card.classList.contains("card-link")) return;

  card.addEventListener("click", (e) => {
    e.stopPropagation();
    cards.forEach((c) => c !== card && c.classList.remove("aberto"));
    card.classList.toggle("aberto");
  });
});