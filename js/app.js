let totalGeral = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0";

function adicionar() {
    //Recuperar valores (Nome, quantidade e valor).
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    let valorUnitario = produto.split("R$")[1];
    let quantidade = document.getElementById("quantidade").value;
    //Calcular o preço, o subtotal.
    let preço = quantidade * valorUnitario;
    let carrinho = document.getElementById("lista-produtos");
    //Adicionar o produto ao carrinho.
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> R$${preço}</span>
        </section>
      </section>`;
      //Atualizar o valor total da compra.
      totalGeral = totalGeral + preço;
      let campoTotal = document.getElementById("valor-total");
      campoTotal.textContent = `R$ ${totalGeral}`;
      document.getElementById("quantidade").value = 0;

}
function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").textContent = "R$ 0";
}