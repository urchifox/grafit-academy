import {renderMainPicture, renderSlider} from './slider-previews-rendering.js';

const changePicture = (sliderInfo, targetIndex) => {
  const currentPreview = sliderInfo.previewContainer.querySelector('.slider__preview-item_active');
  currentPreview.classList.remove('slider__preview-item_active');

  const pictureInfo = sliderInfo.picturesData[targetIndex];
  renderMainPicture(sliderInfo.container, pictureInfo, sliderInfo.picturesAddress);

  sliderInfo.previewContainer.children[targetIndex].classList.add('slider__preview-item_active');
  sliderInfo.currentPreviewIndex = targetIndex;
};

const onSliderBtnClick = (evt, sliderInfo) => {
  const button = evt.target.closest('.slider__arrow');

  if(!button) {
    return;
  }

  let targetIndex = (button.classList.contains('slider__arrow_right')) ?
    sliderInfo.currentPreviewIndex + 1 :
    sliderInfo.currentPreviewIndex - 1;

  if (targetIndex < 0) {
    targetIndex = sliderInfo.picturesData.length - 1;
  }

  if (targetIndex > sliderInfo.picturesData.length - 1) {
    targetIndex = 0;
  }

  changePicture(sliderInfo, targetIndex);
};

function onPreviewClick(evt, sliderInfo) {
  const button = evt.target.closest('.slider__preview-btn');

  if (!button) {
    return;
  }
  const targetIndex = Number(button.dataset.id);
  changePicture(sliderInfo, targetIndex);
}

const init = (root, picturesData, picturesAddress) => {
  const sliderContainer = root.querySelector('.slider-container');

  renderSlider(sliderContainer, picturesData, picturesAddress);

  const sliderInfo = {
    root: root,
    container: sliderContainer,
    previewContainer: sliderContainer.querySelector('.slider__previews'),
    previousBtn: sliderContainer.querySelector('.slider__arrow_left'),
    nextBtn: sliderContainer.querySelector('.slider__arrow_right'),
    picturesData: picturesData,
    picturesAddress: picturesAddress,
    currentPreviewIndex: 0,
  };

  const onSliderClick = (evt) => {

    if (evt.target.closest('.slider__previews')) {
      onPreviewClick(evt, sliderInfo);
    } else {
      onSliderBtnClick(evt, sliderInfo);
    }
  };

  sliderContainer.addEventListener('click', onSliderClick);
};

export {init};
