 SCRIPT.JS

const forms = document.querySelectorAll("form")

forms.forEach(form => {
    form.addEventListener("submit", function(e){
        e.preventDefault()

        alert("Cadastro enviado com sucesso! ✈️")
    })
})

window.addEventListener("scroll", ()=>{
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        const position = card.getBoundingClientRect().top

        if(position < window.innerHeight - 100){
            card.style.opacity = 1
            card.style.transform = "translateY(0px)"
        }
    })
})


