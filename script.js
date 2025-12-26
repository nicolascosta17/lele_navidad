let imagens = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/12.jpg",
    "/img/13.jpg",
    "/img/14.jpg",
    "/img/15.jpg",
    "/img/16.jpg",
    "/img/17.jpg",
    "/img/18.jpg",
    "/img/19.jpg",
    "/img/20.jpg",
    "/img/21.jpg",
    "/img/22.jpg",
    "/img/23.jpg",
    "/img/24.jpg",
    "/img/25.jpg",
    "/img/26.jpg",
    "/img/27.jpg",
    "/img/28.jpg",
    "/img/29.jpg",
    "/img/30.jpg",
    "/img/31.jpg"
];

let indice = 0;
let img = document.getElementById("imagem");
let intervalo;

// ======== FUNÇÕES ========

function atualizarImagem() {
    img.classList.add("saindo");

    setTimeout(() => {
        img.src = imagens[indice];
        img.classList.remove("saindo");
        atualizarPontos();
    }, 300);
}

function proxima() {
    indice++;
    if (indice >= imagens.length) indice = 0;
    atualizarImagem();
    reiniciarAutoSlide();
}

function anterior() {
    indice--;
    if (indice < 0) indice = imagens.length - 1;
    atualizarImagem();
    reiniciarAutoSlide();
}

function irPara(posicao) {
    indice = posicao;
    atualizarImagem();
    reiniciarAutoSlide();
}

function atualizarPontos() {
    let pontos = document.querySelectorAll(".ponto");
    pontos.forEach((ponto, i) => {
        ponto.classList.toggle("ativo", i === indice);
    });
}

// ======== SLIDE AUTOMÁTICO ========

function iniciarAutoSlide() {
    intervalo = setInterval(() => {
        proxima();
    }, 7500); // 10 segundos
}

function reiniciarAutoSlide() {
    clearInterval(intervalo);
    iniciarAutoSlide();
}

// ======== MÚSICA ========

function tocarMusica() {
    const audio = document.getElementById("musica");
    audio.play();
}

// ======== INICIAR AO CARREGAR ========
iniciarAutoSlide();
