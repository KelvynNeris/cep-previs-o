const cepInput = document.querySelector('#cep')
const btnPesquisar = document.querySelector('#btnPesquisar')
const btnLimpar = document.querySelector('#btnLimpar')

// evento 'keypress' (quando uma tecla é pressionada)
cepInput.addEventListener('keypress', (event) =>{

    // obtém o código ASCII da tecla pressionda
    const keyCode = event.keyCode

    // verifica se a tecla pressionda não é um número (código ASCII entre 48 e 57)
    if (keyCode < 48 || keyCode > 57){

        // se não for um número, cancela a entrada e exibe uma mensagem para o usuário
        event.preventDefault()
        alert("Digite apenas números.")
    }
})

const obterDadosApi = async () => {

    const cepValor = cepInput.value

    // armazenar a url da API
    const urlAPi = `https://viacep.com.br/ws/${cepValor}/json/`

    // armazenar a resposta
    const resposta = await fetch(urlAPi)
    console.log(resposta)

    // extrair os dados JSON
    const data = await resposta.json()
    
    // verificar se o CEP é válido
    if(data.erro){
        alert('O CEP digitado está invalido')
        return
    }
    console.log(data)
    atribuirCampos(data)
}

btnPesquisar.addEventListener('click', (e) => {

    e.preventDefault()

    if (cepInput.value.length < 8 || cepInput.value.length > 8){

        // menos de 8 dígitos, exibe uma mensagem para o usuário
        alert('por favor, digite um CEP válido com 8 dígitos.')
        document.querySelector('#cep').value = ''
        return
    }
    obterDadosApi()
})

// atribuir dados de retorno da API para os campos do formulário
const atribuirCampos = (data) => {

    const rua = document.querySelector('#rua')
    const complemento = document.querySelector('#complemento')
    const bairro = document.querySelector('#bairro')
    const cidade = document.querySelector('#cidade')
    const estado = document.querySelector('#estado')

    rua.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    cidade.value = data.localidade
    estado.value = data.uf
}

btnLimpar.addEventListener('click', () => {

    document.querySelector('#cep').value = "";
    document.querySelector('#rua').value = "";
    document.querySelector('#complemento').value = "";
    document.querySelector('#bairro').value = "";
    document.querySelector('#cidade').value = "";
    document.querySelector('#estado').value = "";
})