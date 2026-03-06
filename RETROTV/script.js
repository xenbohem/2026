const screen = document.getElementById("screen")
const powerBtn = document.getElementById("powerBtn")
const channels = document.querySelectorAll(".channel")

let tvOn = false

function loadVideo(src){

screen.innerHTML = ""

let video = document.createElement("video")

video.src = src
video.autoplay = true
video.loop = true
video.playsInline = true

video.muted = false
video.volume = 1

video.addEventListener("canplay",()=>{
video.muted = false
video.play()
})

screen.replaceWith(video)
video.id = "screen"

}

function loadIframe(src){

let iframe = document.createElement("iframe")

iframe.src = src

screen.replaceWith(iframe)
iframe.id = "screen"

}

powerBtn.addEventListener("click",()=>{

tvOn = !tvOn

if(tvOn){

let video = document.getElementById("screen")

if(video.tagName === "VIDEO"){

video.muted = false
video.volume = 1
video.play()

}

}else{

let video = document.getElementById("screen")

if(video.tagName === "VIDEO"){
video.pause()
}

}

})

channels.forEach(channel=>{

channel.addEventListener("click",(e)=>{

e.preventDefault()

if(!tvOn) return

let type = channel.dataset.type
let src = channel.dataset.src

if(type === "video") loadVideo(src)

if(type === "iframe") loadIframe(src)

})

})
