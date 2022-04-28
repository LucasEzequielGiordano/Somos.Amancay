navContact.addEventListener('click', seccionContacto)

function seccionContacto() {
    main.textContent = ''
    main.innerHTML = `
    <form class="speaker-form">
        <header class="speaker-form-header">
            <h1>Formulario</h1>
            <p>Si quieres contactarnos, llena este formulario</p>
        </header>
        <div class="form-row">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" placeholder="Ingrese su nombre">
        </div>
        <div class="form-row">
            <label for="email">Mail</label>
            <input id="email" name="email" type="email" placeholder="micorreo@gmail.com">
        </div>
        <div class="form-row">
            <label for="mensaje">Escriba su mensaje</label>
            <textarea name="textarea" id="mensaje" placeholder="Me gustaría consultar..."></textarea>
            <div class="instructions">¡Muchas Gracias!</div>
        </div>
        <div class="form-row">
            <button id="enviar">Enviar</button>
        </div>
    </form>`
    validacionEmail()
}

const validacionEmail = () => {
    const btnEnvio = document.getElementById('enviar')
    btnEnvio.addEventListener('click', (e) => {
        e.preventDefault()
        const nombre = document.getElementById('nombre').value
        const mail = document.getElementById('email').value
        const mensaje = document.getElementById('mensaje').value
        window.location.href = `mailto:lucasgiordano2219@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0ACorreo%3A${mail}%0AMensaje%3A${mensaje}`
    })
}