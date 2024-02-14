function toggleText() {
    let text = document.querySelector('.text');
    let convert =document.querySelector('.convert');
    let body = document.querySelector('html');

    convert.style.display = 'none';
    text.style.display = 'block';
    body.style.backgroundImage = 'url(cupidon.jpg)';
}


function toggleVideo() {
    let text = document.querySelector('.text');
    let video = document.querySelector(".myVideo");
    if (video.paused) {
        text.style.display = 'none';
        video.style.display = "block";
        video.play();
    } else {
        video.style.display = "none";
        text.style.display = 'block';
        video.pause();
    }
}