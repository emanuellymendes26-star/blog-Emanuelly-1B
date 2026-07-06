//cria um constante que seleciona o botão no html
const botoes = document.querySelectorAll("button");
//cria um evento de click e chama a função botaoClicado
botao.addEventListener("click", botaoClicado);

//cria a função que fará com que o texto do numero zero some+ 1 a cada link.
function botaoClicado() {
    let texto = botao.querySelector("span");
    texto.textContent++;
}