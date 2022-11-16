
//funcion que me aplica el estilo a la opcion seleccionada en el menu y quita la previamente selecionada
function seleccionar(links){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    links.className="seleccionado";

    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en el modo responsive
    var x =document.getElementById("nav")
    x.className="";
}

//funcion que muesta el menu responsive
function responsiveMenu(){
    var x =document.getElementById("nav");
    if(x.className===""){
        x.className="responsive";

    }else{
        x.className="";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll =function(){
    efectohabilidades()
};

//funcion que aplica la animacion de la barra de habilidades

function efectohabilidades(){
    var skills=document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        document.getElementById("html").classList.add("barra-proceso1");
        document.getElementById("bd").classList.add("barra-proceso2");
        document.getElementById("ps").classList.add("barra-proceso3");
        
    }
}


function alerta1(){
    alert("Descargar Curriculum");
}

function alerta2(){
    alert("Mensaje Enviado");
}






















