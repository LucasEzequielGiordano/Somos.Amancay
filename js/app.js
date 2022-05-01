/* PRODUCTOS DESTACADOS EN EL HOME */

let expositorIndex = document.querySelector(".ubicarProductosDestacados");
productosDestacados.forEach(element => {
  let contenedorProductoDestacado = document.createElement("div");
  contenedorProductoDestacado.classList.add("justify-content-space-around", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3")
  contenedorProductoDestacado.innerHTML =
    `
      <div class="card cardProductos" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title nombreProducto text-center">${element.nombre}</h5>
          <p class="card-text textoExpositor">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro
            mollitia ratione sed quo ut non aspernatur vero vitae praesentium est.</p>
          <p class="card-text precioProducto text-center">$${element.precio}</p>
          <a href="#" class="btn btn-secondary btnComprar botonColorVioleta">Comprar</a>
        </div>
      </div>
  `
  expositorIndex.appendChild(contenedorProductoDestacado)
  capturarBotones()
})


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
    stockProductos.innerHTML +=
      `
          <div class="shadow card cardProductos" id="${element.id}" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <span style="display: none" class="idProducto">${element.id}</span>
              <h5 class="card-title nombreProducto text-center">${element.nombre}</h5>
              <p class="card-text precioProducto">$${element.precio}</p>
              <a href="#" class="btn btn-secondary btnComprar botonColorVioleta">Comprar</a>
            </div>
          </div>
        `
    main.appendChild(stockProductos)
    capturarBotones()
  })
}

// filtrado de busqueda
lupa.addEventListener("click", (e) => {
  let searchValue = search.value
  let stockBusqueda = document.createElement("div")
  stockBusqueda.classList.add("stockProductos")
  if (searchValue == null || searchValue == undefined || searchValue == '') {
    window.location.reload()
  } else {
    e.preventDefault()
    main.textContent = ''
    search.value = ''
    let productosBuscados = productos.filter(element => element.nombre == searchValue)
    main.innerHTML = `<h1 class="titleProductos">Productos</h1>`
    productosBuscados.forEach(element => {
      stockBusqueda.innerHTML += `
      <div class="shadow card cardProductos" id="${element.id}" style="width: 18rem;">
        <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">$${element.precio}</p>
          <a href="#" class="btn btn-primary btnComprar">Comprar</a>
        </div>
      </div>
      `
      main.appendChild(stockBusqueda)
    })
  }
})
