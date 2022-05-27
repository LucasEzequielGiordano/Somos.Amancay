// const form = document.querySelector(".form")
// productos
class Producto {
    constructor(id, nombre, img, destacado) {
        this.id = id,
            this.nombre = nombre,
            this.img = img,
            this.destacado = destacado
    }
}

let productos = []
productos.push(new Producto(0, "Aleli", "./img/productos/producto39-min.jpg", false))
productos.push(new Producto(1, "Geronimo", "./img/productos/producto44-min.jpg", false))
productos.push(new Producto(2, "Aleli Y Geronimo", "./img/productos/producto41-min.jpg", false))
productos.push(new Producto(3, "Kit de Masas", "./img/productos/producto2-min.jpg", true))
productos.push(new Producto(4, "Equilibrio Del Espacio", "./img/productos/producto4-min.jpg", true))
productos.push(new Producto(5, "Equilibrio De Personas", "./img/productos/producto7-min.jpg", true))
productos.push(new Producto(6, "Equilibrio De Mar", "./img/productos/producto74-min.jpg", false))
productos.push(new Producto(7, "Animalitos", "./img/productos/producto14-min.jpg", false))
productos.push(new Producto(8, "Arcoiris", "./img/productos/producto33-min.jpg", false))
productos.push(new Producto(9, "Arcoiris", "./img/productos/producto34-min.jpg", false))
productos.push(new Producto(10, "Bruno", "./img/productos/producto16.png", false))
productos.push(new Producto(11, "Cata", "./img/productos/producto30-min.jpg", false))
productos.push(new Producto(12, "Oli", "./img/productos/producto58-min.jpg", false))
productos.push(new Producto(13, "Kit De Pesca", "./img/productos/producto46-min.jpg", false))
productos.push(new Producto(14, "Kit De Pesca", "./img/productos/producto65-min.jpg", false))
productos.push(new Producto(15, "Telar De Madera", "./img/productos/producto60-min.jpg", false))
productos.push(new Producto(16, "Set Viajero", "./img/productos/producto79-min.jpg", false))
productos.push(new Producto(17, "Ta Te Ti Flores", "./img/productos/producto17.png", true))
productos.push(new Producto(18, "Ta Te Ti Vaquita San Antonio", "./img/productos/producto81-min.jpg", false))
productos.push(new Producto(19, "Titeres", "./img/productos/producto80-min.jpg", false))
productos.push(new Producto(20, "Emojis", "./img/productos/producto76-min.jpg", false))
productos.push(new Producto(21, "Cuenta-Cuentos", "./img/productos/producto78-min.jpg", false))
productos.push(new Producto(22, "Memotest", "./img/productos/producto72-min.jpg", false))
productos.push(new Producto(23, "Rompecabeza", "./img/productos/producto56-min.jpg", false))
productos.push(new Producto(24, "Rompecabeza Árbol", "./img/productos/producto53-min.jpg", false))
productos.push(new Producto(25, "Rompecabeza Pato", "./img/productos/producto57-min.jpg", false))
productos.push(new Producto(26, "Rompecabeza Koala", "./img/productos/producto36-min.jpg", false))
productos.push(new Producto(27, "Rompecabeza Rinoceronte", "./img/productos/producto37-min.jpg", false))
productos.push(new Producto(28, "Rompecabeza Dinosaurio", "./img/productos/producto45-min.jpg", false))
productos.push(new Producto(29, "Rompecabeza Tigre", "./img/productos/producto55-min.jpg", false))
productos.push(new Producto(30, "Cinta De Viento", "./img/productos/producto66-min.jpg", false))
productos.push(new Producto(31, "Pizarrón", "./img/productos/producto71-min.jpg", false))
// productos.push(new Producto(32, "Salvador", 0, "./img/productos/producto51.jpg", false))
// productos.push(new Producto(33, "lorem54", 0, "./img/productos/producto54.jpg", false))
// productos.push(new Producto(34, "Kit De Masas", 100, "./img/productos/producto1.jpg", true))
// productos.push(new Producto(35, "Producto3", 200, "./img/productos/producto3.jpg", true))
// productos.push(new Producto(36, "loremProducto5", 400, "./img/productos/producto5.jpg", false))
// productos.push(new Producto(37, "loremProducto6", 550, "./img/productos/producto6.jpg", false))
// productos.push(new Producto(38, "Juego De Equilibrio Personas", 0, "./img/productos/producto8.jpg", false))
// productos.push(new Producto(39, "Juego De Equilibrio Personas", 0, "./img/productos/producto9.jpg", false))
// productos.push(new Producto(40, "Barco", 0, "./img/productos/producto10.jpg", false))
// productos.push(new Producto(41, "Barco", 0, "./img/productos/producto11.jpg", false))
// productos.push(new Producto(42, "lorem12", 0, "./img/productos/producto12.jpg", false))
// productos.push(new Producto(43, "lorem13", 0, "./img/productos/producto13.jpg", false))
// productos.push(new Producto(44, "lorem15", 0, "./img/productos/producto15.png", false))
// productos.push(new Producto(45, "lorem18", 0, "./img/productos/producto18.png", false))
// productos.push(new Producto(46, "lorem19", 0, "./img/productos/producto19.png", false))
// productos.push(new Producto(47, "Set Viajero", 0, "./img/productos/producto20.png", false))
// productos.push(new Producto(48, "lorem21", 0, "./img/productos/producto21.png", false))
// productos.push(new Producto(49, "Choque los 5", 0, "./img/productos/producto22.png", false))
// productos.push(new Producto(50, "lorem23", 0, "./img/productos/producto23.png", false))
// productos.push(new Producto(51, "lorem24", 0, "./img/productos/producto24.png", false))
// productos.push(new Producto(52, "Telar De Madera", 0, "./img/productos/producto25.png", false))
// productos.push(new Producto(53, "lorem26", 0, "./img/productos/producto26.jpg", false))
// productos.push(new Producto(54, "lorem27", 0, "./img/productos/producto27.jpg", false))
// productos.push(new Producto(55, "Rompecabeza Koala", 0, "./img/productos/producto28.jpg", false))
// productos.push(new Producto(56, "lorem29", 0, "./img/productos/producto29.jpg", false))
// productos.push(new Producto(57, "Memotest", 0, "./img/productos/producto31.jpg", false))
// productos.push(new Producto(58, "lorem32", 0, "./img/productos/producto32.jpg", false))
// productos.push(new Producto(59, "lorem35", 0, "./img/productos/producto35.jpg", false))
// productos.push(new Producto(60, "lorem38", 0, "./img/productos/producto38.jpg", false))
// productos.push(new Producto(61, "Aleli", 0, "./img/productos/producto40.jpg", false))
// productos.push(new Producto(62, "Aleli Y Geronimo", 0, "./img/productos/producto42.jpg", false))
// productos.push(new Producto(63, "lorem43", 0, "./img/productos/producto43.jpg", false))
// productos.push(new Producto(64, "lorem47", 0, "./img/productos/producto47.jpg", false))
// productos.push(new Producto(65, "lorem48", 0, "./img/productos/producto48.jpg", false))
// productos.push(new Producto(66, "lorem49", 0, "./img/productos/producto49.jpg", false))
// productos.push(new Producto(67, "lorem50", 0, "./img/productos/producto50.jpg", false))
// productos.push(new Producto(68, "Rompecabeza Árbol", 0, "./img/productos/producto52.jpg", false))
// productos.push(new Producto(69, "Aleli", 0, "./img/productos/producto59.jpg", false))
// productos.push(new Producto(70, "Aleli", 0, "./img/productos/producto61.jpg", false))
// productos.push(new Producto(71, "Aleli", 0, "./img/productos/producto62.jpg", false))
// productos.push(new Producto(72, "Aleli", 0, "./img/productos/producto63.jpg", false))
// productos.push(new Producto(73, "Kit De Pesca", 0, "./img/productos/producto64.jpg", false))
// productos.push(new Producto(74, "Cinta De Viento", 0, "./img/productos/producto67.jpg", false))
// productos.push(new Producto(75, "Cinta De Viento", 0, "./img/productos/producto68.jpg", false))
// productos.push(new Producto(76, "Memotest", 0, "./img/productos/producto69.jpg", false))
// productos.push(new Producto(77, "Pizarrón", 0, "./img/productos/producto70.jpg", false))
// productos.push(new Producto(78, "lorem73", 0, "./img/productos/producto73.jpg", false))
// productos.push(new Producto(79, "lorem75", 0, "./img/productos/producto75.jpeg", false))
// productos.push(new Producto(80, "Cuenta-Cuentos", 0, "./img/productos/producto77.jpg", false))
// productos.push(new Producto(81, "lorem82", 0, "./img/productos/producto82.jpg", false))
// productos.push(new Producto(82, "lorem83", 0, "./img/productos/producto83.jpg", false))
// productos.push(new Producto(83, "lorem84", 0, "./img/productos/producto84.jpg", false))
// productos.push(new Producto(84, "Telar de Madera", 0, "./img/productos/producto85.jpg", false))
// productos.push(new Producto(85, "Telar de Madera", 0, "./img/productos/producto86.jpg", false))


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
        imagen: './img/botiquin/cajaComunicacion.png',
        titulo: `Caja de comunicación📮✨`,
        descripcion: `
        Hoy queremos compartirles una idea para hacer en casa, y porqué no en el aula, como feedback de nuestro día a día.⁣🔄💫<br>
        La educación emocional es un proceso, y como tal implica una secuencia de pasos:<br> 
        🔸Reconocer y nombrar nuestras emociones.<br>
        🔸Aceptarlas y validarlas como entendíbles.<br>
        🔸Expresarlas.⁣<br>
        🔸Y por último, poder regularlas.⁣<br>
        Con esta actividad podemos trabajar varias de estas etapas ❣️❣️<br>
        La propuesta es escribir (o dibujar) cosas/momentos que los y las demás hicieron por nosotros y nos hicieron sentir bien o no tan bien. Todo se va guardando en una cajita y podemos elegir cada cuanto tiempo abrirla y compartir lo que sentimos.⁣<br>
        💡✨Frases disparadoras que podemos utilizar:<br>
        🔸Me gustó cuando...⁣<br>
        🔸No me gustó cuando...<br>
        🔸Me sentí _______ (de determinada manera) cuando....<br>
        🔸Gracias por...⁣<br>
        🔸Me gustaría que...
        `
    }, {
        id: 1,
        imagen: './img/botiquin/momentoGratitud.png',
        titulo: `Momento de gratitud 🙌🏽✨⁣`,
        descripcion: `
        Hoy queremos compartirles esta pequeña actividad que no es otra cosa más que una invitación a agradecer, a identificar que nos gustó y nos hizo bien en este día.⁣❣️⁣<br>
        Nos suele pasar(y sobre todo en este momento de aislamiento) que vivimos a mil por hora, que hacemos malabares para cumplir con todo y nos quejamos por no llegar...Todo esto nos impide disfrutar e identificar las cosas lindas que tienen nuestros días.⁣¿También te pasa ? ¿A tus hijos les pasa ? 🤔<br>
        ✨¡No se preocupen!Con esta actividad podemos darnos esos 5 minutitos de amor.Sirve para chicos y también para grandes, para hacer en casa con la familia o en el aula con estudiantes.⁣⁣<br>
        A nosotras nos gusta hacerla con confites de colores o caramelos para endulzar(aún más) el momento🍬🍭.Pero se puede hacer con papelitos, tapitas, lo que tengan a mano¡ Pónganse creativos y creativas!⁣🥳⁣<br>
        Para empezar tenemos que darle a cada color un significado, por ejemplo: ⁣⭕Rojo: un momento del día.⁣➖Azul: una persona.⁣✔️Verde: una comida.⁣➕Amarillo: un objeto.⁣<br>
        Después al azar elegimos un confíte(o lo que decidimos utilizar) y según el color que nos toca damos gracias por algo diferente.⁣💫✨
        `
    },
    {
        id: 2,
        imagen: './img/botiquin/respiracionCuadrado.png',
        titulo: `Respiración del cuadrado⏹️✨`,
        descripcion: `
        Llega fin de año y nuestro cuerpo nos pide un descanso. Nos sentimos agotadas, nos cuesta concentrarnos... ¡No damos mas!⁣😴😴<br>
        ¿Alguien por acá se siente igual?⁣🤔<br>
        🧡🧡Pero tranquis, hay herramientas que nos pueden ayudar a relajarnos aliviar el estrés y dormir mejor🧡🧡<br>
        Por ejemplo, la respiración del cuadrado:⁣<br>
        🔸Inhalá contando hasta 4 en silencio.⁣<br>
        🔸Retené el aire contando hasta 4.⁣<br>
        🔸Exhalá contando hasta 4.⁣<br>
        🔸Volvé a retener el aire contando hasta 4.<br>⁣
        👉🏾En cada uno de los pasos podes imaginar que vas recorriendo cada lado del cuadrado. Repetilo las veces que necesites!⁣✨⁣
        `
    },
    {
        id: 3,
        imagen: './img/botiquin/respiracionFlor.png',
        titulo: `Respiración de la Flor⁣ 🌻🌻🌻`,
        descripcion: `
        La respiración de la flor es la forma perfecta para empezar a enseñarles a las y los niños de qué trata el Yoga, ¡y de manera divertida!⁣ 🥳<br>
        👉🏾Lo primero que se debe hacer es elegir una flor que encuentren en el jardín de su casa, o en uno cercano, o cuando vayan al campo o a la montaña como le gusta a Amancay ♡⁣<br>
        Es mejor que sea una flor que despida una gran fragancia, de colores llamativos, a lo mejor que combine muchos, o que sea un poco rara. ✨🦋⁣<br>
⁣        👉🏾 Una vez que tengan la flor se puede invitar a las y los niños a que respiren hondo por la nariz. Todo lo que puedan. Y que lo expulsen por la boca.<br>
        Para empezar está bien. Luego, poco a poco, se les enseñará a hacerlo manteniendo el aire unos segundos, dependiendo de su edad (no más de tres o cinco, si son de 5 o 6 años, 10 si ya tienen 10 años). Y con el tiempo aprenderán que la expulsión del aire por la boca se hace lentamente, no todo de golpe, como seguro que harán al principio.⁣<br>⁣
        🌻🌻🌻Si tienen varias flores pueden jugar a sentir sus aromas y luego taparse los ojos y adivinar cual es la flor que les estamos acercando.🌻🌻🌻
        `
    },
    {
        id: 4,
        imagen: './img/botiquin/respiracionHeroes.png',
        titulo: `Respiración de superheroes y superheroinas🦸🏼‍♂️🦸🏽‍♀️✨`,
        descripcion: `⁣
        🤸🏽‍♂️Llegó el fin de semana y los y las invitamos a relajar con estos movimientos🤸🏽‍♂️<br>⁣
        ⁣👉🏾Las actividades de respiración sirven para regular nuestras emociones, para relajar y también -muy⁣ importante- para poder focalizar la atención 💡. Son actividades cortas que pueden⁣ ayudar para iniciar una clase o alguna actividad en casa que requiera la⁣ atención plena del niño o niña.⁣🌠<br>⁣
        En esta respiración podemos elegir al⁣ superhéroe o heroína favorita del niño o del grupo e imitar sus movimientos 🦸🏽‍♀️🦸🏼‍♂️.<br>
        👉🏾Por ejemplo,⁣ si es Superman, podemos inhalar como si estuviésemos volando con los⁣ brazos estirados hacia arriba y exhalar todo el aire bajando los brazos a la cintura en posición de jarra.
        `
    }
]
const botiquinJuegos = [{
        id: 0,
        imagen: './img/botiquin/buenasNoticias.png',
        titulo: `Buenas noticias⁣✨`,
        descripcion: `
        ¡Holaaaa! Esperamos que estén muy, pero muy, bien.⁣🤗🤗<br>⁣
        Nosotras estamos llenas de emociones, inquietudes y nuevos desafíos. Siiiiii de todo un poco, la vuelta a clases presenciales nos tiene así 🤪. ¿Ustedes como lo están viviendo?⁣<br>⁣
        Sabemos que es un año lleno de complejidades y por eso, más que nunca, deseamos poder acompañarnos entre todos y todas.⁣💞💞💞<br>⁣
        Hoy les compartimos esta pequeña actividad rompehielo para llenar de 💫 buena energía 💫 el aula y estimular el bienestar emocional de nuestro grupo.<br>⁣
        El juego se llama "Buenas noticias" y consiste en contar en pocas palabras (intentar que sean entre 5 y 10 para que no se extienda demasiado la actividad) lo mejor que nos pasó en las vacaciones, lo más lindo, lo que nos causó mayor felicidad.⁣🦋🤩
        `
    },
    {
        id: 1,
        imagen: './img/botiquin/mimicaEmociones.png',
        titulo: `Mímica de emociones💛✨`,
        descripcion: `
        Estamos muy ansiosas por el sorteo de esta tarde y decidimos jugar para pasar el rato.⁣🥳🥳<br>⁣
        ¿Mímica de emociones? ¿Qué?... Es el clásico y muy conocido “dígalo con mímica” pero cambiamos las películas por emociones.<br>⁣
        💫✨Sirve para aprender vocabulario emocional, observar cómo se manifiestan las emociones en todo el cuerpo, poder mirar a los y las demás,⁣ ver cómo sienten una misma emoción diferentes personas y prestar atención a⁣ la comunicación no verbal.⁣✨💫
        `
    }
]
const botiquinMindfullness = [{
        id: 0,
        imagen: './img/botiquin/mindfullness.png',
        titulo: `Mindfullness✨`,
        descripcion: `
        Mindfullness quiere decir atención plena: Es prestar atención a lo que está sucediendo(nos)🦋✨<br>
        👉🏾La práctica de la atención plena ayuda a mejorar:<br>
        🌼La atención. La práctica fortalece nuestro "músculo mental" para enfocar nuestra atención donde y cuando queramos.⁣<br>
        🌼 La regulación emocional. Observar nuestras emociones nos ayuda a reconocer cuando se producen y cómo responder ante ellas.⁣<br>⁣
        🌼 La adaptabilidad. Tomar conciencia de nuestros patrones de respuesta nos permite cambiarlos sabiamente.⁣<br>⁣
        🌼 La compasión. La conciencia de nuestros pensamientos, emociones y sensaciones hace crecer nuestra comprensión de lo que otras personas están experimentando.<br>⁣
        🌼 La calma. La respiración y otras prácticas de mindfullness relajan el cuerpo y la mente.⁣<br>⁣
        🌼 La resistencia. Observar sin juzgar reduce las interpretaciones que realizamos sobre los altibajos naturales de nuestras experiencias.
        `
    }, {
        id: 1,
        imagen: './img/botiquin/respiracionAbrazo.png',
        titulo: `¡Más abrazos por favor!💜✨`,
        descripcion: `
        Arrancamos la semana con una invitación muy especial: abrazarnos.<br>
        Les proponemos tomarse unos minutos para ustedes y hacer esta respiración, y si quieren compartirla con su familia 👪👨‍👩‍👦👩‍👩‍👧<br>
        👉🏾👉🏾 Cerrá los ojos, hace una respiración profunda y date un abrazo. Cuando estés listo o lista mandate pensamientos lindos como "que me sienta mejor", "que pueda resolver lo que me cuesta" o "que pueda disfrutar de la semana"
        `
    },
    {
        id: 2,
        imagen: './img/botiquin/respiracionMontania.png',
        titulo: `Montañas, siempre💫💛`,
        descripcion: `
        Se acercan las vacaciones y nosotras no podemos dejar de pensar en viajar⛰🌈<br>
        ¡Y aprovechamos la oportunidad para compartirles esta linda respiración!<br>
        👉🏾👉🏾 Vamos a dibujar en el aire ,con nuestro dedo, una montaña. Cada vez que subimos inhalamos profundamente, y cada vez que bajamos exhalamos. Lo repetimos la cantidad de veces que sea necesario.
        `
    },
    {
        id: 3,
        imagen: './img/botiquin/soploDragon.png',
        titulo: `La respiración del dragón 🐉✨`,
        descripcion: `⁣
        Un elemento importante de la atención es aprender a controlar la respiración. Y hay una manera de hacer que esta actividad sea muy divertida, con la respiración del dragón:🥳🥳<br>⁣
        ¡Los niños y las niñas se sientan derechas, respiran profundamente, sacan la lengua y expiran como un dragón!⁣🐉<br>⁣
        Esto puede parecer ridículo al principio, pero es muy útil transmitir esta idea de la respiración profunda al niño/a.<br>
        Estamos volviendo al jardin/cole y es sumamente importante soltar miedos y enojos que hemos acumulado durante todo este tiempo de aislamiento para vivenciar esta vuelta con calma y alegria.⁣💜✨<br>⁣
        Los invitamos a hacer esta actividad con sus hijxs antes de salir de casa para soltar miedos y disfrutar el reencuentro con sus pares al máximo!⁣<br>
        Además... a quién no le gustaria convertirse en dragón no?⁣💫💫
        `
    }
    // {
    //     id: 4,
    //     imagen: './img/botiquin/1soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 5,
    //     imagen: './img/botiquin/2soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 6,
    //     imagen: './img/botiquin/3soploDragon.png',
    //     descripcion: ``
    // },
    // {
    //     id: 7,
    //     imagen: './img/botiquin/4soploDragon.png',
    //     descripcion: ``
    // }
]
const botiquinCuentos = [{
    id: 0,
    imagen: './img/botiquin/soyPorqueSomos.png',
    titulo: `UBUNTU💫`,
    descripcion: `
    En estos días turbulentos, donde las diferencias se ponen por arriba de los puntos de encuentro, queríamos compartirles este hermoso cuento para reflexionar juntos y juntas.💜🌈<br>
    🟨🟪🟧 Un antropólogo estudiaba las costumbres de una pequeña tribu, y al estar siempre rodeado por los niños y niñas, decidió hacer algo divertido para ellos. Consiguió muchos dulces y cosas ricas y los colocó dentro de un canasto decorado con cintas y otros adornos; luego dejó el cesto debajo de un árbol.<br>
    Así, llamó a los niños y niñas y les explicó el juego, que consistía en una carrera hasta el árbol, quien llegase en primer lugar se quedaría con la canasta de dulces.<br>
    Los niños procedieron a colocarse en fila, esperando la señal de largada.<br>
    Cuando dijo “Ya”, inmediatamente todos los niños se tomaron de las manos y salieron corriendo juntos en dirección al canasto. Todos llegaron juntos y comenzaron a dividirse los dulces, y, sentados en el piso, comieron felices.<br>
    El antropólogo fue al encuentro con ellos y sorprendido pregunto porque tuvieron que ir todos juntos, cuando podrían haber tenido uno de ellos el canasto completo. <br>
    Fue ahí cuando ellos respondieron:<br>
    “UBUNTU, UBUNTU!!<br>
    ¿Cómo solo uno de nosotros podría ser feliz si todo el resto estuviera triste?”<br>
    UBUNTU significa: “Yo soy lo que soy por lo que somos todos“💜💫
    `
}]