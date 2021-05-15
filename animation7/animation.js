var circle = document.querySelector('.box');

var animate = [
    {transform: 'translate(0, 0) rotate(0deg)'},
    {transform: 'translate(100px, 300px) rotate(90deg)'},
    {transform: 'translate(200px, 120px) rotate(180deg)'},
    {transform: 'translate(300px, 60px) rotate(270deg)'},
    {transform: 'translate(400px, 200px) rotate(360deg)'},
    {transform: 'translate(500px, 60px) rotate(0deg)'},
    {transform: 'translate(600px, 0) rotate(90deg)'},
    {transform: 'translate(700px, 160px) rotate(180deg)'},
    {transform: 'translate(800px, 100px) rotate(270deg)'},
    {transform: 'translate(900px, 360px) rotate(360deg)'},
    {transform: 'translate(1000px, 120px) rotate(0deg)'},
    {transform: 'translate(1100px, 160px) rotate(90deg)'},
    {transform: 'translate(1200px, 0) rotate(180deg)'},
    {transform: 'translate(1100px, 260px) rotate(270deg)'},
    {transform: 'translate(1000px, 120px) rotate(360deg)'},
    {transform: 'translate(900px, 460px) rotate(0deg)'},
    {transform: 'translate(800px, 0) rotate(90deg)'},
    {transform: 'translate(700px, 120px) rotate(180deg)'},
    {transform: 'translate(600px, 60px) rotate(270deg)'},
    {transform: 'translate(500px, 220px) rotate(360deg)'},
    {transform: 'translate(400px, 360px) rotate(0deg)'},
    {transform: 'translate(300px, 120px) rotate(90deg)'},
    {transform: 'translate(200px, 60px) rotate(270deg)'},
    {transform: 'translate(100px, 260px) rotate(360deg)'},
    {transform: 'translate(0, 0) rotate(0deg)'},
];
var duration = {
    duration: 15000,
    iterations: Infinity
}
circle.animate(animate, duration);