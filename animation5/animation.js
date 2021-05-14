var boxs = document.querySelector('#box');
boxs.animate([
    {transform: 'translate(0, 0)', background: 'yellow'},
    {transform: 'translate(500px, 0)', background: 'green'},
    {transform: 'translate(500px, 500px)', background: 'blue'},
    {transform: 'translate(0, 500px)', background: 'red'},
    {transform: 'translate(0, 0)', background: 'orange'},
],{
    duration: 5000,
    iterations: Infinity
})