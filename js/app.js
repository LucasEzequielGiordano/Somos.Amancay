// evento secccion productos
navProductos.addEventListener("click", seccionProductos)
// funcion productos
function seccionProductos() {
    const stockProductos = document.createElement("div")
    stockProductos.className = "stockProductos"
    main.classname = "mainProductos"
    main.textContent = ""
    main.innerHTML = `<h1 class="titleProductos">Productos</h1>`
    productos.forEach(element => {
        stockProductos.innerHTML += ` 
        <div div class = "card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 cardProductos"
        style = "width: 18rem;" >
          <img src="${element.img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <p class="card-text">$${element.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
          </div>
        </div>
        `
        main.appendChild(stockProductos)
    })
}

const buscador = () => {
    let searchValue = search.value
    lupa.addEventListener("click", () => {
        if (searchValue) {
            // falta validacion para que me muestre solamente los productos  buscados
            main.textContent = ""
            const stockFilter = document.createElement("div")
            productos.forEach(producto => {
                stockFilter.innerHTML += ` 
                <div div class = "card col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3"
                style = "width: 18rem;" >
                  <img src="${producto.img}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$${producto.precio}</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
                `
                main.appendChild(stockFilter)
            })
        }
    })
}

// inicializacion codigo
buscador()