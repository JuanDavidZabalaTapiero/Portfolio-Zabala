document.addEventListener("DOMContentLoaded", () => {
  let i_mode = document.getElementById("mode");

  // CAMBIAR EL MODO (NIGHT OR DAY)
  i_mode.addEventListener("click", function () {
    // ESTÁ LA CLASE NIGHT
    if (i_mode.classList.contains("fa-moon")) {
      i_mode.classList.remove("fa-moon");
      i_mode.classList.add("fa-sun");

      document.documentElement.style.setProperty("--color-primario", "#3498db");
      document.documentElement.style.setProperty("--color-primario-oscuro", "#1f7ab6");
      document.documentElement.style.setProperty("--color-secundario", "#000");
      document.documentElement.style.setProperty("--color-bg", "#f0f0f0");
      document.documentElement.style.setProperty("--color-tercero", "#d4d4d4");
      document.documentElement.style.setProperty("--color-tercero-oscuro", "#DFDFDF");
    } else if (i_mode.classList.contains("fa-sun")) {
      i_mode.classList.remove("fa-sun");
      i_mode.classList.add("fa-moon");

      document.documentElement.style.setProperty("--color-primario", "#cb1b28");
      document.documentElement.style.setProperty("--color-primario-oscuro", "#a71720");
      document.documentElement.style.setProperty("--color-secundario", "#fff");
      document.documentElement.style.setProperty("--color-bg", "#1a1a1a");
      document.documentElement.style.setProperty("--color-tercero", "#2b2b2b");
      document.documentElement.style.setProperty("--color-tercero-oscuro", "#202020");
    }
  });

  // ACCORDEÓN
  document.querySelectorAll(".div_accordion_head").forEach(function (header) {

    header.addEventListener("click", function () {
      var content = this.nextElementSibling;

      if (content.style.display === "block") {
        // QUITO LA CLASE OPEN AL DIV HEAD
        header.classList.remove("open");
        content.style.display = "none";
      } else {
        // PONGO LA CLASE OPEN AL DIV HEAD
        header.classList.add("open");
        content.style.display = "block";
      }
    });
  });
});
