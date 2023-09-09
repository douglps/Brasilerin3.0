//BOTÃO DARKMODE
function toggleDarkMode() {
    const darkModeButton = document.getElementById("dark_m");
    let mode = "light"; // Mode recebe "light"

    // ROTAÇÃO DO BOTÃO DARK MODE
    darkModeButton.style.transition = "transform .5s";

    darkModeButton.addEventListener("click", function () {
        if (mode === "light") {
            darkModeButton.style.transform = "rotate(calc(3*180deg))";
            mode = "dark";
            localStorage.setItem("mode", mode);
        } else if (mode === "dark") {
            darkModeButton.style.transform = "rotate(0deg)";
            mode = "light";
            localStorage.setItem("mode", mode);
        }

        setDarkMode(mode === "dark");
    });

    // Recupera o estado do modo escuro do localStorage ao carregar a página
    const storedDarkMode = localStorage.getItem("mode");
    if (storedDarkMode === "light") {
        mode = "light";
    } else if (storedDarkMode === "dark") {
        mode = "dark";
    }

    // Define a rotação do darkModeButton com base no estado atual do modo
    darkModeButton.style.transform = mode === "dark" ? "rotate(calc(3*180deg))" : "rotate(0deg)";

    // Define o estilo de fundo com base no estado atual do modo
    setDarkMode(mode === "dark");

    function setDarkMode(isDarkMode) {
        const bgColor = isDarkMode  //Background body
            ? "linear-gradient(180deg, #132036, #000000)"
            : "linear-gradient(180deg, #f2f0d5, #d951325d)";

        const bgMenuSup = isDarkMode // Background Menu Burger
            ? "linear-gradient(to left, transparent, #171819af, #000000af, #191817af, transparent)"
            : "linear-gradient(to left, transparent, #3993aaaf, transparent)"

        const spanBurger = isDarkMode // Cor Span Burger
            ? "#d95032"
            : "#123953"

        const borderColor = isDarkMode // Cor Borda Body
            ? "3px #1c1c1c solid"
            : "3px #3993aa solid";

        const linkColor = isDarkMode // Cor Botões Menu Superior
            ? "#3993aa"
            : "#1c1c1c";

        const bgMain = isDarkMode // Cor Background Main
            ? "#181920"
            : "#59deff4b"

        const fColor = isDarkMode // Cor Fonte Main
            ? "#f2f0d5"
            : "#000000"

        const menuSup = document.querySelector('#menu-sup');
        if (menuSup) {
            const botoes = menuSup.querySelectorAll('button')
            botoes.forEach(botoes => {
                botoes.style.color = linkColor;
            });


            document.body.style.backgroundImage = bgColor;
            document.body.style.border = borderColor;

            const bgSup = document.querySelector('#menu-sup');
            bgSup.style.backgroundImage = bgMenuSup

            const mainBg = document.querySelector('main');
            mainBg.style.backgroundColor = bgMain;

            const colorFont = document.querySelector('main');
            colorFont.style.color = fColor;

            const labelSpan = document.querySelectorAll('label span');
            labelSpan.forEach(span => {
                span.style.backgroundColor = spanBurger;
            });
        }
    }

}

// Chama a função quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", toggleDarkMode);


// BOTÃO MENU HAMBURGUER
function clickMenu() {
    if (hide_menu.style.display == 'block') {
        hide_menu.style.display = 'none'
    } else {
        hide_menu.style.display = 'block'
    }
}