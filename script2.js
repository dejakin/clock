function displayTime(){
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    
    let formatted = ampm(hours);

    hours = addZero(hours);
    
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    
    hours = no24(hours);
    
    document.getElementById('t1').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatted}`    
}

function ampm(time) {
    let format = 'AM'
    if(time >= 12) {
        format = 'PM'
    }
    return format;
}


function addZero(time){
    if(time<10){
        time = "0" + time;
    }
    return time;
}

function no24(time){
    if(time === 24){
      time = '00';  
    }
    return time;
}

displayTime();
setInterval (displayTime, 1000);

