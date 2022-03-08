function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNum = parseFloat(valor);
  console.log(valorEmDolarNum);

  var valorEmReal = valorEmDolarNum * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é: R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}