const hourHand = document.querySelector(".hand__hour");
const minuteHand = document.querySelector('.hand__min');
const secondHand = document.querySelector('.hand__second');


let seconds, minutes, hours;

function getTime(){
    seconds = new Date().getSeconds(),
        minutes = new Date().getMinutes(),
        hours = new Date().getHours();
}

function setHandDegree(){

    getTime();

    minuteHand.style.transform = `rotate(${(minutes / 60) * 360}deg)`;
    hourHand.style.transform = `rotate(${(((hours % 12) + (minutes / 60)) / 12) * 360 }deg)`;
    secondHand.style.transform = `rotate(${(seconds / 60) * 360}deg)`;


    setTimeout(() => {
        return setHandDegree();
    }, 1000)
}

setHandDegree();