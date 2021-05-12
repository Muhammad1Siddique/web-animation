const replace = document.getElementById('replace');
const add = document.getElementById('add');

const scaleKeyframes = [
    {transform: 'scale(1)'},
    {transform: 'scale(1.5)'}
]

const scaleTiming = {
    duration: 2100,
    iterations:Infinity,
    direction: 'alternate',
    easing: 'ease-in-out'
}

const rotateKeyframes = [
    {transform: 'rotate(0deg'},
    {transform: 'rotate(180deg'}
]
const rotateTiming = {
    duration: 3000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in'
}

replace.animate(scaleKeyframes, scaleTiming);
replace.animate(rotateKeyframes, rotateTiming);

add.animate(scaleKeyframes, Object.assign({composite: 'add'},scaleTiming));
let rotate = add.animate(rotateKeyframes, Object.assign({composite:'add'}, rotateTiming));

if(rotate.effect && rotate.effect.composite === 'add'){
    document.documentElement.classList.add('supported');
}