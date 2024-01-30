import { createElement } from './utils.js';

const getPreviewsTemplate = (data, picturesAddress) => data.map(({src, description}, index) => /*html*/`
  <li class="slider__preview-item">
    <button class="slider__preview-btn" data-id="${index}" data-link="" data-desc="">
      <img class="slider__preview-img" width="100px" height="100px" src="${picturesAddress + src}" alt="${description}">
    </button>
  </li>
`).join('');

const getTemplate = (data, picturesAddress) => /*html*/`
  <section class="slider">
    <figure class="slider__main-illustration">
      <img class="slider__main-img" src="" alt="">
      <figcaption class="slider__desc"></figcaption>
      <button class="slider__arrow slider__arrow_left">
        <span class="visually-hidden">Предыдущее изображение</span>
      </button>
      <button class="slider__arrow slider__arrow_right">
        <span class="visually-hidden">Следующее изображение</span>
      </button>
    </figure>
    <ul class="slider__previews">
      ${getPreviewsTemplate(data, picturesAddress)}
    </ul>
  </section>
`;

const renderMainPicture = (container, pictureInfo, picturesAddress) => {
  const mainPicture = container.querySelector('.slider__main-img');
  const mainPictureDescription = container.querySelector('.slider__desc');

  mainPicture.src = picturesAddress + pictureInfo.src;
  mainPictureDescription.textContent = pictureInfo.description;
};

const renderSlider = (container, picturesData, picturesAddress) => {
  const slider = createElement(getTemplate(picturesData, picturesAddress));
  container.append(slider);
  slider.querySelector('.slider__preview-item').classList.add('slider__preview-item_active');
  renderMainPicture(container, picturesData[0], picturesAddress);
};

export {renderSlider, renderMainPicture};
