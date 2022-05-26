const form = document.querySelector(".form")
// productos
class Producto {
    constructor(id, nombre, precio, img, destacado) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.destacado = destacado
    }
}

let productos = []
productos.push(new Producto(0, "Producto1 tambien destacado", 100, "./img/productos/producto1.jpg", true))
productos.push(new Producto(1, "loremProducto2", 150, "./img/productos/producto2.jpg", false))
productos.push(new Producto(2, "Producto3 tambien destacado", 200, "./img/productos/producto3.jpg", true))
productos.push(new Producto(3, "Producto4 tambien destacado", 300, "./img/productos/producto4.jpg", true))
productos.push(new Producto(4, "loremProducto5", 400, "./img/productos/producto5.jpg", false))
productos.push(new Producto(5, "loremProducto6", 550, "./img/productos/producto6.jpg", false))
productos.push(new Producto(6, "Producto7 tambien destacado", 1000, "./img/productos/producto7.jpg", true))
productos.push(new Producto(7, "lorem8", 0, "./img/productos/producto8.jpg", false))
productos.push(new Producto(8, "lorem9", 0, "./img/productos/producto9.jpg", false))
productos.push(new Producto(9, "lorem10", 0, "./img/productos/producto10.jpg", false))
productos.push(new Producto(10, "lorem11", 0, "./img/productos/producto11.jpg", false))
productos.push(new Producto(11, "lorem12", 0, "./img/productos/producto12.jpg", false))
productos.push(new Producto(12, "lorem13", 0, "./img/productos/producto13.jpg", false))
productos.push(new Producto(13, "lorem14", 0, "./img/productos/producto14.jpg", false))
productos.push(new Producto(14, "lorem15", 0, "./img/productos/producto15.png", false))
productos.push(new Producto(15, "lorem16", 0, "./img/productos/producto16.png", false))
productos.push(new Producto(16, "lorem17", 0, "./img/productos/producto17.png", false))
productos.push(new Producto(17, "lorem18", 0, "./img/productos/producto18.png", false))
productos.push(new Producto(18, "lorem19", 0, "./img/productos/producto19.png", false))
productos.push(new Producto(19, "Set Viajero", 0, "./img/productos/producto20.png", false))
productos.push(new Producto(20, "lorem21", 0, "./img/productos/producto21.png", false))
productos.push(new Producto(21, "lorem22", 0, "./img/productos/producto22.png", false))
productos.push(new Producto(22, "lorem23", 0, "./img/productos/producto23.png", false))
productos.push(new Producto(23, "lorem24", 0, "./img/productos/producto24.png", false))
productos.push(new Producto(24, "Telar De Madera", 0, "./img/productos/producto25.png", false))
productos.push(new Producto(25, "lorem26", 0, "./img/productos/producto26.jpg", false))
productos.push(new Producto(26, "lorem27", 0, "./img/productos/producto27.jpg", false))
productos.push(new Producto(27, "lorem28", 0, "./img/productos/producto28.jpg", false))
productos.push(new Producto(28, "lorem29", 0, "./img/productos/producto29.jpg", false))
productos.push(new Producto(29, "lorem30", 0, "./img/productos/producto30.jpg", false))
productos.push(new Producto(30, "lorem31", 0, "./img/productos/producto31.jpg", false))
productos.push(new Producto(31, "lorem32", 0, "./img/productos/producto32.jpg", false))
productos.push(new Producto(32, "lorem33", 0, "./img/productos/producto33.jpg", false))
productos.push(new Producto(33, "lorem34", 0, "./img/productos/producto34.jpg", false))
productos.push(new Producto(34, "lorem35", 0, "./img/productos/producto35.jpg", false))
productos.push(new Producto(35, "lorem36", 0, "./img/productos/producto36.jpg", false))
productos.push(new Producto(36, "lorem37", 0, "./img/productos/producto37.jpg", false))
productos.push(new Producto(37, "lorem38", 0, "./img/productos/producto38.jpg", false))
productos.push(new Producto(38, "lorem39", 0, "./img/productos/producto39.jpg", false))
productos.push(new Producto(39, "lorem40", 0, "./img/productos/producto40.jpg", false))
productos.push(new Producto(40, "lorem41", 0, "./img/productos/producto41.jpg", false))
productos.push(new Producto(41, "lorem42", 0, "./img/productos/producto42.jpg", false))
productos.push(new Producto(42, "lorem43", 0, "./img/productos/producto43.jpg", false))
productos.push(new Producto(43, "lorem44", 0, "./img/productos/producto44.jpg", false))
productos.push(new Producto(44, "lorem45", 0, "./img/productos/producto45.jpg", false))
productos.push(new Producto(45, "lorem46", 0, "./img/productos/producto46.jpg", false))
productos.push(new Producto(46, "lorem47", 0, "./img/productos/producto47.jpg", false))
productos.push(new Producto(47, "lorem48", 0, "./img/productos/producto48.jpg", false))
productos.push(new Producto(48, "lorem49", 0, "./img/productos/producto49.jpg", false))
productos.push(new Producto(49, "lorem50", 0, "./img/productos/producto50.jpg", false))
productos.push(new Producto(50, "lorem51", 0, "./img/productos/producto51.jpg", false))
productos.push(new Producto(51, "lorem52", 0, "./img/productos/producto52.jpg", false))
productos.push(new Producto(52, "lorem53", 0, "./img/productos/producto53.jpg", false))
productos.push(new Producto(53, "lorem54", 0, "./img/productos/producto54.jpg", false))
productos.push(new Producto(54, "lorem55", 0, "./img/productos/producto55.jpg", false))
productos.push(new Producto(55, "lorem56", 0, "./img/productos/producto56.jpg", false))
productos.push(new Producto(56, "lorem57", 0, "./img/productos/producto57.jpg", false))
productos.push(new Producto(57, "lorem58", 0, "./img/productos/producto58.jpg", false))
productos.push(new Producto(58, "lorem59", 0, "./img/productos/producto59.jpg", false))
productos.push(new Producto(59, "lorem60", 0, "./img/productos/producto60.jpg", false))
productos.push(new Producto(60, "lorem61", 0, "./img/productos/producto61.jpg", false))
productos.push(new Producto(61, "lorem62", 0, "./img/productos/producto62.jpg", false))
productos.push(new Producto(62, "lorem63", 0, "./img/productos/producto63.jpg", false))
productos.push(new Producto(63, "lorem64", 0, "./img/productos/producto64.jpg", false))
productos.push(new Producto(64, "lorem65", 0, "./img/productos/producto65.jpg", false))
productos.push(new Producto(65, "lorem66", 0, "./img/productos/producto66.jpg", false))
productos.push(new Producto(66, "lorem67", 0, "./img/productos/producto67.jpg", false))
productos.push(new Producto(67, "lorem68", 0, "./img/productos/producto68.jpg", false))
productos.push(new Producto(68, "lorem69", 0, "./img/productos/producto69.jpg", false))
productos.push(new Producto(69, "lorem70", 0, "./img/productos/producto70.jpg", false))
productos.push(new Producto(70, "lorem71", 0, "./img/productos/producto71.jpg", false))
productos.push(new Producto(71, "lorem72", 0, "./img/productos/producto72.jpg", false))
productos.push(new Producto(72, "lorem73", 0, "./img/productos/producto73.jpg", false))
productos.push(new Producto(73, "lorem74", 0, "./img/productos/producto74.jpg", false))
productos.push(new Producto(74, "lorem75", 0, "./img/productos/producto75.jpeg", false))
productos.push(new Producto(75, "lorem76", 0, "./img/productos/producto76.jpg", false))
productos.push(new Producto(76, "lorem77", 0, "./img/productos/producto77.jpg", false))
productos.push(new Producto(77, "lorem78", 0, "./img/productos/producto78.jpg", false))
productos.push(new Producto(78, "lorem79", 0, "./img/productos/producto79.jpg", false))
productos.push(new Producto(79, "lorem80", 0, "./img/productos/producto80.jpg", false))
productos.push(new Producto(80, "lorem81", 0, "./img/productos/producto81.jpg", false))
productos.push(new Producto(81, "lorem82", 0, "./img/productos/producto82.jpg", false))
productos.push(new Producto(82, "lorem83", 0, "./img/productos/producto83.jpg", false))
productos.push(new Producto(83, "lorem84", 0, "./img/productos/producto84.jpg", false))
productos.push(new Producto(84, "Telar de Madera", 0, "./img/productos/producto85.jpg", false))
productos.push(new Producto(85, "Telar de Madera", 0, "./img/productos/producto86.jpg", false))


