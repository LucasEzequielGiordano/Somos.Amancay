// elementos
const navProductos = document.getElementById("navProductos")
const main = document.querySelector("main")
const form = document.querySelector(".form")
const search = document.getElementById("search")
const lupa = document.getElementById("botonBusqueda")
// productos
class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.precioFinal = precio
    }
}

let productos = []
productos.push(new Producto(0, "lorep", 100, "./img/productos/producto1.jpg"))
productos.push(new Producto(1, "lorem", 150, "./img/productos/producto2.jpg"))
productos.push(new Producto(2, "lorem", 200, "./img/productos/producto3.jpg"))
productos.push(new Producto(3, "lorem", 300, "./img/productos/producto4.jpg"))
productos.push(new Producto(4, "lorem", 400, "./img/productos/producto5.jpg"))
productos.push(new Producto(5, "lorem", 550, "./img/productos/producto6.jpg"))
productos.push(new Producto(6, "lorem", 1000, "./img/productos/producto7.jpg"))
productos.push(new Producto(7, "lorem", 0, "./img/productos/producto8.jpg"))
productos.push(new Producto(8, "lorem", 0, "./img/productos/producto9.jpg"))
productos.push(new Producto(9, "lorem", 0, "./img/productos/producto10.jpg"))
productos.push(new Producto(10, "lorem", 0, "./img/productos/producto11.jpg"))
productos.push(new Producto(11, "lorem", 0, "./img/productos/producto12.jpg"))
productos.push(new Producto(12, "lorem", 0, "./img/productos/producto13.jpg"))
productos.push(new Producto(13, "lorem", 0, "./img/productos/producto14.jpg"))
productos.push(new Producto(14, "lorem", 0, "./img/productos/producto15.png"))
productos.push(new Producto(15, "lorem", 0, "./img/productos/producto16.png"))
productos.push(new Producto(16, "lorem", 0, "./img/productos/producto17.png"))
productos.push(new Producto(17, "lorem", 0, "./img/productos/producto18.png"))
productos.push(new Producto(18, "lorem", 0, "./img/productos/producto19.png"))
productos.push(new Producto(19, "lorem", 0, "./img/productos/producto20.png"))
productos.push(new Producto(20, "lorem", 0, "./img/productos/producto21.png"))
productos.push(new Producto(21, "lorem", 0, "./img/productos/producto22.png"))
productos.push(new Producto(22, "lorem", 0, "./img/productos/producto23.png"))
productos.push(new Producto(23, "lorem", 0, "./img/productos/producto24.png"))
productos.push(new Producto(24, "lorem", 0, "./img/productos/producto25.png"))
productos.push(new Producto(25, "lorem", 0, "./img/productos/producto26.jpg"))
productos.push(new Producto(26, "lorem", 0, "./img/productos/producto27.jpg"))
productos.push(new Producto(27, "lorem", 0, "./img/productos/producto28.jpg"))
productos.push(new Producto(28, "lorem", 0, "./img/productos/producto29.jpg"))
productos.push(new Producto(29, "lorem", 0, "./img/productos/producto30.jpg"))
productos.push(new Producto(30, "lorem", 0, "./img/productos/producto31.jpg"))
productos.push(new Producto(31, "lorem", 0, "./img/productos/producto32.jpg"))
productos.push(new Producto(32, "lorem", 0, "./img/productos/producto33.jpg"))
productos.push(new Producto(33, "lorem", 0, "./img/productos/producto34.jpg"))
productos.push(new Producto(34, "lorem", 0, "./img/productos/producto35.jpg"))
productos.push(new Producto(35, "lorem", 0, "./img/productos/producto36.jpg"))
productos.push(new Producto(36, "lorem", 0, "./img/productos/producto37.jpg"))
productos.push(new Producto(37, "lorem", 0, "./img/productos/producto38.jpg"))
productos.push(new Producto(38, "lorem", 0, "./img/productos/producto39.jpg"))
productos.push(new Producto(39, "lorem", 0, "./img/productos/producto40.jpg"))
productos.push(new Producto(40, "lorem", 0, "./img/productos/producto41.jpg"))
productos.push(new Producto(41, "lorem", 0, "./img/productos/producto42.jpg"))
productos.push(new Producto(42, "lorem", 0, "./img/productos/producto43.jpg"))
productos.push(new Producto(43, "lorem", 0, "./img/productos/producto44.jpg"))
productos.push(new Producto(44, "lorem", 0, "./img/productos/producto45.jpg"))
productos.push(new Producto(45, "lorem", 0, "./img/productos/producto46.jpg"))
productos.push(new Producto(46, "lorem", 0, "./img/productos/producto47.jpg"))
productos.push(new Producto(47, "lorem", 0, "./img/productos/producto48.jpg"))
productos.push(new Producto(48, "lorem", 0, "./img/productos/producto49.jpg"))
productos.push(new Producto(49, "lorem", 0, "./img/productos/producto50.jpg"))
productos.push(new Producto(50, "lorem", 0, "./img/productos/producto51.jpg"))
productos.push(new Producto(51, "lorem", 0, "./img/productos/producto52.jpg"))
productos.push(new Producto(52, "lorem", 0, "./img/productos/producto53.jpg"))
productos.push(new Producto(53, "lorem", 0, "./img/productos/producto54.jpg"))
productos.push(new Producto(54, "lorem", 0, "./img/productos/producto55.jpg"))
productos.push(new Producto(55, "lorem", 0, "./img/productos/producto56.jpg"))
productos.push(new Producto(56, "lorem", 0, "./img/productos/producto57.jpg"))
productos.push(new Producto(57, "lorem", 0, "./img/productos/producto58.jpg"))
productos.push(new Producto(58, "lorem", 0, "./img/productos/producto59.jpg"))
productos.push(new Producto(59, "lorem", 0, "./img/productos/producto60.jpg"))
productos.push(new Producto(60, "lorem", 0, "./img/productos/producto61.jpg"))
productos.push(new Producto(61, "lorem", 0, "./img/productos/producto62.jpg"))
productos.push(new Producto(62, "lorem", 0, "./img/productos/producto63.jpg"))
productos.push(new Producto(63, "lorem", 0, "./img/productos/producto64.jpg"))
productos.push(new Producto(64, "lorem", 0, "./img/productos/producto65.jpg"))
productos.push(new Producto(65, "lorem", 0, "./img/productos/producto66.jpg"))
productos.push(new Producto(66, "lorem", 0, "./img/productos/producto67.jpg"))
productos.push(new Producto(67, "lorem", 0, "./img/productos/producto68.jpg"))
productos.push(new Producto(68, "lorem", 0, "./img/productos/producto69.jpg"))
productos.push(new Producto(69, "lorem", 0, "./img/productos/producto70.jpg"))
productos.push(new Producto(70, "lorem", 0, "./img/productos/producto71.jpg"))
productos.push(new Producto(71, "lorem", 0, "./img/productos/producto72.jpg"))
productos.push(new Producto(72, "lorem", 0, "./img/productos/producto73.jpg"))
productos.push(new Producto(73, "lorem", 0, "./img/productos/producto74.jpg"))
productos.push(new Producto(74, "lorem", 0, "./img/productos/producto75.jpg"))
productos.push(new Producto(75, "lorem", 0, "./img/productos/producto76.jpg"))
productos.push(new Producto(76, "lorem", 0, "./img/productos/producto77.jpg"))
productos.push(new Producto(77, "lorem", 0, "./img/productos/producto78.jpg"))
productos.push(new Producto(78, "lorem", 0, "./img/productos/producto79.jpg"))
productos.push(new Producto(79, "lorem", 0, "./img/productos/producto80.jpg"))
productos.push(new Producto(80, "lorem", 0, "./img/productos/producto81.jpg"))
productos.push(new Producto(81, "lorem", 0, "./img/productos/producto82.jpg"))
productos.push(new Producto(82, "lorem", 0, "./img/productos/producto83.jpg"))
productos.push(new Producto(83, "lorem", 0, "./img/productos/producto84.jpg"))
productos.push(new Producto(84, "lorem", 0, "./img/productos/producto85.jpg"))
productos.push(new Producto(85, "lorem", 0, "./img/productos/producto86.jpg"))