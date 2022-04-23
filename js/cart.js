/* CARRITO */

let carrito = [];
let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};

let botonCarrito = document.querySelector("#botonCarrito");
let carritoIndex = document.querySelector("#carrito");

botonCarrito.addEventListener("click", () => {
    if (carritoIndex.classList.contains("animate__fadeOutRight")) {
        carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
        botonCarrito.classList.add("colorCarritoActivado");
    } else {
        carritoIndex.classList.replace("animate__fadeInRight", "animate__fadeOutRight");
        botonCarrito.classList.remove("colorCarritoActivado");
    }
});
