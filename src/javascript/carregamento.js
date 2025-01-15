document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    // Adiciona uma classe para animar as seções quando estiverem no viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Remove o observador após a primeira animação
            }
        });
    }, {
        threshold: 0.2 // Gatilho quando 20% da seção estiver visível
    });

    sections.forEach(section => {
        section.classList.add("hidden"); // Define o estado inicial como oculto
        observer.observe(section); // Observa cada seção
    });
});
