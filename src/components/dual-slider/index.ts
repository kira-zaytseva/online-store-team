import { DualSliderInterface } from './types';

export const createDualSlider = ({ title, sliderMin, sliderMax }: DualSliderInterface): HTMLDivElement => {
    const dualSlider = document.createElement('div');
    dualSlider.className = 'dual-slider';
    const sliderTitle = document.createElement('h2');
    sliderTitle.innerText = title;
    sliderTitle.className = 'slider-title';
    const sliderInputOne = document.createElement('input');
    sliderInputOne.className = 'slider-input1';
    sliderInputOne.type = 'range';
    sliderInputOne.value = String(sliderMin);
    sliderInputOne.setAttribute('min', String(sliderMin));
    sliderInputOne.setAttribute('max', String(sliderMax));
    const sliderInputTwo = document.createElement('input');
    sliderInputTwo.className = 'slider-input2';
    sliderInputTwo.type = 'range';
    sliderInputTwo.value = String(sliderMax);
    sliderInputTwo.setAttribute('min', String(sliderMin));
    sliderInputTwo.setAttribute('max', String(sliderMax));
    const rangePrice = document.createElement('div');
    const minPrice = document.createElement('output');
    minPrice.setAttribute('for', 'slider-input1');
    //minPrice.innerText = sliderInputOne.value;
    const maxPrice = document.createElement('output');
    //maxPrice.innerText = sliderInputTwo.value;

    dualSlider.appendChild(sliderTitle);
    dualSlider.appendChild(sliderInputOne);
    dualSlider.appendChild(sliderInputTwo);
    dualSlider.appendChild(rangePrice);
    rangePrice.appendChild(minPrice);
    rangePrice.appendChild(maxPrice);
    return dualSlider;
};
