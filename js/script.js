const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

// Превращаем html-коллекию в массив
sliderItems.forEach((slide, index) => {
    // Скрываем все слайды
    if (index !== 0) slide.classList.add('hidden');

    // Добавляем атрибут data-index с номером индекса
    slide.dataset.index = index;

    // Добавим дата-атрибут active
    sliderItems[0].setAttribute('data-active', '')
    // Клик по слайдам / так делать нельзя - нужно делегировать на другой элемент - обертку
    slide.addEventListener('click', function() {
    
        // Скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
    
        // Индекс следующего слайда
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
        // if (index + 1 === sliderItems.length) {
        //     nextSlideIndex = 0;
        // } else {
        //     nextSlideIndex = index + 1;
        // }
    
        // Находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        // Отображаем следующий слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '')
    })
});


btnNext.onclick = function() {
    // Скрываем текущий
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем следующий
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}

btnPrev.onclick = function() {
    // Скрываем текущий
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Показываем следующий
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}