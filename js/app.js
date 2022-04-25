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
        <div class="shadow card cardProductos" id="${element.id}" style="width: 18rem;">
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
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
      `
      main.appendChild(stockBusqueda)
    })
  }
})

capturarBotones()