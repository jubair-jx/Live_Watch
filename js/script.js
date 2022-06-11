/*var marks = 32;

if (marks >= 80 && marks <=100 ){
    document.getElementById('jubair').innerHTML = 'A+';
}
else if(marks>= 70 && marks<=79){
    document.getElementById('jubair').innerHTML = 'A'
}
else if(marks>= 60 && marks<=69){
    document.getElementById('jubair').innerHTML = 'A-'
}
else if(marks>= 50 && marks<=59){
    document.getElementById('jubair').innerHTML = 'B'
}
else if(marks>= 40 && marks<=49){
    document.getElementById('jubair').innerHTML = 'C'
}
else if(marks>= 33 && marks<=39){
    document.getElementById('jubair').innerHTML = 'D'
}
else{
    document.getElementById('jubair').innerHTML = 'F'
}*/
function ghori(){
    var somoy = new Date(),
        gontha = somoy.getHours(),
        minit = somoy.getMinutes(),
        sec = somoy.getSeconds(),
        dinrat = 'AM';

        //Adding 0
        if(gontha < 10){
            gontha = '0'+ gontha;
        }
        if(minit < 10){
            gontha = '0' + minit;
        }
        if(sec < 10){
            sec = '0' + sec;
        }
        //AM To PM
        if(gontha > 12){
            gontha = 'PM';
        }
        //00 To 12
        if(gontha == 0){
            gontha = 12;
        }
        //convert 12 Hour
        if(gontha > 12){
            gontha = gontha -12;
        }
    document.getElementById('time').innerHTML = gontha+':' +minit+ ':'+sec + dinrat;

}
setInterval(ghori, 1000)