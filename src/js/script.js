document.addEventListener("DOMContentLoaded", () => {
  let i_mode = document.getElementById("mode");

  // CAMBIAR EL MODO (NIGHT OR DAY)
  i_mode.addEventListener("click", function () {
    // ESTÁ LA CLASE NIGHT
    if (i_mode.classList.contains("fa-moon")) {
      i_mode.classList.remove("fa-moon");
      i_mode.classList.add("fa-sun");

      document.documentElement.style.setProperty("--color-primario", "#3498db");
      document.documentElement.style.setProperty("--color-secundario", "#000");
      document.documentElement.style.setProperty("--color-bg", "#f0f0f0");
      document.documentElement.style.setProperty("--color-tercero", "#d4d4d4");
    } else if (i_mode.classList.contains("fa-sun")) {
      i_mode.classList.remove("fa-sun");
      i_mode.classList.add("fa-moon");

      document.documentElement.style.setProperty("--color-primario", "#cb1b28");
      document.documentElement.style.setProperty("--color-secundario", "#fff");
      document.documentElement.style.setProperty("--color-bg", "#1a1a1a");
      document.documentElement.style.setProperty("--color-tercero", "#2b2b2b");
    }
  });
});
