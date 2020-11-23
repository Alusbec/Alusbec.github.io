$(function () {

    $('.pc1').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc1').html('Si j\'étais un animal, je serais... un Ours'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc1').mouseout(function () {
        $('.pc1').html('Si j\'étais un animal, je serais...')
    });

    $('.pc2').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc2').html('Si j\'étais une plante, je serais... un Palmier'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc2').mouseout(function () {
        $('.pc2').html('Si j\'étais une plante, je serais...')
    });

    $('.pc3').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc3').html('Si j\'étais un événement historique, je serais... Le 4 novenbre 2008 (élection de Barack Obama)'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc3').mouseout(function () {
        $('.pc3').html('Si j\'étais un événement historique, je serais...')
    });

    $('.pc4').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc4').html('Si j\'étais un super pouvoir, je serais...Un homme élastique'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc4').mouseout(function () {
        $('.pc4').html('Si j\'étais un super pouvoir, je serais...')
    });

    $('.pc5').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc5').html('Si j\'étais une chanson? je serais...Give it up de KC & the Sunshine Band'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc5').mouseout(function () {
        $('.pc5').html('Si j\'étais une chanson? je serais...')
    });

    $('.pc6').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc6').html('Si j\'étais un art, je serais... La jonglerie'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc6').mouseout(function () {
        $('.pc6').html('Si j\'étais un art, je serais...')
    });

    $('.pc7').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc7').html('Si j\'étais une qualité, je serais... La persévérance'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc7').mouseout(function () {
        $('.pc7').html('Si j\'étais une qualité, je serais...')
    });

    $('.pc8').mouseover(function () { // cible la div avec id green lui indique (mouseover) 
        $('.pc8').html('Si j\'étais une mauvaise habitude, je serais... Têtu'); // qu'au passage de la sourie le texte change de colo
    });

    $('.pc8').mouseout(function () {
        $('.pc8').html('Si j\'étais une mauvaise habitude, je serais...')
    });


}); 

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

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
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};