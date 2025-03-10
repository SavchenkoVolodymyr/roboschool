const body = document.querySelector('body');

// for slider

function coachesSlider() {
	let offset = 0;
	const sliderLine = document.querySelector('.slider__line');
	let gap = parseInt(getComputedStyle(sliderLine).columnGap);
	const elemWidht = document.querySelector('.slider__element').clientWidth;
	const numberOfElem = document.querySelectorAll('.slider__element').length;
	const btnPrev = document.querySelector('.slider_nav__prew');
	const btnNext = document.querySelector('.slider_nav__next');
	btnNext.addEventListener('click', function () {
		offset = offset + (elemWidht + gap);
		if (offset > (numberOfElem - 3) * (elemWidht + gap)) {
			offset = 0;
		}
		sliderLine.style.left = -offset + 'px';
	});
	btnPrev.addEventListener('click', function () {
		offset = offset - (elemWidht + gap);
		if (offset < 0) {
			offset = (numberOfElem - 3) * (elemWidht + gap);
		}
		sliderLine.style.left = -offset + 'px';
	});
}
coachesSlider();
