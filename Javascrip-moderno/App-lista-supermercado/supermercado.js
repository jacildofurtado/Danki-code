var items = [];

function cadastrar(){
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precopProduto = document.querySelector('input[name=price]');

    items.push({
        nome: nomeProduto.value,
        valor: precopProduto.value
    });

    /*
    <div class="lista-produtos-single">
        <h3>RedBull</h3>
        <h3 class="price-produto"><span>R$20,00</span></h3>
    </div>
    */
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    items.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML+= `
        <div class="lista-produtos-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    })
    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precopProduto. value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma;
}

function limpar(){
    items = [];
    document.querySelector('.lista-produtos').innerHTML="";
    document.querySelector('.soma-produto h1').innerHTML="R$0";
}