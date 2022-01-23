let switchColorBtn = document.querySelector('.traffic-lights__switcher');
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

switchColorBtn.onclick = function() {
    if (red.classList.contains('traffic-lights--red')) {
        red.classList.remove('traffic-lights--red');
        yellow.classList.add('traffic-lights--yellow');
    } else if (yellow.classList.contains('traffic-lights--yellow')) {
        yellow.classList.remove('traffic-lights--yellow');
        green.classList.add('traffic-lights--green');
    } else if (green.classList.contains('traffic-lights--green')) {
        green.classList.remove('traffic-lights--green');
        red.classList.add('traffic-lights--red');
    }
}