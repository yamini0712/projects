let hourspan=document.getElementById('hour')
let minutespan=document.getElementById('minute')
let secondspan=document.getElementById('second')
let amorpmspan=document.getElementById('amorpm')

function ChangeTime(){
    let date=new Date()
    let hour=date.getHours()
    hourspan.innerHTML=hour
    let minutes=date.getMinutes()
    minutespan.innerHTML=minutes
    let second=date.getSeconds()
    secondspan.innerHTML=second
    if(hour===0){
        amorpm="AM"
    }else if (hour >0 && hour<12){
        amorpm="AM"
    }else
{
    amorpm="PM"

}

amorpmspan.textContent=amorpm
}
setInterval(ChangeTime,1000)