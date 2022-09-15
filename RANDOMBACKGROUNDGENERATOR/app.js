let btn = document.querySelector('button');
let header = document.querySelector('h1');
let body = document.querySelector('body');

btn.addEventListener('click', function () {
    let x = Math.floor((Math.random() * 255));
    let y = Math.floor((Math.random() * 255));
    let z = Math.floor((Math.random() * 255));
    header.innerHTML = `rgb(${x},${y},${z})`;
    body.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
})