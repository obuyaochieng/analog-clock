setInterval(setclock,1000)
const hour1=document.querySelector('[data-hour-hand]')
const min1=document.querySelector('[data-minute-hand]')
const sec1=document.querySelector('[data-second-hand]')
function setclock(){

    const currentDate=new Date()
    seconds=currentDate.getSeconds()
    minutes=currentDate.getMinutes()
    hours=currentDate.getHours()
    const currentSeconds=(seconds)/60
    const currentMinutes= (currentSeconds+minutes)/60;
    const currentHour=(currentMinutes+hours)/12;
    setrotation(sec1,currentSeconds)
    setrotation(min1,currentMinutes)
    setrotation(hour1,currentHour)
    if (seconds<10){
        seconds='0'+seconds;
    }
    if(minutes<10){
        minutes='0'+minutes;
    }
    time=hours +":"+minutes +":"+ seconds
    document.getElementById("digital-clock").innerHTML=time
}
function setrotation(element,rotat1){
    element.style.setProperty('--rotation',rotat1*360);

}
setclock();