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

    if(body.classList.contains("light")){
        body.classList.add('dark')
        body.classList.remove('light')

        header.classList.add('dark')
        header.classList.add('box-light')

        TextoSobre.classList.add('text-white')
        TextoPerfil.classList.add('text-white')
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
        NomePerfil.style.color = "rgb(51, 51, 51)"
        TextoPort.style.color = "rgb(51, 51, 51)"
        darkMode.style.borderColor = "black"


    }
})