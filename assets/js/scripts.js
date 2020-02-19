var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
};

var videoSrc = "https://www.youtube.com/embed/KSzw4HBy-RI";

// when the modal is opened autoplay it
$('#video-modal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
});

// stop playing the youtube video when I close the modal
$('#video-modal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', videoSrc);
});

var typewriterContainer = document.getElementById('typewriterDiv');

var typewriter = new Typewriter(typewriterContainer, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Remote pair programming')
  .pauseFor(2500)
  .deleteChars(11)
  .typeString('debugging')
  .pauseFor(2500)
  .deleteChars(14)
  .typeString('access to your machine')
  .pauseFor(2500)
  .start();
