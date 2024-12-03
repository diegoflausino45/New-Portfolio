const hamburguer = document.getElementById('hamburguer')
const navegacao = document.getElementById('navegacao')

hamburguer.addEventListener('click', function(){
    if(navegacao.style.display === 'flex'){
        navegacao.style.display = 'none'
    }else{
        navegacao.style.display = 'flex'
    }
})

const darkMode = document.getElementById("Dark")

darkMode.addEventListener('click', function(){
    const body = document.getElementById("principal")
    const header = document.getElementById("header")
    const TextoSobre = document.getElementById("texto-sobre")
    const TextoPerfil = document.getElementById("textos")
    const NomePerfil = document.getElementById("nome-perfil")
    const TextoPort = document.getElementById("titulo")
    const projetoinfo = document.querySelectorAll("h1")

    if(body.classList.contains("light")){
        body.classList.add('dark')
        body.classList.remove('light')

        header.classList.add('dark')
        header.classList.add('box-light')

        TextoSobre.classList.add('text-white')
        TextoPerfil.classList.add('text-white')
        projetoinfo.classList.add('text-white')
        NomePerfil.style.color = "white"
        TextoPort.style.color = "white"
        darkMode.style.borderColor = "white"
        hamburguer.style.color = 'white'

    }else{
        body.classList.add("light")
        body.classList.remove('dark')

        header.classList.remove('dark')
        header.classList.remove('box-light')

        TextoSobre.classList.remove('text-white')


        TextoPerfil.classList.remove('text-white')
        projetoinfo.classList.remove('text-white')
        NomePerfil.style.color = "rgb(51, 51, 51)"
        TextoPort.style.color = "rgb(51, 51, 51)"
        darkMode.style.borderColor = "black"
        hamburguer.style.color = 'black'
    }
})

let index = 0;  

    const items = document.querySelectorAll('.carousel-item');  
    const totalItems = items.length;  

    document.getElementById('next').addEventListener('click', () => {  
        index = (index + 1) % totalItems;  
        updateCarousel();  
    });  

    document.getElementById('prev').addEventListener('click', () => {  
        index = (index - 1 + totalItems) % totalItems;  
        updateCarousel();  
    });  

    function updateCarousel() {  
        const newTransform = `translateX(-${index * 100}%)`;  
        document.querySelector('.carousel-inner').style.transform = newTransform;  
    }  