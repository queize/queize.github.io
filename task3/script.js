const trafficLight_circle1  = document.querySelector('#trafficLight-circle1');
const trafficLight_circle2  = document.querySelector('#trafficLight-circle2');
const trafficLight_circle3  = document.querySelector('#trafficLight-circle3');

const container = document.querySelector('.container');
container.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLight_circle3.style.background = 'black';
    trafficLight_circle1.style.background = 'green';
    
    container.removeEventListener('click', makeGreen);
    container.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLight_circle1.style.background = 'black';
    trafficLight_circle2.style.background = 'yellow'; 

    container.removeEventListener('click', makeYellow);
    container.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight_circle2.style.background = 'black';
    trafficLight_circle3.style.background = 'red'; 

    container.removeEventListener('click', makeRed);
    container.addEventListener('click', makeGreen);
}

