const recursero = () => {
    main.innerHTML = ''
    main.className = 'mainBotiquin'
    const botiquinEmocional = document.createElement('h2')
    botiquinEmocional.className = 'botiquinEmocional'
    botiquinEmocional.innerHTML = 'Botiquin Emocional'
    main.appendChild(botiquinEmocional)
    const divBotiquin = document.createElement('div')
    divBotiquin.className = 'divBotiquin'
    divBotiquin.innerHTML = `
    
    `
}

const navBotiquin = document.getElementById('navBotiquin').addEventListener('click', recursero)