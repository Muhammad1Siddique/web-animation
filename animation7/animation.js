window.addEventListener("load", function(){
    var circle = document.querySelector('.box');

var animate = [
    {transform: 'translate(0, 0) rotate(0deg)'},
    {transform: 'translate(100px, 300px) rotate(90deg)', backgroundColor:'white'},
    {transform: 'translate(200px, 120px) rotate(180deg)', backgroundColor:'blue0'},
    {transform: 'translate(300px, 60px) rotate(270deg)', backgroundColor:'green'},
    {transform: 'translate(400px, 200px) rotate(360deg)', backgroundColor:'red'},
    {transform: 'translate(500px, 60px) rotate(0deg)', backgroundColor:'yellow'},
    {transform: 'translate(600px, 0) rotate(90deg)', backgroundColor:'purple'},
    {transform: 'translate(700px, 160px) rotate(180deg)', backgroundColor:'orange'},
    {transform: 'translate(800px, 100px) rotate(270deg)', backgroundColor:'navy'},
    {transform: 'translate(900px, 360px) rotate(360deg)', backgroundColor:'yellowgreen'},
    {transform: 'translate(1000px, 120px) rotate(0deg)', backgroundColor:'skyblue'},
    {transform: 'translate(1100px, 160px) rotate(90deg)', backgroundColor:'seagreen'},
    {transform: 'translate(1200px, 0) rotate(180deg)', backgroundColor:'pink'},
    {transform: 'translate(1100px, 260px) rotate(270deg)', backgroundColor:'cyan'},
    {transform: 'translate(1000px, 120px) rotate(360deg)', backgroundColor:'brown'},
    {transform: 'translate(900px, 460px) rotate(0deg)', backgroundColor:'gold'},
    {transform: 'translate(800px, 0) rotate(90deg)', backgroundColor:'lime'},
    {transform: 'translate(700px, 120px) rotate(180deg)', backgroundColor:'gray'},
    {transform: 'translate(600px, 60px) rotate(270deg)', backgroundColor:'black'},
    {transform: 'translate(500px, 220px) rotate(360deg)', backgroundColor:'light'},
    {transform: 'translate(400px, 360px) rotate(0deg)', backgroundColor:'secondary'},
    {transform: 'translate(300px, 120px) rotate(90deg)', backgroundColor:'warning'},
    {transform: 'translate(200px, 60px) rotate(270deg)', backgroundColor:'primary'},
    {transform: 'translate(100px, 260px) rotate(360deg)', backgroundColor:'ornage'},
    {transform: 'translate(0, 0) rotate(0deg)', backgroundColor:'tomato'},
];
var duration = {
    duration: 15000,
    iterations: Infinity
}
circle.animate(animate, duration);
})
