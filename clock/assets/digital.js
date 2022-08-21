const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")

const clock = setInterval(function time(){
    var datetoday=new Date();
    var hr = datetoday.getHours();
    var min = datetoday.getMinutes();
    var sec = datetoday.getSeconds();

    if (hr<10) {
        hours.textContent = "0" + hr; 
    }else {
        hours.textContent = hr
        
    }

    if (min<10) {
        minutes.textContent = "0"+min
        
    }else{
        minutes.textContent = min
    }

    if (sec<10) {
        seconds.textContent = "0"+sec
    }else{
        seconds.textContent = sec
    }


})