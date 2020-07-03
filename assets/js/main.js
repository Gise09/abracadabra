window.onload = () => {
    //alert('Funciona')
    ex13()
}

const ex3 = () => {
    const buttonAbracadabra = document.querySelector('#abracadabra');

    buttonAbracadabra.addEventListener('click', function(){
        const nombre = "";
        do {
            nombre = prompt('Ingresa tu nombre');
        } while (nombre.length == 0);

        const saludo = document.querySelector('h1 strong');
        saludo.innerText = nombre;
    })
}

const ex4 = () => {
        const contactarme = document.querySelector('.contactarme')
        
        contactarme.addEventListener('dblclick', function(){
        
        const parrafoColor = document.querySelector('.parrafo-color');
        parrafoColor.style.color = 'red'        
    })
}

const ex5 = () => {
    const contactarme = document.querySelector('.contactarme')
        
    contactarme.addEventListener('dblclick', function(){
        const arrayDeColores = ['red', 'blue', 'orange', 'hotpink', 'lightblue'];
        const numeroAleatorio = Math.round(Math.random()*4);

        const parrafoColor = document.querySelector('.parrafo-color');
        parrafoColor.style.color = arrayDeColores[numeroAleatorio];
    })    
}

const ex6 = () => {
    const sections = document.querySelectorAll('section');
    for(let section of sections){
        section.addEventListener('click', function () {
            const textoDeSection = this.querySelector('h3');
            alert("Clickeaste sobre " + textoDeSection.innerHTML)
        })
    }
}    

const ex7 = () => {
    const recentWork = document.querySelector('#recentWork');
    const parrafo = document.querySelector('footer p');
    recentWork.addEventListener('mouseover', function(){
        const arrayDeColores = ['red', 'blue', 'orange', 'hotpink', 'lightblue'];
        const numeroAleatorio = Math.round(Math.random()*4);

        parrafo.style.color = arrayDeColores[numeroAleatorio];
    })
    recentWork.addEventListener('mouseout', function() {
        parrafo.style.color = "#888";
    })
}

const ex8 = () => {
    const lechuza = document.querySelector('#lechuza');
    lechuza.addEventListener('click', function(){
        alert('Preparate para el futuro...')
        setTimeout(function(){
            alert('Y el futuro ya llegó!')
        }, 5000)
    })
}

const ex9 = () => {
    document.addEventListener('keydown', function(){
        alert('Ey, tocaste el teclado!')
    })
}

const ex10 = () => {
    document.addEventListener('keypress', function(event){
        if(event.code == 'Space'){
            alert('Ey, tocaste la barra!')
        }
    })
}

const ex11 = () => {
    const email = document.querySelector('#email');
    email.addEventListener('keypress', function(event){
        event.preventDefault();
        if(event.code == 'Space'){
            alert('Ey, tocaste la barra!')
        }
    })
}

const ex13 = () => {
    const numeroGanador = Math.round(Math.random()*5);
    console.log(numeroGanador)
    const cajas = document.querySelectorAll('article.box');
    //console.log(cajas)
    const cajaGanadora = cajas[numeroGanador];
    console.log(cajaGanadora)
    for(let caja of cajas){
        caja.addEventListener('click', function () {
            
            if(caja == cajaGanadora) {
                alert('Ganaste!')
            } else {
                alert('Mejor suerte la próxima...')
            }
        })
    }



}