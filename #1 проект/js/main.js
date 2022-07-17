
$(document).ready(function () {

	const header = $('#header');
	const introH = $('#intro').innerHeight();

	let scrollOffset = $(window).scrollTop();

	// Фиксируем шапку

	checkScroll(scrollOffset);

	$(window).on('scroll', function () {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= introH) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}
	}

	// Плавный скролл 
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault();

		let blockId = $(this).data('scroll');
		let blockOffset = $(blockId).offset().top;

		$('html, body').animate({
			scrollTop: blockOffset
		}, 900);

	})

	// Nav раскрытие
	$('#nav_toggle').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');

	})

	// Аккордеон - открытие

	$('[data-collapse]').on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		blockId = $this.data('collapse');

		$(blockId).slideToggle();
		$this.toggleClass('active');

	})

	// Слайдер
	$('[data-slider]').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
	});
});



