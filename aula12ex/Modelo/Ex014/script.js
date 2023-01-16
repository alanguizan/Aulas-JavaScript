function carregar(){
var msg = document.getElementById ('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getUTCMinutes()
msg.innerHTML = `<strong>Agora são ${hora}:${min} horas</strong>.`

if (hora >= 0 && hora < 12){
    // BOM DIA!
img.src = "manha.png"
document.body.style.background = '#c0d2df'

}else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = "tarde.png"
    document.body.style.background = '#a26459'

}else{
    //Boa Noite!
    img.src = "noite.png"
    document.body.style.background = '#1f303e'
}
}