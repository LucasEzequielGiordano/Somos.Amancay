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
productos.push(new Producto(24, "Rompecabeza ??rbol", "./img/productos/producto53-min.jpg", false))
productos.push(new Producto(25, "Rompecabeza Pato", "./img/productos/producto57-min.jpg", false))
productos.push(new Producto(26, "Rompecabeza Koala", "./img/productos/producto36-min.jpg", false))
productos.push(new Producto(27, "Rompecabeza Rinoceronte", "./img/productos/producto37-min.jpg", false))
productos.push(new Producto(28, "Rompecabeza Dinosaurio", "./img/productos/producto45-min.jpg", false))
productos.push(new Producto(29, "Rompecabeza Tigre", "./img/productos/producto55-min.jpg", false))
productos.push(new Producto(30, "Cinta De Viento", "./img/productos/producto66-min.jpg", false))
productos.push(new Producto(31, "Pizarr??n", "./img/productos/producto71-min.jpg", false))
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
// productos.push(new Producto(68, "Rompecabeza ??rbol", 0, "./img/productos/producto52.jpg", false))
// productos.push(new Producto(69, "Aleli", 0, "./img/productos/producto59.jpg", false))
// productos.push(new Producto(70, "Aleli", 0, "./img/productos/producto61.jpg", false))
// productos.push(new Producto(71, "Aleli", 0, "./img/productos/producto62.jpg", false))
// productos.push(new Producto(72, "Aleli", 0, "./img/productos/producto63.jpg", false))
// productos.push(new Producto(73, "Kit De Pesca", 0, "./img/productos/producto64.jpg", false))
// productos.push(new Producto(74, "Cinta De Viento", 0, "./img/productos/producto67.jpg", false))
// productos.push(new Producto(75, "Cinta De Viento", 0, "./img/productos/producto68.jpg", false))
// productos.push(new Producto(76, "Memotest", 0, "./img/productos/producto69.jpg", false))
// productos.push(new Producto(77, "Pizarr??n", 0, "./img/productos/producto70.jpg", false))
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
        titulo: `Caja de comunicaci??n???????`,
        descripcion: `
        Hoy queremos compartirles una idea para hacer en casa, y porqu?? no en el aula, como feedback de nuestro d??a a d??a.???????????<br>
        La educaci??n emocional es un proceso, y como tal implica una secuencia de pasos:<br> 
        ????Reconocer y nombrar nuestras emociones.<br>
        ????Aceptarlas y validarlas como entend??bles.<br>
        ????Expresarlas.???<br>
        ????Y por ??ltimo, poder regularlas.???<br>
        Con esta actividad podemos trabajar varias de estas etapas ????????????<br>
        La propuesta es escribir (o dibujar) cosas/momentos que los y las dem??s hicieron por nosotros y nos hicieron sentir bien o no tan bien. Todo se va guardando en una cajita y podemos elegir cada cuanto tiempo abrirla y compartir lo que sentimos.???<br>
        ???????Frases disparadoras que podemos utilizar:<br>
        ????Me gust?? cuando...???<br>
        ????No me gust?? cuando...<br>
        ????Me sent?? _______ (de determinada manera) cuando....<br>
        ????Gracias por...???<br>
        ????Me gustar??a que...
        `
    }, {
        id: 1,
        imagen: './img/botiquin/momentoGratitud.png',
        titulo: `Momento de gratitud ??????????????`,
        descripcion: `
        Hoy queremos compartirles esta peque??a actividad que no es otra cosa m??s que una invitaci??n a agradecer, a identificar que nos gust?? y nos hizo bien en este d??a.????????????<br>
        Nos suele pasar(y sobre todo en este momento de aislamiento) que vivimos a mil por hora, que hacemos malabares para cumplir con todo y nos quejamos por no llegar...Todo esto nos impide disfrutar e identificar las cosas lindas que tienen nuestros d??as.?????Tambi??n te pasa ? ??A tus hijos les pasa ? ????<br>
        ?????No se preocupen!Con esta actividad podemos darnos esos 5 minutitos de amor.Sirve para chicos y tambi??n para grandes, para hacer en casa con la familia o en el aula con estudiantes.??????<br>
        A nosotras nos gusta hacerla con confites de colores o caramelos para endulzar(a??n m??s) el momento????????.Pero se puede hacer con papelitos, tapitas, lo que tengan a mano?? P??nganse creativos y creativas!??????????<br>
        Para empezar tenemos que darle a cada color un significado, por ejemplo: ??????Rojo: un momento del d??a.??????Azul: una persona.?????????Verde: una comida.??????Amarillo: un objeto.???<br>
        Despu??s al azar elegimos un conf??te(o lo que decidimos utilizar) y seg??n el color que nos toca damos gracias por algo diferente.??????????
        `
    },
    {
        id: 2,
        imagen: './img/botiquin/respiracionCuadrado.png',
        titulo: `Respiraci??n del cuadrado?????????`,
        descripcion: `
        Llega fin de a??o y nuestro cuerpo nos pide un descanso. Nos sentimos agotadas, nos cuesta concentrarnos... ??No damos mas!???????????<br>
        ??Alguien por ac?? se siente igual????????<br>
        ????????Pero tranquis, hay herramientas que nos pueden ayudar a relajarnos aliviar el estr??s y dormir mejor????????<br>
        Por ejemplo, la respiraci??n del cuadrado:???<br>
        ????Inhal?? contando hasta 4 en silencio.???<br>
        ????Reten?? el aire contando hasta 4.???<br>
        ????Exhal?? contando hasta 4.???<br>
        ????Volv?? a retener el aire contando hasta 4.<br>???
        ????????En cada uno de los pasos podes imaginar que vas recorriendo cada lado del cuadrado. Repetilo las veces que necesites!?????????
        `
    },
    {
        id: 3,
        imagen: './img/botiquin/respiracionFlor.png',
        titulo: `Respiraci??n de la Flor??? ????????????`,
        descripcion: `
        La respiraci??n de la flor es la forma perfecta para empezar a ense??arles a las y los ni??os de qu?? trata el Yoga, ??y de manera divertida!??? ????<br>
        ????????Lo primero que se debe hacer es elegir una flor que encuentren en el jard??n de su casa, o en uno cercano, o cuando vayan al campo o a la monta??a como le gusta a Amancay ??????<br>
        Es mejor que sea una flor que despida una gran fragancia, de colores llamativos, a lo mejor que combine muchos, o que sea un poco rara. ??????????<br>
???        ???????? Una vez que tengan la flor se puede invitar a las y los ni??os a que respiren hondo por la nariz. Todo lo que puedan. Y que lo expulsen por la boca.<br>
        Para empezar est?? bien. Luego, poco a poco, se les ense??ar?? a hacerlo manteniendo el aire unos segundos, dependiendo de su edad (no m??s de tres o cinco, si son de 5 o 6 a??os, 10 si ya tienen 10 a??os). Y con el tiempo aprender??n que la expulsi??n del aire por la boca se hace lentamente, no todo de golpe, como seguro que har??n al principio.???<br>???
        ????????????Si tienen varias flores pueden jugar a sentir sus aromas y luego taparse los ojos y adivinar cual es la flor que les estamos acercando.????????????
        `
    },
    {
        id: 4,
        imagen: './img/botiquin/respiracionHeroes.png',
        titulo: `Respiraci??n de superheroes y superheroinas?????????????????????????????????????`,
        descripcion: `???
        ?????????????????Lleg?? el fin de semana y los y las invitamos a relajar con estos movimientos?????????????????<br>???
        ???????????Las actividades de respiraci??n sirven para regular nuestras emociones, para relajar y tambi??n -muy??? importante- para poder focalizar la atenci??n ????. Son actividades cortas que pueden??? ayudar para iniciar una clase o alguna actividad en casa que requiera la??? atenci??n plena del ni??o o ni??a.???????<br>???
        En esta respiraci??n podemos elegir al??? superh??roe o hero??na favorita del ni??o o del grupo e imitar sus movimientos ??????????????????????????????????.<br>
        ????????Por ejemplo,??? si es Superman, podemos inhalar como si estuvi??semos volando con los??? brazos estirados hacia arriba y exhalar todo el aire bajando los brazos a la cintura en posici??n de jarra.
        `
    }
]
const botiquinJuegos = [{
        id: 0,
        imagen: './img/botiquin/buenasNoticias.png',
        titulo: `Buenas noticias??????`,
        descripcion: `
        ??Holaaaa! Esperamos que est??n muy, pero muy, bien.???????????<br>???
        Nosotras estamos llenas de emociones, inquietudes y nuevos desaf??os. Siiiiii de todo un poco, la vuelta a clases presenciales nos tiene as?? ????. ??Ustedes como lo est??n viviendo????<br>???
        Sabemos que es un a??o lleno de complejidades y por eso, m??s que nunca, deseamos poder acompa??arnos entre todos y todas.???????????????<br>???
        Hoy les compartimos esta peque??a actividad rompehielo para llenar de ???? buena energ??a ???? el aula y estimular el bienestar emocional de nuestro grupo.<br>???
        El juego se llama "Buenas noticias" y consiste en contar en pocas palabras (intentar que sean entre 5 y 10 para que no se extienda demasiado la actividad) lo mejor que nos pas?? en las vacaciones, lo m??s lindo, lo que nos caus?? mayor felicidad.???????????
        `
    },
    {
        id: 1,
        imagen: './img/botiquin/mimicaEmociones.png',
        titulo: `M??mica de emociones???????`,
        descripcion: `
        Estamos muy ansiosas por el sorteo de esta tarde y decidimos jugar para pasar el rato.???????????<br>???
        ??M??mica de emociones? ??Qu???... Es el cl??sico y muy conocido ???d??galo con m??mica??? pero cambiamos las pel??culas por emociones.<br>???
        ???????Sirve para aprender vocabulario emocional, observar c??mo se manifiestan las emociones en todo el cuerpo, poder mirar a los y las dem??s,??? ver c??mo sienten una misma emoci??n diferentes personas y prestar atenci??n a??? la comunicaci??n no verbal.??????????
        `
    }
]
const botiquinMindfullness = [{
        id: 0,
        imagen: './img/botiquin/mindfullness.png',
        titulo: `Mindfullness???`,
        descripcion: `
        Mindfullness quiere decir atenci??n plena: Es prestar atenci??n a lo que est?? sucediendo(nos)???????<br>
        ????????La pr??ctica de la atenci??n plena ayuda a mejorar:<br>
        ????La atenci??n. La pr??ctica fortalece nuestro "m??sculo mental" para enfocar nuestra atenci??n donde y cuando queramos.???<br>
        ???? La regulaci??n emocional. Observar nuestras emociones nos ayuda a reconocer cuando se producen y c??mo responder ante ellas.???<br>???
        ???? La adaptabilidad. Tomar conciencia de nuestros patrones de respuesta nos permite cambiarlos sabiamente.???<br>???
        ???? La compasi??n. La conciencia de nuestros pensamientos, emociones y sensaciones hace crecer nuestra comprensi??n de lo que otras personas est??n experimentando.<br>???
        ???? La calma. La respiraci??n y otras pr??cticas de mindfullness relajan el cuerpo y la mente.???<br>???
        ???? La resistencia. Observar sin juzgar reduce las interpretaciones que realizamos sobre los altibajos naturales de nuestras experiencias.
        `
    }, {
        id: 1,
        imagen: './img/botiquin/respiracionAbrazo.png',
        titulo: `??M??s abrazos por favor!???????`,
        descripcion: `
        Arrancamos la semana con una invitaci??n muy especial: abrazarnos.<br>
        Les proponemos tomarse unos minutos para ustedes y hacer esta respiraci??n, y si quieren compartirla con su familia ????????????????????????????????????????<br>
        ???????????????? Cerr?? los ojos, hace una respiraci??n profunda y date un abrazo. Cuando est??s listo o lista mandate pensamientos lindos como "que me sienta mejor", "que pueda resolver lo que me cuesta" o "que pueda disfrutar de la semana"
        `
    },
    {
        id: 2,
        imagen: './img/botiquin/respiracionMontania.png',
        titulo: `Monta??as, siempre????????`,
        descripcion: `
        Se acercan las vacaciones y nosotras no podemos dejar de pensar en viajar???????<br>
        ??Y aprovechamos la oportunidad para compartirles esta linda respiraci??n!<br>
        ???????????????? Vamos a dibujar en el aire ,con nuestro dedo, una monta??a. Cada vez que subimos inhalamos profundamente, y cada vez que bajamos exhalamos. Lo repetimos la cantidad de veces que sea necesario.
        `
    },
    {
        id: 3,
        imagen: './img/botiquin/soploDragon.png',
        titulo: `La respiraci??n del drag??n ???????`,
        descripcion: `???
        Un elemento importante de la atenci??n es aprender a controlar la respiraci??n. Y hay una manera de hacer que esta actividad sea muy divertida, con la respiraci??n del drag??n:????????<br>???
        ??Los ni??os y las ni??as se sientan derechas, respiran profundamente, sacan la lengua y expiran como un drag??n!???????<br>???
        Esto puede parecer rid??culo al principio, pero es muy ??til transmitir esta idea de la respiraci??n profunda al ni??o/a.<br>
        Estamos volviendo al jardin/cole y es sumamente importante soltar miedos y enojos que hemos acumulado durante todo este tiempo de aislamiento para vivenciar esta vuelta con calma y alegria.??????????<br>???
        Los invitamos a hacer esta actividad con sus hijxs antes de salir de casa para soltar miedos y disfrutar el reencuentro con sus pares al m??ximo!???<br>
        Adem??s... a qui??n no le gustaria convertirse en drag??n no????????????
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
    titulo: `UBUNTU????`,
    descripcion: `
    En estos d??as turbulentos, donde las diferencias se ponen por arriba de los puntos de encuentro, quer??amos compartirles este hermoso cuento para reflexionar juntos y juntas.????????<br>
    ???????????? Un antrop??logo estudiaba las costumbres de una peque??a tribu, y al estar siempre rodeado por los ni??os y ni??as, decidi?? hacer algo divertido para ellos. Consigui?? muchos dulces y cosas ricas y los coloc?? dentro de un canasto decorado con cintas y otros adornos; luego dej?? el cesto debajo de un ??rbol.<br>
    As??, llam?? a los ni??os y ni??as y les explic?? el juego, que consist??a en una carrera hasta el ??rbol, quien llegase en primer lugar se quedar??a con la canasta de dulces.<br>
    Los ni??os procedieron a colocarse en fila, esperando la se??al de largada.<br>
    Cuando dijo ???Ya???, inmediatamente todos los ni??os se tomaron de las manos y salieron corriendo juntos en direcci??n al canasto. Todos llegaron juntos y comenzaron a dividirse los dulces, y, sentados en el piso, comieron felices.<br>
    El antrop??logo fue al encuentro con ellos y sorprendido pregunto porque tuvieron que ir todos juntos, cuando podr??an haber tenido uno de ellos el canasto completo. <br>
    Fue ah?? cuando ellos respondieron:<br>
    ???UBUNTU, UBUNTU!!<br>
    ??C??mo solo uno de nosotros podr??a ser feliz si todo el resto estuviera triste????<br>
    UBUNTU significa: ???Yo soy lo que soy por lo que somos todos???????????
    `
}]