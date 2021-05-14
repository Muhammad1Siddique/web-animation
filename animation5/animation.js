var boxs = document.querySelector('#box');
boxs.animate([
    {transform: 'translate(0, 0) scale(.5)', background: 'yellow'},
    {transform: 'translate(400px, 0) scale(1)', background: 'green'},
    {transform: 'translate(400px, 400px) scale(1.5)', background: 'blue'},
    {transform: 'translate(0, 400px) scale(1)', background: 'red'},
    {transform: 'translate(0, 0) scale(.5)', background: 'orange'},
],{
    duration: 5000,
    iterations: Infinity
})