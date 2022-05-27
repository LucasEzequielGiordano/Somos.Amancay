// 
const logoNav = document.getElementById('logoAmancay').addEventListener("click", () => window.location.reload())
const main = document.querySelector('main')

/* PRODUCTOS DESTACADOS EN EL HOME */

let expositorIndex = document.querySelector(".ubicarProductosDestacados");
productosDestacados.forEach(element => {
  let contenedorProductoDestacado = document.createElement("div");
  contenedorProductoDestacado.classList.add("justify-content-center", "col-sm-12", "col-md-6", "col-lg-4", "col-xl-3", "mb-5")
  contenedorProductoDestacado.innerHTML =
    `
      <div class="card cardProductos m-auto" style="width: 18rem;">
          <img src="${element.img}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title nombreProducto text-center">${element.nombre}</h5>
          <a href="#" class="btn btn-secondary btnComprar botonColorVioleta">Comprar</a>
        </div>
      </div>
  `
  expositorIndex.appendChild(contenedorProductoDestacado)
  capturarBotones()
})


// evento secccion productos
const navProductos = document.getElementById("navProductos").addEventListener("click", seccionProductos)
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
              <a href="#" class="btn btn-secondary btnComprar botonColorVioleta">Comprar</a>
            </div>
          </div>
        `
    main.appendChild(stockProductos)
    capturarBotones()
  })
}

// const search = document.getElementById("search")
// const lupa = document.getElementById("botonBusqueda")
// // filtrado de busqueda
// lupa.addEventListener("click", (e) => {
//   let searchValue = search.value
//   let stockBusqueda = document.createElement("div")
//   stockBusqueda.classList.add("stockProductos")
//   if (searchValue == null || searchValue == undefined || searchValue == '' || searchValue.trim() == '') {
//     window.location.reload()
//   } else {
//     e.preventDefault()
//     main.textContent = ''
//     search.value = ''
//     main.innerHTML = `<h1 class="titleProductos">Productos</h1>`
//     let productosBuscados = productos.filter(element => element.nombre.toLowerCase() == searchValue)
//     productosBuscados.forEach(element => {
//       stockBusqueda.innerHTML += `
//       <div class="shadow card cardProductos" id="${element.id}" style="width: 18rem;">
//         <img src="${element.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${element.nombre}</h5>
//           <a href="#" class="btn btn-primary btnComprar">Comprar</a>
//         </div>
//       </div>
//       `
//       main.appendChild(stockBusqueda)
//     })
//   }
// })