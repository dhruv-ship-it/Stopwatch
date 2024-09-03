const display=document.querySelector(".display");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;


function start(){
    if(!isRunning)
    {
        startTime=Date.now()-elapsedTime;
        timer= setInterval(update,10);
        isRunning=true;

    }


}

function stopp(){

    if(isRunning){
    clearInterval(timer);
    isRunning=false;
    elapsedTime=Date.now()-startTime;
    }



}

function reset(){
    clearInterval(timer);
    isRunning=false;
    timer=null;
startTime=0;
elapsedTime=0;

display.textContent = `00:00:00:0000`;

}

function update(){
    let currentTime=Date.now();
    elapsedTime=currentTime-startTime;


    let hours=Math.floor(elapsedTime/(1000*60*60));
    let minutes=Math.floor((elapsedTime/(1000*60))%60);
    let seconds=Math.floor((elapsedTime/(1000))%60);
    let miliseconds=Math.floor(elapsedTime%1000);

    hours=String(hours).padStart(2,"00");
    minutes=String(minutes).padStart(2,"00");
    seconds=String(seconds).padStart(2,"00");
    miliseconds=String(miliseconds).padStart(4,"0000");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;


}