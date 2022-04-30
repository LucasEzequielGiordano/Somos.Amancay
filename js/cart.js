/* CARRITO */

/* VARIABLES GLOBALES */

let carrito = [];
let botonCarrito = document.querySelector("#botonCarrito");
let carritoIndex = document.querySelector("#carrito");
let contenedorProductosCarrito = document.querySelector("#contenedorProductos");

/* LISTENERS */

botonCarrito.addEventListener("click", () => {
    if (carritoIndex.classList.contains("animate__fadeOutRight")) {
        carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
        botonCarrito.classList.add("colorCarritoActivado");
    } else {
        carritoIndex.classList.replace("animate__fadeInRight", "animate__fadeOutRight");
        botonCarrito.classList.remove("colorCarritoActivado");
    }
});


document.querySelector(".vaciarCarro").addEventListener("click", () => {
    carrito = [];
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
    document.querySelector("#subtotal").textContent = 0;
    let hijosCarrito = contenedorProductosCarrito.childNodes
    while (hijosCarrito.length != 0) {
        hijosCarrito[0].remove();
    }
});

/* FUNCIONES */

let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};

let precioTotal = () => {
    let totalPrice = 0;
    carrito.forEach(element => {
        totalPrice += element.precio;
    });
    document.querySelector("#subtotal").textContent = totalPrice;
    return totalPrice;
};

let capturarBotones = () => {
    arregloBtnComprar = document.querySelectorAll(".btnComprar");
    let capturar = 1;
    precioTotal();
    actualizarContadorCarrito();
    for (let i = 0; i < arregloBtnComprar.length; i++) {
        arregloBtnComprar[i].addEventListener("click", (e) => {
            botonCarrito.classList.add("colorCarritoActivado");
            carritoIndex.classList.replace("animate__fadeOutRight", "animate__fadeInRight");
            funcionalidadBotones(e, i, capturar)
        });
    }
}

/* FUNCIONALIDAD BOTONES */

let funcionalidadBotones = (e, i, capturar) => {
    let contenedorProducto = e.target.parentElement;
    let nombre = contenedorProducto.querySelector(".nombreProducto").textContent;
    let producto = productos.filter(x => x.nombre == nombre);
    let nombreProducto = producto[0].nombre;
    if (carrito.some(x => x.nombre == nombreProducto)) {
        console.log('EL PRODUCTO ' + nombreProducto + ' YA SE ENCUENTRA EN EL CARRITO.');
    } else {
        let precio = producto[0].precio;
        let img = producto[0].img;
        let id = producto[0].id;
        let clon = Object.assign({}, producto[0]);
        carrito.push(clon);
        let productoCarritoIndex = document.createElement("div");
        productoCarritoIndex.innerHTML =
            `
                                <div class="container-fluid contenedorProductoCarritoIndex contenedorCarrito${id}">
                                    <div class="row row-cols-2 ">
                                        <div class="col-2">
                                            <img src="${img}">
                                        </div>
                                        <div class="col-1">
                                            <span>
                                        </div>
                                        <div class="col-7 text-center">
                                            <p class="nombreDiscoEnCarrito">${nombreProducto}</p>
                                            <p class="nombreDiscoEnCarrito"><strong>$${precio}</strong></p>
                                        </div>
                                        <div class="col-2">
                                            <i class="fas fa-trash iconoBorrarCarrito${id} iconoBorrar mt-3"></i>
                                        </div>
                                    </div>
                                </div>            
                `
        console.log(productoCarritoIndex);
        contenedorProductosCarrito.append(productoCarritoIndex);
        let selectorBorrar = ".iconoBorrarCarrito" + id;
        document.querySelector(selectorBorrar).addEventListener("click", () => {
            index = carrito.map(e => e.nombre).indexOf(nombre);
            let selectorABorrar = ".contenedorCarrito" + id;
            document.querySelector(selectorABorrar).remove();
            carrito.splice(index, 1);
            precioTotal();
            actualizarContadorCarrito()
        })
    }

    precioTotal();
    actualizarContadorCarrito()
}