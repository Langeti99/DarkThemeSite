const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1.Перевірка на включення темної теми в налаштуваннях системи
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2.Перевірка на включеність теми в локал сторедж
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// 3.Зміна нічного режиму - автоматично від налаштувань системи
window
  .matchMedia("(prefers-color-cheme: dark)")
  .addEventListener("change", (e) => {
    const darkScheme = e.matches ? "dark" : "light";

    alert("sdfsdf");
    console.log("sdfsdf");
    if (darkScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else if (darkScheme === "light") {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Кнопка по натиску вкл/виключає темну тему
btnDarkMode.onclick = () => {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
