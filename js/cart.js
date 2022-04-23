/* CARRITO */

let carrito = [];
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

let capturarBotones = () => {
    arregloBtnComprar = document.querySelectorAll(".btnComprar");
    for (let i = 0; i < arregloBtnComprar.length; i++) {
        arregloBtnComprar[i].addEventListener("click", (e) => {
            botonCarrito.classList.add("colorCarritoActivado");
            carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
        });
    }
}

/* FUNCIONES PARA CARRITO */

let precioTotal = () => {
    let totalPrice = 0;
    carrito.forEach(element => {
        totalPrice += element.precio * element.stock;
    });
    document.querySelector("#subtotal").textContent = totalPrice;
    return totalPrice;
};

let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};



