var boxs = document.querySelector('#box');
boxs.animate([
    {transform: 'translate(0, 0) scale(.5) rotate(0deg)', background: 'yellow'},
    {transform: 'translate(400px, 0) scale(1) rotate(90deg)', background: 'green'},
    {transform: 'translate(400px, 400px) scale(1.5) rotate(180deg)', background: 'blue'},
    {transform: 'translate(0, 400px) scale(1) rotate(270deg)', background: 'red'},
    {transform: 'translate(0, 0) scale(.5) rotate(360deg)', background: 'orange'},
],{
    duration: 5000,
    iterations: Infinity
})