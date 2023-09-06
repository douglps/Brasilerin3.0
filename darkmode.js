//BOTÃO DARKMODE
function toggleDarkMode() {
    const modeCheckbox = document.getElementById("mode");
    const darkModeButton = document.getElementById("dark_m");

    darkModeButton.addEventListener("click", function() {
        modeCheckbox.checked = !modeCheckbox.checked;
        setDarkMode(modeCheckbox.checked);
    });
    
    // Define o estilo de fundo com base no estado inicial do modo
    setDarkMode(modeCheckbox.checked);

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
    
        const linkColor = isDarkMode // Cor Links Menu Superior
            ? "#3993aa"
            : "#1c1c1c";
            
        const borderSup = isDarkMode // Cor Borda Links Menu Superior
            ? "3px #1c1c1c solid"
            : "2px #f2f0d5 solid"

        const fSize = isDarkMode // Tamanho fonte Menu Superior
            ? "1.3em"
            : "1.2em"

        const bgMain = isDarkMode // Cor Background Main
            ? "#181920"
            : "#59deff4b"

        const fColor = isDarkMode // Cor Fonte Main
            ? "#f2f0d5"
            : "#000000"

        const menuSup = document.querySelector('#menu-sup');
            if (menuSup) {
                const links = menuSup.querySelectorAll('a')
                links.forEach(link => {
                    link.style.color = linkColor;
                    link.style.border = borderSup;
                    link.style.fontSize = fSize;
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


// ROTAÇÃO DO BOTÃO DARK MODE
function rotateDarkButton() {
    const darkButton = document.getElementById("dark_m");

    darkButton.style.transition = "transform .5s";

    darkButton.addEventListener("click", () => {
        darkButton.style.transform = darkButton.style.transform ? "" : "rotate(calc(3*180deg))";
    });
}

document.addEventListener("DOMContentLoaded", rotateDarkButton);

// BOTÃO MENU HAMBURGUER
function clickMenu() {
    if (hide_menu.style.display == 'block') {
        hide_menu.style.display = 'none'
    } else {
        hide_menu.style.display = 'block'
    }
}