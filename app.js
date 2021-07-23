const $menu = document.querySelector('.menu');
const $playVideo = document.getElementById('play-tutorial');
const $closeVideo = document.getElementById('close-tutorial');


$menu.addEventListener('click', toggleMenu);
$playVideo.addEventListener('click', toggleTutorial);
$closeVideo.addEventListener('click', toggleTutorial);

function toggleMenu(e) {
    e.preventDefault();
    const $nav = document.querySelector('.nav__links');

    $menu.classList.toggle('active');
    $nav.classList.toggle('active');
}

function toggleTutorial(e) {
    e.preventDefault();
    const $tutorial = document.querySelector('.tutorial');

    $tutorial.classList.toggle('active');

    if(!$tutorial.classList.contains('active')) {
        const $video = document.getElementById('video-tutorial');
        $video.pause();
        $video.currentTime = 0;
    }
}