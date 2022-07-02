clock = document.querySelector("#clock")

function formatTime(time){
    return String(time).padStart(2, '0')
}

function tickTock(){
    const date = new Date()
    const hour = formatTime(date.getHours())
    const min = formatTime(date.getMinutes())
    const sec = formatTime(date.getSeconds())
    clock.innerText = `${hour}:${min}:${sec}`
}

setInterval(tickTock, 1)