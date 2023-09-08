
var tela = document.getElementById("tela");
var img = document.getElementById("img");

window.addEventListener('resize', tamanho_tela);

function tamanho_tela() {
    var tamanho = document.getElementById("tamanho");
    if (tamanho.checked) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        tela.innerHTML = ("Screen View: <br><strong>" + w + " X " + h + "</strong>");
        tela.style.display = "block"; // Torna a tela visível
    } else {
        tela.style.display = "none"; // Esconde a tela
    }
}

img.addEventListener("click", function() {
    var tamanho = document.getElementById("tamanho");
    tamanho.checked = !tamanho.checked;
    tamanho_tela(); // Chama a função para atualizar a tela
});