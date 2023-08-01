const mainImage = document.querySelector('.slider__main-img');
const desc = document.querySelector('.slider__desc');

const prewiews = document.querySelectorAll('.slider__prewiew-btn');
let currentPrewiew = document.querySelector('.slider__prewiew-btn_active');
const lastIndex = prewiews.length - 1;
const lastPrewiew = prewiews[lastIndex];

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

// cкрипт для переключения картинок через превью
for (const prewiew of prewiews) {
	prewiew.onclick = function (evt) {
		evt.preventDefault();

		mainImage.src = prewiew.getAttribute('data-link');

		currentPrewiew.classList.remove('slider__prewiew-btn_active');
		prewiew.classList.add('slider__prewiew-btn_active');

		desc.textContent = prewiew.getAttribute('data-desc');

		currentPrewiew = prewiew;
		return(currentPrewiew);
	};
}

// скрипты для переключения картинок стрелочками
leftArrow.onclick = function () {
	for (let i = 0; i < prewiews.length; i++) {
		if (prewiews[i] === currentPrewiew) {
			if (i !== 0) {
				mainImage.src = prewiews[i - 1].getAttribute('data-link');

				currentPrewiew.classList.remove('slider__prewiew-btn_active');
				prewiews[i - 1].classList.add('slider__prewiew-btn_active');

				desc.textContent = prewiews[i - 1].getAttribute('data-desc');

				currentPrewiew = prewiews[i - 1];
				return(currentPrewiew);
			} else {
				mainImage.src = lastPrewiew.getAttribute('data-link');

				currentPrewiew.classList.remove('slider__prewiew-btn_active');
				lastPrewiew.classList.add('slider__prewiew-btn_active');

				desc.textContent = lastPrewiew.getAttribute('data-desc');

				currentPrewiew = lastPrewiew;
				return(currentPrewiew);
			}
		}
	}
};
rightArrow.onclick = function () {
	for (let i = 0; i < prewiews.length; i++) {
		if (prewiews[i] === currentPrewiew) {
			if (i < lastIndex) {
				mainImage.src = prewiews[i + 1].getAttribute('data-link');

				currentPrewiew.classList.remove('slider__prewiew-btn_active');
				prewiews[i + 1].classList.add('slider__prewiew-btn_active');

				desc.textContent = prewiews[i + 1].getAttribute('data-desc');

				currentPrewiew = prewiews[i + 1];
				return(currentPrewiew);
			} else {
				mainImage.src = prewiews[0].getAttribute('data-link');

				currentPrewiew.classList.remove('slider__prewiew-btn_active');
				prewiews[0].classList.add('slider__prewiew-btn_active');

				desc.textContent = prewiews[0].getAttribute('data-desc');

				currentPrewiew = prewiews[0];
				return(currentPrewiew);
			}
		}
	}
};
