// elementos
const navProductos = document.getElementById("navProductos")
const main = document.querySelector("main")
const form = document.querySelector(".form")
const search = document.getElementById("search")
const lupa = document.getElementById("botonBusqueda")
// productos
const productos = [{
        id: 0,
        nombre: "lorepo",
        precio: 0,
        img: "../img/productos/producto1.jpg"
    },
    {
        id: 1,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto2.jpg"
    },
    {
        id: 2,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto3.jpg"
    },
    {
        id: 3,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto4.jpg"
    },
    {
        id: 4,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto5.jpg"
    },
    {
        id: 5,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto6.jpg"
    },
    {
        id: 6,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto7.jpg"
    },
    {
        id: 7,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto8.jpg"
    },
    {
        id: 8,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto9.jpg"
    },
    {
        id: 9,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto10.jpg"
    },
    {
        id: 10,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto11.jpg"
    },
    {
        id: 11,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto12.jpg"
    },
    {
        id: 12,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto13.jpg"
    },
    {
        id: 13,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto14.jpg"
    },
    {
        id: 14,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto15.png"
    },
    {
        id: 15,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto16.png"
    },
    {
        id: 16,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto17.png"
    },
    {
        id: 17,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto18.png"
    },
    {
        id: 18,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto19.png"
    },
    {
        id: 19,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto20.png"
    },
    {
        id: 20,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto21.png"
    },
    {
        id: 21,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto22.png"
    },
    {
        id: 22,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto23.png"
    },
    {
        id: 23,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto24.png"
    },
    {
        id: 24,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto25.png"
    },
    {
        id: 25,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto26.jpg"
    },
    {
        id: 26,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto27.jpg"
    },
    {
        id: 27,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto28.jpg"
    },
    {
        id: 28,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto29.jpg"
    },
    {
        id: 29,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto30.jpg"
    },
    {
        id: 30,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto31.jpg"
    },
    {
        id: 31,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto32.jpg"
    },
    {
        id: 32,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto33.jpg"
    },
    {
        id: 33,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto34.jpg"
    },
    {
        id: 34,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto35.jpg"
    },
    {
        id: 35,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto36.jpg"
    },
    {
        id: 36,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto37.jpg"
    },
    {
        id: 37,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto38.jpg"
    },
    {
        id: 38,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto39.jpg"
    },
    {
        id: 39,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto40.jpg"
    },
    {
        id: 40,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto41.jpg"
    },
    {
        id: 41,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto42.jpg"
    },
    {
        id: 42,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto43.jpg"
    },
    {
        id: 43,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto44.jpg"
    },
    {
        id: 44,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto45.jpg"
    },
    {
        id: 45,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto46.jpg"
    },
    {
        id: 46,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto47.jpg"
    },
    {
        id: 47,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto48.jpg"
    },
    {
        id: 48,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto49.jpg"
    },
    {
        id: 49,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto50.jpg"
    },
    {
        id: 50,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto51.jpg"
    },
    {
        id: 51,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto52.jpg"
    },
    {
        id: 52,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto53.jpg"
    },
    {
        id: 53,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto54.jpg"
    },
    {
        id: 54,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto55.jpg"
    },
    {
        id: 55,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto56.jpg"
    },
    {
        id: 56,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto57.jpg"
    },
    {
        id: 57,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto58.jpg"
    },
    {
        id: 58,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto59.jpg"
    },
    {
        id: 59,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto60.jpg"
    },
    {
        id: 60,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto61.jpg"
    },
    {
        id: 61,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto62.jpg"
    },
    {
        id: 62,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto63.jpg"
    },
    {
        id: 63,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto64.jpg"
    },
    {
        id: 64,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto65.jpg"
    },
    {
        id: 65,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto66.jpg"
    },
    {
        id: 66,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto67.jpg"
    },
    {
        id: 67,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto68.jpg"
    },
    {
        id: 68,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto69.jpg"
    },
    {
        id: 69,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto70.jpg"
    },
    {
        id: 70,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto71.jpg"
    },
    {
        id: 71,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto72.jpg"
    },
    {
        id: 72,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto73.jpg"
    },
    {
        id: 73,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto74.jpg"
    },
    {
        id: 74,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto75.jpeg"
    },
    {
        id: 75,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto76.jpg"
    },
    {
        id: 76,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto77.jpg"
    },
    {
        id: 77,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto78.jpg"
    },
    {
        id: 78,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto79.jpg"
    },
    {
        id: 79,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto80.jpg"
    },
    {
        id: 80,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto81.jpg"
    },
    {
        id: 81,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto82.jpg"
    },
    {
        id: 82,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto83.jpg"
    },
    {
        id: 83,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto84.jpg"
    },
    {
        id: 84,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto85.jpg"
    },
    {
        id: 85,
        nombre: "lorem",
        precio: 0,
        img: "../img/productos/producto86.jpg"
    }
]
console.log(productos)