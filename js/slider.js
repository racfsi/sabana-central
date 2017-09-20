//almacenar slider en una variable
var slider = $("#slider")
//almacenar botones
var siguiente =$("#btNext");
var anterior = $("#btPrev");
var interval;
//mover ultima imagen al primer lugar
$('#slider .slidSec:last').insertBefore('#slider .slidSec:first');

//mostrar la primera imagen con un margen de -100%
slider.css('margin-left', '-'+100+'%');

function moverD() {
	slider.animate({
		marginLeft:'-'+200+'%'
	} ,700, function(){
		$('#slider .slidSec:first').insertAfter('#slider .slidSec:last');
		slider.css('margin-left', '-'+100+'%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slidSec:last').insertBefore('#slider .slidSec:first');
		slider.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 6000);
}
siguiente.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});
autoplay();