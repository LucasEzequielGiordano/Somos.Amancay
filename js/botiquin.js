//  SubSection Tip
document.getElementById('botiquinTip').addEventListener('click', () => {
    main.innerHTML = ''
    const botiquinEmocional = document.createElement('h2')
    botiquinEmocional.className = 'botiquinEmocional'
    botiquinEmocional.innerHTML = 'Tip'
    main.appendChild(botiquinEmocional)
    const divBotiquin = document.createElement('div')
    divBotiquin.className = 'divBotiquin'
    botiquinTip.forEach(element => {
        divBotiquin.innerHTML += `
        <div class="tip${element.id}">
        <img src="${element.imagen}">
        <h6>${element.titulo}</h6>
        <p>${element.descripcion}</p>
        </div>
        `
    })
    main.appendChild(divBotiquin)
})

//  SubSection Juegos
document.getElementById('botiquinJuegos').addEventListener('click', () => {
    main.innerHTML = ''
    const botiquinEmocional = document.createElement('h2')
    botiquinEmocional.className = 'botiquinEmocional'
    botiquinEmocional.innerHTML = 'Juegos'
    main.appendChild(botiquinEmocional)
    const divBotiquin = document.createElement('div')
    divBotiquin.className = 'divBotiquin'
    botiquinJuegos.forEach(element => {
        divBotiquin.innerHTML += `
        <div class="juegos${element.id}">
        <img src="${element.imagen}" >
        <h6>${element.titulo}</h6>
        <p>${element.descripcion}</p>
        </div>
        `
    })
    main.appendChild(divBotiquin)
})

// SubSection Mindfullness
document.getElementById('botiquinMindfullness').addEventListener('click', () => {
    main.innerHTML = ''
    const botiquinEmocional = document.createElement('h2')
    botiquinEmocional.className = 'botiquinEmocional'
    botiquinEmocional.innerHTML = 'Mindfullness'
    main.appendChild(botiquinEmocional)
    const divBotiquin = document.createElement('div')
    divBotiquin.className = 'divBotiquin'
    botiquinMindfullness.forEach(element => {
        divBotiquin.innerHTML += `
        <div class="mindfullness${element.id}">
        <img src="${element.imagen}">
        <h6>${element.titulo}</h6>
        <p>${element.descripcion}</p>
        </div>
        `
    })
    main.appendChild(divBotiquin)
})

// SubSection Cuentos
document.getElementById('botiquinCuentos').addEventListener('click', () => {
    main.innerHTML = ''
    const botiquinEmocional = document.createElement('h2')
    botiquinEmocional.className = 'botiquinEmocional'
    botiquinEmocional.innerHTML = 'Cuentos'
    main.appendChild(botiquinEmocional)
    const divBotiquin = document.createElement('div')
    divBotiquin.className = 'divBotiquin'
    botiquinCuentos.forEach(element => {
        divBotiquin.innerHTML += `
        <div class="cuentos${element.id}">
        <img src="${element.imagen}">
        <h6>${element.titulo}</h6>
        <p>${element.descripcion}</p>
        </div>
        `
    })
    main.appendChild(divBotiquin)
})