const configurarBotaoVoltar = () =>{

    const btnVoltar = document.querySelector('#btnVoltar')
    if(btnVoltar){

        btnVoltar.addEventListener('click', () =>{

            window.location.href = '../index.html'
        })
    }
}

// chamar a função quando o conteúdo de DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', configurarBotaoVoltar)