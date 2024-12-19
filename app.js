var trilhaSonoraAudio = document.getElementById("trilha-sonora") 
var thanks = document.getElementById("thanks") 

thanks.addEventListener("click",tocarMusica)

function tocarMusica() {
    trilhaSonoraAudio.currentTime = 4
    trilhaSonoraAudio.play()
    alert ("thanks foi tocado")
}