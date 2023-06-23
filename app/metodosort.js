let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', OrdenarPorPreco);

function OrdenarPorPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(livrosOrdenados)
}