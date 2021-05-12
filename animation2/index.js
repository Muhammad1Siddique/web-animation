function myMove(){
    var el = document.getElementById("animate");
    var loc = 0;
    var ids = setInterval(frame, 6);
    function frame(){
        if(loc == 350){
            clearInterval(ids);
        }else{
            loc++;
            el.style.top = loc + 'px';
            el.style.left = loc + 'px';
        }
    }
}
myMove();