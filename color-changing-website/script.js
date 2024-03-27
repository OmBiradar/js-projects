// <!-- Changing text in a paragraph with input from button -->

const button = document.getElementById('myButton');
const paragraph = document.getElementById('myParagraph');

button.textContent = 'Click me now!';
paragraph.style.color = 'blue';

button.addEventListener('click', function() {
    paragraph.textContent = 'Button clicked!';
});

// <!-- Changing color of the website from user input -->

const redButton = document.getElementById('redButton')
const blueButton = document.getElementById('blueButton')
const greenButton = document.getElementById('greenButton')

redButton.addEventListener('click', function() {
    console.log("Script is running...");

    document.body.style.backgroundColor = "#ff0000";
});

blueButton.addEventListener('click', function() {
    console.log("Script is running...");

    document.body.style.backgroundColor = "#0000ff";
});

greenButton.addEventListener('click', function() {
    console.log("Script is running...");

    document.body.style.backgroundColor = '#00ff00';
});

// <!--    Center of page container    -->

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'cyan']

const colorChanger = document.getElementById('colorChanger')

colorChanger.addEventListener('click', function () {
    console.log("Script is running...");

    let color = colors[Math.floor(Math.random() * colors.length)];
    while(color === document.body.style.backgroundColor){
        color = colors[Math.floor(Math.random() * colors.length)];
    }

    document.body.style.backgroundColor = color;
    document.getElementById('currentColor').textContent = 'The current color is ' + color;
});