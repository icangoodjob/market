$(document).ready(function() {
	$('.imagesnew__dotted').slick({
		arrows:true,
		vertical: true,
		dots:false,
		adaptiveHeight:false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 600,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:2000,
		draggable:true,
		asNavFor: '.vertical__big-slider',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1153,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				draggable:true,
				vertical: false,
			}
		}
		]
	});
});
$(document).ready(function() {
	$('.other-variants__slider').slick({
		arrows:false,
		dots:true,
		dotsClass: 'other-variants__dots',
		adaptiveHeight:false,
		slidesToShow: 2.98,
		slidesToScroll: 3,
		speed: 600,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:2000,
		draggable:false,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1.98,
				slidesToScroll: 2.01,
				draggable:true,
			}
		},
		{
			breakpoint: 350,
			settings: {
				slidesToShow: 0.99,
				slidesToScroll: 1,
				draggable:true,
			}
		},
		]
	});
});

$(document).ready(function() {
	$('.vertical__big-slider').slick({
		arrows: false,
		fade: true,
		adaptiveHeight:true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 800,
		easing:'ease',
		infinite:true,
		autoplay:false,
		autoplaySpeed:2000,
		draggable:false,
		asNavFor: '.imagesnew__dotted',
		responsive: [{
			breakpoint: 816,
			settings: {
				dots: true,
			}
		}]
	});
});

$(document).ready(function(){
	$('.description__btn').click(function(event){

		if($('.detailed__description_hidden').hasClass('one')){
			$('.description__btn').not($(this)).removeClass('active');
			$('.detailed-hidden__wrapper').not($(this).next()).slideDown(500);
		}

		$(this).toggleClass('active').next().slideToggle(500);
	});
});


let burger = document.querySelector('.header__burger');
let aside = document.querySelector('.aside');
let close =document.querySelector('.aside__close')
burger.addEventListener('click', function(){
	aside.classList.add('active');
	close.addEventListener('click', function(){
		aside.classList.remove('active');
	});
});