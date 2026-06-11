document.addEventListener("DOMContentLoaded" function() {

    
    const cards = document.querySelectorAll(".card-destino, .card-pacote")
    
    cards.forEach((card index) => {
        
        card.style.opacity = "0"
        card.style.transform = "translateY(20px)"
        card.style.transition = "all 0.6s ease-out"
        
        
        setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
        } index * 150)
    })

    
    const formularios = document.querySelectorAll("form");
    
    formularios.forEach(form => {
        form.addEventListener("submit", function(evento) {
            
            evento.preventDefault()
            
            
            alert("Sua solicitação foi processada com sucesso! ✈️")
            
            
            form.reset()
        })
    })
