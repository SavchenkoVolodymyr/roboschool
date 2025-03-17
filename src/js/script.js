const body = document.querySelector('body');

// for slider

function coachesSlider() {
	let offset = 0;
	let scrollOfset = 0;
	const sliderLine = document.querySelector('.slider__line');
	const gap = parseInt(getComputedStyle(sliderLine).columnGap);
	const elemWidht = document.querySelector('.slider__element').clientWidth;
	const numberOfElem = document.querySelectorAll('.slider__element').length;
	const btnPrev = document.querySelector('.slider_nav__prew');
	const btnNext = document.querySelector('.slider_nav__next');
	const scrollBarWidht = document.querySelector('.scroll_bar').clientWidth;
	const scroll = document.querySelector('.scroll_bar').firstElementChild;
	console.log(scrollBarWidht);

	btnNext.addEventListener('click', function () {
		offset = offset + (elemWidht + gap);
		if (offset > (numberOfElem - 3) * (elemWidht + gap)) {
			offset = 0;
		}
		sliderLine.style.left = -offset + 'px';

		scrollOfset = scrollOfset + (scrollBarWidht - scroll.clientWidth) / 2;
		if (scrollOfset > scrollBarWidht - scroll.clientWidth) {
			scrollOfset = 0;
		}
		scroll.style.left = scrollOfset + 'px';
		// scrollSlider ()
	});
	btnPrev.addEventListener('click', function () {
		offset = offset - (elemWidht + gap);
		if (offset < 0) {
			offset = (numberOfElem - 3) * (elemWidht + gap);
		}
		sliderLine.style.left = -offset + 'px';

		scrollOfset = scrollOfset - (scrollBarWidht - scroll.clientWidth) / 2;
		if (scrollOfset < 0) {
			scrollOfset = scrollBarWidht - scroll.clientWidth;
		}
		scroll.style.left = scrollOfset + 'px';
		// scrollSlider ()
	});
}
coachesSlider();

function cardTabs() {
	const tabsBox = document.querySelectorAll('.tabs');
	tabsBox.forEach(function (tabs) {
		const tabsNavAll = tabs.querySelectorAll('[data-tab]');
		const tabsContentAll = tabs.querySelectorAll('[data-tab-content]');
		tabsNavAll.forEach(function (item) {
			item.addEventListener('click', function (event) {
				if (item.classList.contains('active')) return;
				tabsNavAll.forEach(i => {
					i.classList.remove('active');
				});
				item.classList.add('active');

				tabsContentAll.forEach(k => {
					k.classList.remove('active');
				});
				const dataTab = event.target.dataset.tab;
				document.querySelector('#' + dataTab).classList.add('active');
			});
		});
	});
}
cardTabs();
