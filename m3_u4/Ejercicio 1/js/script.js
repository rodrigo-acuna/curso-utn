let container = document.querySelector('.container');
let redBox = document.querySelector('.red');
let greenBox = document.querySelector('.green');
let blueBox = document.querySelector('.blue');

redBox.addEventListener('click', function(){
    container.style = 'background-color: #f00';
});

greenBox.addEventListener('click', function(){
    container.style = 'background-color: #0f0';
});

blueBox.addEventListener('click', function(){
    container.style = 'background-color: #00f';
});