
const busqueda = document.getElementById("busqueda");
const juegos = document.querySelectorAll(".juego");

busqueda.addEventListener("input", function () {
    const texto = busqueda.value.toLowerCase();

    juegos.forEach(function (juego) {
        const nombre = juego
            .querySelector("h3")
            .textContent.toLowerCase();

        juego.style.display = nombre.includes(texto)
            ? "block"
            : "none";
    });
});
