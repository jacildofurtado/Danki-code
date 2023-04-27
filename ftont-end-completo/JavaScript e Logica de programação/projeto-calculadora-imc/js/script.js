function calcular(){
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var res = document.getElementById('res');
    var imc = peso / (altura * altura);
    res.innerHTML = "Seu IMC é: " + imc.toFixed(2);
}