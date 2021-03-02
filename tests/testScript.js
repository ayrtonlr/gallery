//  Title one

const idealFontSize = 64
const idealScreenSize = 1920
const maxFontSize = 128
const minFontSize = 48
fontSize = (screen.width / idealScreenSize) * idealFontSize;
fontSize = Math.max(minFontSize,Math.min(maxFontSize, fontSize));
const options = {
  fontSize: fontSize,
  strokeWidth: 2,
  letterSpacing: 4,
  textAlign: "center",
}
const charTime = 2000 / 10

const element1 = "Nosso amor"
const element2 = "em"
const element3 = "2 anos"
const element4 = "Vanessa"
const element5 = "&"
const element6 = "Ayrton"

const timer1 = element1.length * charTime
const timer2 = element2.length * charTime
const timer3 = element3.length * charTime
const timer4 = element4.length * charTime
const timer5 = element5.length * charTime
const timer6 = element6.length * charTime

new Vara("#element1", "SatisfySL.json", [{
	text: element1,
  y: 50,
}], {...options, duration: timer1});

setTimeout(function(){
  new Vara("#element2", "SatisfySL.json", [{
    text: element2,
    y: 50,
  }], {...options, duration: timer2});
}, timer1 + 100);

setTimeout(function(){
  new Vara("#element3", "SatisfySL.json", [{
    text: element3,
    y: 50,
  }], {...options, duration: timer3});
}, timer1 + timer2 + 200);

setTimeout(function(){
  new Vara("#element4", "SatisfySL.json", [{
    text: element4,
    y: 50,
  }], {...options, duration: timer4});
}, timer1 + timer2 + timer3 + 300);

setTimeout(function(){
  new Vara("#element5", "SatisfySL.json", [{
    text: element5,
    y: 50,
  }], {...options, duration: timer5});
}, timer1 + timer2 + timer3 + timer4 + 400);

setTimeout(function(){
  new Vara("#element6", "SatisfySL.json", [{
    text: element6,
    y: 50,
  }], {...options, duration: timer6});
}, timer1 + timer2 + timer3 + timer4 + timer5 + 500);


