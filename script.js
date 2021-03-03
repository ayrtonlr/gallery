$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});

function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.15);
  title1.to(".button", 0.5, {visibility: 'visible' ,opacity: 1})
}


let sliderIndex = 1;
let timeout;
const layers = [...document.querySelectorAll('.layer')];
const covers = [...document.querySelectorAll('.photo-frame')];

function changeCoverAnimState(state = 0) {
  const st = state === 1 ? 'running' : 'paused';
  covers.forEach(cover => {
    // cover.style['animation-play-state'] = st;
    cover.querySelector('.cover').style.width = `${state * 100}%`;
  });
}

function switchLayer(step = 1) {
  const nextSlide = (sliderIndex + step) % 3 === 0 ? 3 : (sliderIndex + step) % 3;
  
  changeCoverAnimState(1);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    changeCoverAnimState(0)
  }, 500);
  
  for(let i of layers) {
    i.classList.remove('layer-displayed');
    i.classList.remove('layer-displayed-exit');
    if(i.dataset.scene == nextSlide) {
      i.classList.add('layer-displayed');
    }
    if(i.dataset.scene == sliderIndex) {
      i.classList.add('layer-displayed-exit');
    }
  }
  sliderIndex = nextSlide;
}

function change(index) {
  var imageLookup = ["img/viagens/1.jpeg", "img/viagens/3.jpeg", "img/viagens/5.jpeg", "img/viagens/7.jpeg"];
  var imageLookup2 = ["img/viagens/2.jpeg", "img/viagens/4.jpeg", "img/viagens/6.jpeg", "img/viagens/8.jpeg"];
  document.getElementById("pic").src = imageLookup[index];
  document.getElementById("pic2").src = imageLookup2[index];
}


