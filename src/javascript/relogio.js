const updateClock = () => {
    const now = new Date();
    
    /* Formatar as horas, minutos e segundos para terem sempre dois dígitos
    usando o método padStart para completar com zeros à esquerda caso necessário */

    const hours = String(now.getHours()).padStart(2,'0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
    const greetingText = document.querySelector('.greetingText')
    // if(hours < 12){
    //     greetingText.textContent = 'Bom dia!'
    // }else if(hours < 18){
    //     greetingText.textContent = 'Boa Tarde!'
    // }else{
    //     greetingText.textContent = 'Boa Noite'
    // }
}

const updateDate = () => {
    const now = new Date();

    // Recupera a data atual, formata-a de acordo com a localidade pt-BR
    // (dia da semana extenso, ano numerico, mês extenso e dia numérico)
    const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'}
    const formattedDate = now.toLocaleDateString('pt-BR', options);
    document.querySelector('.c-greeting__right-date').textContent = formattedDate

}

const initDateClock = () =>{
    updateClock(); updateDate(); setInterval(updateClock, 1000)
}
/* Esta função é chamada quando a página termina de carregar
(event DOMcontentLoad) */
document.addEventListener('DOMContentLoaded', initDateClock)