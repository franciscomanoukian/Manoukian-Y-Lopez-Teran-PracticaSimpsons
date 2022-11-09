// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('span');
    let bienvenida = document.querySelector('.bienvenida');
    let personajes = document.querySelector('.personajes');
    let boton = document.querySelector('.boton');

    let bart = document.querySelector('#bart');
    let lisa = document.querySelector('#lisa');
    let homero = document.querySelector('#homero');
    let marge = document.querySelector('#marge');
    let milhouse = document.querySelector('#milhouse');
    let maggie = document.querySelector('#maggie');
    let burns = document.querySelector('#burns');
    let bobPatinio = document.querySelector('#bobPatinio');
    let flanders = document.querySelector('#flanders');
    let duffman = document.querySelector('#duffman');
    let gorgory = document.querySelector('#gorgory');
    let nelson = document.querySelector('#nelson');

    let personajesElegidos = []

    titulo.addEventListener('mouseover', function (e) {
        e.preventDefault()
        let nombre = prompt('Cuál es su nombre?')
        if (nombre == ' ') {
        saludo.innerText = 'BIENVENID@'
        } else {
            saludo.innerText = `BIENVENID@ ${nombre}`
            saludo.style.textTransform = 'uppercase'
        }
        titulo.style.display = 'none'
        span.style.display = 'flex'
        
    })

    span.addEventListener('click', function (e) {
        bienvenida.style.display = 'none'
        personajes.style.display = 'flex'
    })

    let bartbool = false
    bart.addEventListener('click', function(e){
        if (bartbool) {
            bart.classList.remove('personaje-seleccionado')
            bartbool = false
            personajesElegidos.splice('Bart')
        } else {
            bart.classList.add('personaje-seleccionado')
            bartbool = true
            personajesElegidos.push('Bart')
        }
        
        
    })

    let lisabool = false
    lisa.addEventListener('dblclick', function(e){
        if (lisabool) {
            lisa.classList.remove('personaje-seleccionado')
            lisabool = false
        } else {
            lisa.classList.add('personaje-seleccionado')
            lisabool = true
            personajesElegidos.push('Lisa')
        }
    })

    let hombool = false
    homero.addEventListener('click', function(e){
        if (hombool) {
            homero.classList.remove('personaje-seleccionado')
            hombool = false
        } else {
            homero.classList.add('personaje-seleccionado')
            hombool = true
            personajesElegidos.push('Homero')
        }
    })

    let margbool = false
    marge.addEventListener('mouseover', function(e){
        if (margbool) {
            marge.classList.remove('personaje-seleccionado')
            margbool = false
        } else {
            marge.classList.add('personaje-seleccionado')
            margbool = true
            personajesElegidos.push('Marge')
        }
        
    })
    
    let magbool = false
    maggie.addEventListener('mouseout', function(e){
        if (magbool) {
            maggie.classList.remove('personaje-seleccionado')
            magbool = false
        } else {
            maggie.classList.add('personaje-seleccionado')
            magbool = true
            personajesElegidos.push('Maggie')
        }
        
    })

    let milhbool = false
    milhouse.addEventListener('click', function(e){
        if (milhbool) {
            milhouse.classList.remove('personaje-seleccionado')
            milhbool = false
        } else {
            milhouse.classList.add('personaje-seleccionado')
            milhbool = true
            personajesElegidos.push('Milhouse')
        }
        
    })

    let burnsbool = false
    burns.addEventListener('mouseover', function(e){
        if (burnsbool) {
            burns.classList.remove('personaje-seleccionado')
            burnsbool = false
        } else {
            burns.classList.add('personaje-seleccionado')
            burnsbool = true
            personajesElegidos.push('Burns')
        }
        
    })

    let bobbool = false
    bobPatinio.addEventListener('dblclick', function(e){
        if (bobbool) {
            bobPatinio.classList.remove('personaje-seleccionado')
            bobbool = false
        } else {
            bobPatinio.classList.add('personaje-seleccionado')
            bobbool = true
            personajesElegidos.push('Bob Patinio')
        }
        
    })

    let flanbool = false
    flanders.addEventListener('mouseover', function(e){
        if (flanbool) {
            flanders.classList.remove('personaje-seleccionado')
            flanbool = false
        } else {
            flanders.classList.add('personaje-seleccionado')
            flanbool = true
            personajesElegidos.push('Flanders')
        }
        
    })

    let duffbool = false
    duffman.addEventListener('dblclick', function(e){
        if (duffbool) {
            duffman.classList.remove('personaje-seleccionado')
            duffbool = false
        } else {
            duffman.classList.add('personaje-seleccionado')
            duffbool = true
            personajesElegidos.push('DuffMan')
        }
        
    })

    let gorgbool = false
    gorgory.addEventListener('mouseover', function(e){
        if (gorgbool) {
            gorgory.classList.remove('personaje-seleccionado')
            gorgbool = false
        } else {
            gorgory.classList.add('personaje-seleccionado')
            gorgbool = true
            personajesElegidos.push('Gorgory')
        }
        
    })

    let nelsonbool = false
    nelson.addEventListener('click', function(e){
        if (nelsonbool) {
            nelson.classList.remove('personaje-seleccionado')
            nelsonbool = false
        } else {
            nelson.classList.add('personaje-seleccionado')
            nelsonbool = true
            personajesElegidos.push('Nelson')
        }
        
    })

 
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    boton.addEventListener('click', function () {
        console.log(personajesElegidos)
    })
 }) 
