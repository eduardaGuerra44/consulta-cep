// capturar os inputs
const inputCep = document.getElementById("cep");
const inputLogradouro = document.getElementById("logradouro");
const inputNumero = document.getElementById("numero")
const inputBairro = document.getElementById("bairro")
const inputCidade = document.getElementById("cidade");
const inputEstado = document.getElementById('estado');

//criar a função oneKeyup: 
function onCepKeyup(evt){
    //console.log(evt)
    let cepDigitado = inputCep.value; 
    // testando se cep digitado é tam 8
    if(cepDigitado.length == 8){
        
        consultaCep(cepDigitado)
    }
}
// caso seja, executar a função consultaCep
 async function consultaCep(cep){
// criando url a ser acessada 
let url = `https://viacep.com.br/ws/${cep}/json/`

// disparar a requisição e capturar a resposta
  let resposta = await fetch(url)
  let dados = await resposta.json()
console.log(dados)
  // preencher os campos do formuláio
  inputLogradouro.value = dados.logradouro;
  inputBairro.value = dados.bairro
  inputCidade.value = dados.localidade
  inputEstado.value = dados.uf
}
//associar ao input do cep o keypress.
//toda vez que uma tecla for pressionada executar o onCepKeypress

inputCep.addEventListener('keyup', onCepKeyup) 