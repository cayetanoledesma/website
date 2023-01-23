
let menuVisible = false;
//función de ocultar menu
function mostrarOcultarMenu() {
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;

}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Php");
        habilidades[3].classList.add("kotlin");
        habilidades[4].classList.add("Swift");
        habilidades[5].classList.add("SQL");
        habilidades[6].classList.add("Laravel");
        habilidades[7].classList.add("Bootstrap");
        habilidades[8].classList.add("Xcode");
        habilidades[9].classList.add("Android");
        habilidades[10].classList.add("Mysql");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajo");
        habilidades[13].classList.add("resiliencia");
        habilidades[14].classList.add("compromiso");
        habilidades[15].classList.add("compromiso");
        habilidades[16].classList.add("compromiso");
        habilidades[17].classList.add("compromiso");
        habilidades[18].classList.add("compromiso");
        habilidades[19].classList.add("compromiso");
        habilidades[20].classList.add("compromiso");
        habilidades[21].classList.add("compromiso");

    
    }
}

window.onscroll = function(){
    efectoHabilidades();
}