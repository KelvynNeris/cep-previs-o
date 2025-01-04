const estado = document.querySelector('#estado')
const cidade = document.querySelector('#cidade')
const rua = document.querySelector('#rua')
const btnPesquisar = document.querySelector('#btnPesquisar')
const btnLimpar = document.querySelector('#btnLimpar')

// evento 'keypress' (quando uma tecla é pressionada)

const obterDadosApi = async () => {

    const estadoValor = estado.value
    const cidadeValor = cidade.value
    const ruaValor = rua.value

    // armazenar a url da API
    const urlAPi = `https://viacep.com.br/ws/${estadoValor}/${cidadeValor}/${ruaValor}/json/`

    // armazenar a resposta
    const resposta = await fetch(urlAPi)
    console.log(resposta)

    // extrair os dados JSON
    const data = await resposta.json()
    
    // verificar se o CEP é válido
    if(data.erro){
        alert('ERRO')
        return
    }
    console.log(data)
    atribuirCampos(data)
}

btnPesquisar.addEventListener('click', (e) => {

    e.preventDefault()
    obterDadosApi()
})

// atribuir dados de retorno da API para os campos do formulário
const atribuirCampos = (data) => {
    const res = document.querySelector('.resultado')
    // Limpa qualquer conteúdo anterior da classe 'res'
    res.innerHTML = ''

    // Itera sobre cada resultado no array 'data'
    data.forEach(endereco => {
        // Cria um elemento de div para cada endereço
        const enderecoDiv = document.createElement('div')
        enderecoDiv.classList.add('item')

        // Adiciona as informações do endereço à div
        enderecoDiv.innerHTML = `
            
                <p>CEP: ${endereco.cep}</p>
                <p>Logradouro: ${endereco.logradouro}</p>
                <p>Bairro: ${endereco.bairro}</p>
                <p>Cidade: ${endereco.localidade}</p>
                <p>Estado: ${endereco.uf}</p>
        `;

        // Adiciona a div à classe 'res'
        res.appendChild(enderecoDiv)
    });
};

btnLimpar.addEventListener('click', () => {

    document.querySelector('#cep').value = ""
    document.querySelector('#rua').value = ""
    document.querySelector('#complemento').value = ""
    document.querySelector('#bairro').value = ""
    document.querySelector('#cidade').value = ""
    document.querySelector('#estado').value = ""
})