/* PRODUCTOS DESTACADOS */

let productosDestacados = [];
productos.forEach(element => {
    if (element.destacado == true) {
        productosDestacados.push(element)
    }
})


// productos del recursero
const botiquinTip = [{
        id: 0,
        imagen: '../img/botiquin/cajaComunicacion.png',
        descripcion: `Caja de comunicación 📮✨
⁣
        Hoy queremos compartirles una idea para hacer en casa, y porqué no en el aula, como feedback de nuestro día a día.⁣🔄💫
⁣
        La educación emocional es un proceso, y como tal implica una secuencia de pasos :⁣
        🔸Reconocer y nombrar nuestras emociones⁣
        🔸Aceptarlas y validarlas como entendíbles.⁣
        🔸Expresarlas.⁣
        🔸Y por último, poder regularlas.⁣
⁣
        Con esta actividad podemos trabajar varias de estas etapas ❣️❣️
⁣
        La propuesta es escribir (o dibujar) cosas/momentos que los y las demás hicieron por nosotros y nos hicieron sentir bien o no tan bien. Todo se va guardando en una cajita y podemos elegir cada cuanto tiempo abrirla y compartir lo que sentimos.⁣
⁣
        💡✨Frases disparadoras que podemos utilizar :⁣
⁣
        🔸Me gustó cuando...⁣
        🔸No me gustó cuando...⁣
        🔸Me sentí _______ (de determinada manera) cuando....⁣
        🔸Gracias por...⁣
        🔸Me gustaría que...`
    }, {
        id: 1,
        imagen: '../img/botiquin/momentoGratitud.png',
        descripcion: `Momento de gratitud 🙌🏽✨⁣
        Hoy queremos compartirles esta pequeña actividad que no es otra cosa más que una invitación a agradecer, a identificar que nos gustó y nos hizo bien en este día.⁣❣️⁣
        Nos suele pasar(y sobre todo en este momento de aislamiento) que vivimos a mil por hora, que hacemos malabares para cumplir con todo y nos quejamos por no llegar...Todo esto nos impide disfrutar e identificar las cosas lindas que tienen nuestros días.⁣¿También te pasa ? ¿A tus hijos les pasa ? 🤔

        ⁣‼️✨¡No se preocupen!Con esta actividad podemos darnos esos 5 minutitos de amor.Sirve para chicos y también para grandes, para hacer en casa con la familia o en el aula con estudiantes.⁣⁣
        A nosotras nos gusta hacerla con confites de colores o caramelos para endulzar(aún más) el momento🍬🍭.Pero se puede hacer con papelitos, tapitas, lo que tengan a mano¡ Pónganse creativos y creativas!⁣🥳⁣
        Para empezar tenemos que darle a cada color un significado, por ejemplo: ⁣⭕Rojo: un momento del día.⁣➖Azul: una persona.⁣✔️Verde: una comida.⁣➕Amarillo: un objeto.⁣

        Después al azar elegimos un confíte(o lo que decidimos utilizar) y según el color que nos toca damos gracias por algo diferente.⁣💫✨`
    },
    {
        id: 2,
        imagen: '../img/botiquin/respiracionCuadrado.png',
        descripcion: `Respiración del cuadrado ⬜ ✨
⁣
        Llega fin de año y nuestro cuerpo nos pide un descanso. Nos sentimos agotadas, nos cuesta concentrarnos... ¡No damos mas!⁣😴😴
⁣
        ¿Alguien por acá se siente igual?⁣🤔
⁣
        🧡🧡Pero tranquis, hay herramientas que nos pueden ayudar a relajarnos aliviar el estrés y dormir mejor🧡🧡
⁣
        Por ejemplo, la respiración del cuadrado :⁣
        🔸Inhalá contando hasta 4 en silencio.⁣
        🔸Retené el aire contando hasta 4.⁣
        🔸Exhalá contando hasta 4.⁣
        🔸Volvé a retener el aire contando hasta 4.⁣
⁣
        👉🏾En cada uno de los pasos podes imaginar que vas recorriendo cada lado del cuadrado. Repetilo las veces que necesites!⁣✨⁣`
    },
    {
        id: 3,
        imagen: '../img/botiquin/respiracionFlor.png',
        descripcion: `Respiración de la Flor⁣ 🌻🌻🌻
⁣
        La respiración de la flor es la forma perfecta para empezar a enseñarles a las y los niños de qué trata el Yoga, ¡y de manera divertida!⁣ 🥳
⁣
        👉🏾Lo primero que se debe hacer es elegir una flor que encuentren en el jardín de su casa, o en uno cercano, o cuando vayan al campo o a la montaña como le gusta a Amancay ♡⁣
    ⁣
        Es mejor que sea una flor que despida una gran fragancia, de colores llamativos, a lo mejor que combine muchos, o que sea un poco rara. ✨🦋 ⁣
⁣
        👉🏾 Una vez que tengan la flor se puede invitar a las y los niños a que respiren hondo por la nariz. Todo lo que puedan. Y que lo expulsen por la boca.⁣
        Para empezar está bien. Luego, poco a poco, se les enseñará a hacerlo manteniendo el aire unos segundos, dependiendo de su edad (no más de tres o cinco, si son de 5 o 6 años, 10 si ya tienen 10 años). Y con el tiempo aprenderán que la expulsión del aire por la boca se hace lentamente, no todo de golpe, como seguro que harán al principio.⁣
⁣
        🌻🌻🌻Si tienen varias flores pueden jugar a sentir sus aromas y luego taparse los ojos y adivinar cual es la flor que les estamos acercando.🌻🌻🌻`
    },
    {
        id: 4,
        imagen: '../img/botiquin/cajaComunicacion.png',
        descripcion: `Caja de comunicación 📮✨
⁣
        Hoy queremos compartirles una idea para hacer en casa, y porqué no en el aula, como feedback de nuestro día a día.⁣🔄💫
⁣
        La educación emocional es un proceso, y como tal implica una secuencia de pasos :⁣
        🔸Reconocer y nombrar nuestras emociones⁣
        🔸Aceptarlas y validarlas como entendíbles.⁣
        🔸Expresarlas.⁣
        🔸Y por último, poder regularlas.⁣
⁣
        Con esta actividad podemos trabajar varias de estas etapas ❣️❣️
⁣
        La propuesta es escribir (o dibujar) cosas/momentos que los y las demás hicieron por nosotros y nos hicieron sentir bien o no tan bien. Todo se va guardando en una cajita y podemos elegir cada cuanto tiempo abrirla y compartir lo que sentimos.⁣
⁣
        💡✨Frases disparadoras que podemos utilizar :⁣
⁣
        🔸Me gustó cuando...⁣
        🔸No me gustó cuando...⁣
        🔸Me sentí _______ (de determinada manera) cuando....⁣
        🔸Gracias por...⁣
        🔸Me gustaría que...`
    },
    {
        id: 5,
        imagen: '../img/botiquin/respiracionHeroes.png',
        descripcion: `Respiración de superheroes y superheroinas 🦸🏼‍♂️🦸🏽‍♀️✨
⁣
        🤸🏽‍♂️Llegó el fin de semana y los y las invitamos a relajar con estos movimientos 🤸🏽‍♂️
⁣
        ⁣👉🏾Las actividades de respiración sirven para regular nuestras emociones, para relajar y también -muy⁣ importante- para poder focalizar la atención 💡. Son actividades cortas que pueden ⁣
        ayudar para iniciar una clase o alguna actividad en casa que requiera la⁣ atención plena del niño o niña. ⁣🌠
⁣
        En esta respiración podemos elegir al⁣ superhéroe o heroína favorita del niño o del grupo e imitar sus movimientos 🦸🏽‍♀️🦸🏼‍♂️.

        👉🏾Por ejemplo,⁣ si es Superman, podemos inhalar como si estuviésemos volando con los⁣
        brazos estirados hacia arriba y exhalar todo el aire bajando los brazos a la cintura en posición de jarra.`
    }
]
const botiquinJuegos = [{
        id: 0,
        imagen: '../img/botiquin/buenasNoticias.png',
        descripcion: `Buenas noticias⁣✨
⁣
        ¡Holaaaa! Esperamos que estén muy, pero muy, bien.⁣🤗🤗
⁣
        Nosotras estamos llenas de emociones, inquietudes y nuevos desafíos. Siiiiii de todo un poco, la vuelta a clases presenciales nos tiene así 🤪. ¿Ustedes como lo están viviendo?⁣
⁣
        Sabemos que es un año lleno de complejidades y por eso, más que nunca, deseamos poder acompañarnos entre todos y todas.⁣💞💞💞
⁣
        Hoy les compartimos esta pequeña actividad rompehielo para llenar de 💫 buena energía 💫 el aula y estimular el bienestar emocional de nuestro grupo.⁣
⁣
        El juego se llama "Buenas noticias" y consiste en contar en pocas palabras (intentar que sean entre 5 y 10 para que no se extienda demasiado la actividad) lo mejor que nos pasó en las vacaciones, lo más lindo, lo que nos causó mayor felicidad.⁣ 🦋🤩`
    },
    {
        id: 1,
        imagen: '../img/botiquin/mimicaEmociones.png',
        descripcion: `Mímica de emociones 💛✨
⁣
        Estamos muy ansiosas por el sorteo de esta tarde y decidimos jugar para pasar el rato. ⁣🥳🥳
⁣
        ¿Mímica de emociones? ¿Qué?... Es el clásico y muy conocido “dígalo con mímica” pero cambiamos las películas por emociones. ⁣
⁣
        💫✨Sirve para aprender vocabulario emocional, observar cómo se manifiestan las emociones en todo el cuerpo, poder mirar a los y las demás,⁣
        ver cómo sienten una misma emoción diferentes personas y prestar atención a⁣ la comunicación no verbal.⁣ ✨💫`
    }
]
const botiquinMindfullness = [{
        id: 0,
        imagen: '../img/botiquin/mindfullness.png',
        descripcion: `Mindfullness ✨
⁣
        Mindfullness quiere decir atención plena: Es prestar atención a lo que está sucediendo(nos) 🦋✨
⁣
        👉🏾La práctica de la atención plena ayuda a mejorar:⁣
⁣
        🌼La atención. La práctica fortalece nuestro "músculo mental" para enfocar nuestra atención donde y cuando queramos.⁣
⁣
        🌼 La regulación emocional. Observar nuestras emociones nos ayuda a reconocer cuando se producen y cómo responder ante ellas.⁣
⁣
        🌼 La adaptabilidad. Tomar conciencia de nuestros patrones de respuesta nos permite cambiarlos sabiamente.⁣
⁣
        🌼 La compasión. La conciencia de nuestros pensamientos, emociones y sensaciones hace crecer nuestra comprensión de lo que otras personas están experimentando.⁣
⁣
        🌼 La calma. La respiración y otras prácticas de mindfullness relajan el cuerpo y la mente.⁣
⁣
        🌼 La resistencia. Observar sin juzgar reduce las interpretaciones que realizamos sobre los altibajos naturales de nuestras experiencias.`
    }, {
        id: 1,
        imagen: '../img/botiquin/respiracionAbrazo.png',
        descripcion: `¡Más abrazos por favor! 💜✨

        Arrancamos la semana con una invitación muy especial: abrazarnos.

        Les proponemos tomarse unos minutos para ustedes y hacer esta respiración, y si quieren compartirla con su familia 👪 👨‍👩‍👦👩‍👩‍👧

        👉🏾👉🏾 Cerrá los ojos, hace una respiración profunda y date un abrazo. Cuando estés listo o lista mandate pensamientos lindos como "que me sienta mejor", "que pueda resolver lo que me cuesta" o "que pueda disfrutar de la semana"`
    },
    {
        id: 2,
        imagen: '../img/botiquin/respiracionMontania.png',
        descripcion: `Montañas, siempre 💫💛

        Se acercan las vacaciones y nosotras no podemos dejar de pensar en viajar ⛰🌈

        ¡Y aprovechamos la oportunidad para compartirles esta linda respiración!

        👉🏾👉🏾 Vamos a dibujar en el aire ,con nuestro dedo, una montaña. Cada vez que subimos inhalamos profundamente, y cada vez que bajamos exhalamos. Lo repetimos la cantidad de veces que sea necesario.`
    },
    {
        id: 3,
        imagen: '../img/botiquin/soploDragon.png',
        descripcion: `La respiración del dragón 🐉✨
⁣
        Un elemento importante de la atención es aprender a controlar la respiración. Y hay una manera de hacer que esta actividad sea muy divertida, con la respiración del dragón: 🥳🥳
⁣
        ¡Los niños y las niñas se sientan derechas, respiran profundamente, sacan la lengua y expiran como un dragón!⁣ 🐉
⁣
        Esto puede parecer ridículo al principio, pero es muy útil transmitir esta idea de la respiración profunda al niño/a. ⁣
⁣
        Estamos volviendo al jardin/cole y es sumamente importante soltar miedos y enojos que hemos acumulado durante todo este tiempo de aislamiento para vivenciar esta vuelta con calma y alegria.⁣ 💜✨
⁣
        Los invitamos a hacer esta actividad con sus hijxs antes de salir de casa para soltar miedos y disfrutar el reencuentro con sus pares al máximo!⁣
⁣
        Además... a quién no le gustaria convertirse en dragón no? ⁣💫💫`
    }
    // {
    //     id: 4,
    //     imagen: '../img/botiquin/1soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 5,
    //     imagen: '../img/botiquin/2soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 6,
    //     imagen: '../img/botiquin/3soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 7,
    //     imagen: '../img/botiquin/4soploDragon.png',
    //     descripcion: ``
    // }
]
const botiquinCuentos = [{
    id: 0,
    imagen: '../img/botiquin/soyPorqueSomos.png',
    descripcion: `UBUNTU 💫

        En estos días turbulentos, donde las diferencias se ponen por arriba de los puntos de encuentro, queríamos compartirles este hermoso cuento para reflexionar juntos y juntas. 💜🌈

        🟨🟪🟧 Un antropólogo estudiaba las costumbres de una pequeña tribu, y al estar siempre rodeado por los niños y niñas, decidió hacer algo divertido para ellos. Consiguió muchos dulces y cosas ricas y los colocó dentro de un canasto decorado con cintas y otros adornos; luego dejó el cesto debajo de un árbol.

        Así, llamó a los niños y niñas y les explicó el juego, que consistía en una carrera hasta el árbol, quien llegase en primer lugar se quedaría con la canasta de dulces.  

        Los niños procedieron a colocarse en fila, esperando la señal de largada. 

        Cuando dijo “Ya”, inmediatamente todos los niños se tomaron de las manos y salieron corriendo juntos en dirección al canasto. Todos llegaron juntos y comenzaron a dividirse los dulces, y, sentados en el piso, comieron felices. 

        El antropólogo fue al encuentro con ellos y sorprendido pregunto porque tuvieron que ir todos juntos, cuando podrían haber tenido uno de ellos el canasto completo.

        Fue ahí cuando ellos respondieron: 
        “UBUNTU, UBUNTU!!
        ¿Cómo solo uno de nosotros podría ser feliz si todo el resto estuviera triste?”

        UBUNTU significa: “Yo soy lo que soy por lo que somos todos“ 💜💫`
}]