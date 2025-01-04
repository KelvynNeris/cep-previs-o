document.addEventListener('DOMContentLoaded', async function () {

    try{

        const codMenu = await fetch('/pages/menu.html')
        console.log(codMenu)

        // verifica se o arquivo existe no servidor.
        if(!codMenu.ok){

            throw new Error('Arquivo não encontrado no servidor.')
        }
        const menu = await codMenu.text()
        document.querySelector(".container-menu").innerHTML = menu
        initMenuMobile()
    } catch(error){

        console.error('Erro ao carregar o menu:', error)
    }
})

const initMenuMobile = () => {

    const btnMobile = document.querySelector('#btn-mobile')
    if(!btnMobile){

        console.error('btn-mobile não encontrado')
        return
    }
    const toggleMenu = (event) => {

        if(event.type === 'touchstart') event.preventDefault();

        const nav = document.getElementById('nav')
    
        // Adicionar a classe active, caso não tenha.
        // Remover a classe active, caso tenha
    
        nav.classList.toggle('active');
    
        const active = nav.classList.contains('active');
        event.currentTarget.setAtribute('aria-expanded', active);
        if(active){
            event.currentTarget.setAtribute('aria-label', 'Fechar Menu')
    
        }else{
            event.currentTarget.setAtribute('aria-label', 'Abrir Menu')
        }
    }
    
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu)
}