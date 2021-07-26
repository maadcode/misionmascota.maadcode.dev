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
        const iframes = document.getElementsByTagName("iframe");
        if (iframes != null) {
            for (let i = 0; i < iframes.length; i++) {
                iframes[i].src = iframes[i].src; //causes a reload so it stops playing, music, video, etc.
            }
        }
    }
    
}