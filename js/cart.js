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
    let hijosCarrito = contenedorProductosCarrito.childNodes
    while (hijosCarrito.length != 0) {
        hijosCarrito[0].remove();
    }
});

document.querySelector("#botonPagar").addEventListener("click", () => {
    if (carrito.length !== 0) {
        let carritoNombres = []
        for (let index = 0; index < carrito.length; index++) {
            carritoNombres.push(carrito[index].nombre)
        }
        let cantProductos = carritoNombres.length;
        if (cantProductos !== 1) {
            let productosCarro = carritoNombres.join(" | ");
            var win = window.open(`https://api.whatsapp.com/send?phone=541150127243&text=Hola, me gustaría consultar por los productos: ${productosCarro}`, '_blank');
        } else {
            let productosCarro = carritoNombres.join("");
            var win = window.open(`https://api.whatsapp.com/send?phone=541150127243&text=Hola, me gustaría consultar por el producto: ${productosCarro}`, '_blank');
        }
    }
})

/* FUNCIONES */

let actualizarContadorCarrito = () => {
    document.querySelector("#contadorProductosCarrito").textContent = carrito.length;
};

let capturarBotones = () => {
    arregloBtnComprar = document.querySelectorAll(".btnComprar");
    let capturar = 1;
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
                                            <br>
                                            <p class="nombreProductoEnCarrito">${nombreProducto}</p>
    
                                        </div>
                                        <div class="col-2">
                                            <i class="mt-4 fas fa-trash iconoBorrarCarrito${id} iconoBorrar mt-3"></i>
                                        </div>
                                    </div>
                                </div>            
                `
        contenedorProductosCarrito.append(productoCarritoIndex);
        let selectorBorrar = ".iconoBorrarCarrito" + id;
        document.querySelector(selectorBorrar).addEventListener("click", () => {
            index = carrito.map(e => e.nombre).indexOf(nombre);
            let selectorABorrar = ".contenedorCarrito" + id;
            document.querySelector(selectorABorrar).remove();
            carrito.splice(index, 1);
            actualizarContadorCarrito()
        })
    }
    actualizarContadorCarrito()
}