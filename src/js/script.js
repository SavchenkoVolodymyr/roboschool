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

function scrollBarNav() {
	const scrollBar = document.querySelector('.scroll_bar');
	const scroll = document.querySelector('.scroll_bar').firstElementChild;

	scroll.onmousedown = function (e) {
		e.preventDefault();
		let shiftX = e.clientX - scroll.getBoundingClientRect().left;

		document.addEventListener('mousemove', mouseMowe);
		document.addEventListener('mouseup', mouseUp);

		function mouseMowe(e) {
			let newLeft = e.clientX - shiftX - scrollBar.getBoundingClientRect().left;
			if (newLeft < 0) {
				newLeft = 0;
			}

			let rightEdge = scrollBar.offsetWidth - scroll.offsetWidth;
			if (newLeft > rightEdge) {
				newLeft = rightEdge;
			}
			scroll.style.left = newLeft + 'px';
		}
		function mouseUp() {
			document.removeEventListener('mouseup', mouseUp);
			document.removeEventListener('mousemove', mouseMowe);
		}
		scroll.ondragstart = function () {
			return false;
		};
	};
}
scrollBarNav();

// for tabs

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

// for popup

function showPopup() {
	const popupButtonAll = document.querySelectorAll('[data-popup-button]');
	const popupAll = document.querySelectorAll('[data-popup]');

	popupButtonAll.forEach(function (element) {
		element.addEventListener('click', function (e) {
			let popupButtonData = e.target.dataset.popupButton;
			document.querySelector('#' + popupButtonData).classList.add('active');
		});
	});

	popupAll.forEach(function (element) {
		element.querySelector('[data-popup-close]').addEventListener('click', function () {
			element.classList.remove('active');
		});

		element.addEventListener('click', function () {
			element.classList.remove('active');
		});

		element.querySelector('[data-popup-window]').addEventListener('click', function (event) {
			event.stopPropagation();
		});
	});
}
showPopup();
