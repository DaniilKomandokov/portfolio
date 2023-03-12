const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1.Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-schceme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

//2. Проверка localStorage на  темную тему
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}





// Если меняем системные насторойки, то меняем тему
window.matchMedia("(prefers-color-schceme: dark)").addEventListener("change", (Event) => {
    const newColorScheme = Event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
});


// Переключатель темы
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};