// Atualiza o ano do rodapé automaticamente.
// Sem JavaScript, o ano escrito no HTML continua aparecendo.
document.querySelectorAll("[data-ano-atual]").forEach(function (elemento) {
  elemento.textContent = new Date().getFullYear();
});
