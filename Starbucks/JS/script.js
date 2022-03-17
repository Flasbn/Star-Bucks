function voltar (avancar){
    document.getElementById("img1").src="/IMG/dinamico/banner_1238893150_desktop.jpg"
}

function avancar (voltar){
    document.getElementById("img1").src="/IMG/dinamico/banner_2437495195_desktop.jpg"
}

/*function botao (){
    let btn1 = document.getElementById("btnInterativo");
    let btn2 = document.getElementById("btnInterativo2");

    if(btn1 == btn2) {
        document.querySelectorAll("#botao")
    }
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#imagens img")

let idx = 0;

function carrossel (){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx / 500px})`;
}

setIinterval(carrossel, 1800); */