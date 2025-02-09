let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerid = null;

startBtn.addEventListener('click',function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click',function(){
        clearInterval(timerid);
    });

    resetBtn.addEventListener('click',function(){
        clearInterval(timerid);
        timerDisplay.innerHTML = '00 : 00 : 00';
        msec = secs = mins = 0;
    });

function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;

        }
    }
    let msecString = msec < 10 ? `0${msec}`: msec;
    let secString = secs  < 10 ? `0${secs}` : secs;
    let minString = mins < 10  ? `0${mins}` : mins;

    
    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;


}

