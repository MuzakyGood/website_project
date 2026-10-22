const THEME_STORAGE_KEY = "life-fullstack-dev-theme";
const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
    const isDark = theme === "dark";

    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-checked", String(isDark));
    const toggleLabel = isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap";
    themeToggle.setAttribute("aria-label", toggleLabel);
    themeToggle.title = toggleLabel;
}

const savedTheme = sessionStorage.getItem(THEME_STORAGE_KEY);
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    sessionStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
});