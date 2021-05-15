var rainy = document.getElementById('rainy');
rainy.animate([
    {transform: 'translate(10px, 10px)'},
    {transform: 'translate(90%, 10px)'},
    {transform: 'translate(10px, 10px)'}

],{
    duration: 9000,
    
    iterations: Infinity
})