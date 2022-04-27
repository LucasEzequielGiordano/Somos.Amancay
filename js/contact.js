navContact.addEventListener('click', seccionContacto)

function seccionContacto() {
    main.textContent = ''
    main.innerHTML = `
    <form class="speaker-form">
        <div class="form-row">
            <label for="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" placeholder="Ingrese su nombre" required>
        </div>
        <div class="form-row">
            <label for="email">Mail</label>
            <input id="email" name="email" type="email" placeholder="micorreo@gmail.com" required>
        </div>
        <div class="form-row">
            <label for="abstract">Escriba su mensaje</label>
            <textarea name="textarea" id="abstract"></textarea>
            <div class="instructions">500 palabras o menos</div>
        </div>
        <div class="form-row">
            <button>submit</button>
        </div>
    </form>`
}