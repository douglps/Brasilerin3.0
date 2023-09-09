var tela = document.getElementById("tela"); // div para exibir as dimensões da tela a ser exibida/oculta
var mostrar = false;

img.addEventListener("click", function () { // adiciona evento na div #img
    if (!mostrar) {
        var w = window.innerWidth; // valor horizontal da tela
        var h = window.innerHeight; // valor vertical da tela
        tela.innerHTML = "Visualização da Tela: <br><strong>" + w + " X " + h + "</strong>"; // insere texto na div #tela
        tela.style.display = "block"; // Torna a #tela visível
        mostrar = true;
    } else {
        tela.style.display = "none"; // Esconde a #tela
        mostrar = false;
    }
});

window.addEventListener('resize', function() { // aciona eventos e atualiza a cada redimensionamento
    if (mostrar) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        tela.innerHTML = "Visualização da Tela: <br><strong>" + w + " X " + h + "</strong>";
    }
});
