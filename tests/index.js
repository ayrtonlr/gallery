

var activeVintalight = function activeVintalight(container) {
	container.addEventListener('click', function (e) {
		var element = e.target
		if (element.tagName == 'DIV') {
			var src = element.querySelector('img').getAttribute('src'),
				descrip = element.querySelector('img').getAttribute('alt'),
				vintalightOverlay = document.createElement('div')
			vintalightOverlay.classList.add('vintalight-overlay')
			vintalightOverlay.innerHTML =
				'\n                <figure class="vintalight__container active">\n                    <div class="vintalight__container__photo">\n                        <img src="' +
				src +
				'" alt="' +
				descrip +
				'" class="vintalight__container__photo__img"/>\n                    </div>\n                    <figcaption class="vintalight__container__caption">\n                        <h3 class="vintalight__container__caption__text">' +
				descrip +
				'</h3>\n                    </figcaption>\n                    <button class="vintalight__button" id="button-close">\u2715</button>\n                </figure>\n            '
			document.body.appendChild(vintalightOverlay)
			setTimeout(function () {
				vintalightOverlay.classList.add('active')
			}, 1)
			document.body.style.overflow = 'hidden'
			document.getElementById('button-close').addEventListener('click', function () {
				vintalightOverlay.classList.remove('active')
				setTimeout(function () {
					document.body.removeChild(vintalightOverlay)
				}, 500)
				document.body.style.overflow = 'auto'
			})
			window.addEventListener('keyup', function (e) {
				if (e.key === 'Escape') document.getElementById('button-close').click()
			})
		}
	})
}
window.addEventListener('load', activeVintalight(document.getElementById('vintalight')))



var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};