function check() {
    var el = document.getElementById('box1', 'box2', 'box3', 'box4'),
    span = document.getElementById('box1text', 'box2text', 'box3text', 'box4text');
    //var boxes = ['box1', 'box2', 'box3', 'box4']
    if (el.checked == true) {
        span.style.textDecoration = "line-through";
    } else {
        span.style.textDecoration = "none";
    }
}
