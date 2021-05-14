var boxs = document.querySelector('#box');
boxs.animate([
    {transform: 'translate(0, 0)'},
    {transform: 'translate(1170px, 0)'},
    {transform: 'translate(0, 0)'},
],{
    duration: 5000,
    iterations: Infinity
})