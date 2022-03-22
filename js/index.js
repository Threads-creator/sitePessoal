
const gitHubProfile = "Threads-creator";
const resourse = "repositories";

const urlHabilidades = `https://github.com/${gitHubProfile}?tab=${resourse}&q=&type=&language=`;

const urlRepositorios = `https://github.com/${gitHubProfile}/`;


addListenerHabilidades();
addListenerProjetos();


function addListenerHabilidades() {
    var boxHabilidade = document.getElementsByClassName("box-habilidade");

    const mapaHabilidade = new Map();

    for(var i = 0; i < boxHabilidade.length; i++){
        var spanItem = boxHabilidade.item(i)
                        .lastElementChild.innerHTML.toLowerCase();
        
        mapaHabilidade.set(i, spanItem);
    }

    mapaHabilidade.forEach((value, index) => boxHabilidade.item(index).addEventListener("click", () => openHabilidade(value)));

    function openHabilidade(target){
        window.open(urlHabilidades + target, '_blank').focus();
    }
}

function addListenerProjetos() {
    var boxHabilidade = document.getElementsByClassName("box-projeto");

    const mapaHabilidade = new Map();

    for(var i = 0; i < boxHabilidade.length; i++){
        var spanItem = boxHabilidade.item(i)
                        .lastElementChild.innerHTML.toLowerCase();
        
        mapaHabilidade.set(i, spanItem);
    }

    mapaHabilidade.forEach((value, index) => boxHabilidade.item(index).addEventListener("click", () => openHabilidade(value)));

    function openHabilidade(target){
        window.open(urlRepositorios + target, '_blank').focus();
    }
}


