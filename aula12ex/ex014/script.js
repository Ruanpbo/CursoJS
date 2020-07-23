function carregar() {
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        msg.innerHTML = `Bom dia! Agora sao ${hora} horas.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#baccda'
    } else if ( hora >= 12 && hora < 18) {
        //Boa tarde!
        msg.innerHTML = `Boa tarde! Agora sao ${hora} horas.`
        img.src = 'fototarde.png'
        document.body.style.background = '#f4b25b'
    } else {
        //Boa noite!
        msg.innerHTML = `Boa noite! Agora sao ${hora} horas.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#4d4d4d'
    }
}
