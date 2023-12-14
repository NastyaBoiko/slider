$(function() {

    $('.slider').find('img').each(function(index) {
        // Выдаем всем индексы - не нужны
        // $(this).attr('data-index', index);

        // Прячем все и добавляем класс data-active первому
        if (index) {
            $(this).addClass('hidden');
        } else {
            $(this).attr('data-active', '');
        }
    
    })

    // Клик по слайдам
    $('.full__slider').on('click', '.slider__item, .next, .prev', function() {
        // Текущий слайд
        const current = $('.full__slider').find('[data-active]');
        let change;

        //  Если нажата кнопка prev - следующий слайд будет предыдущим, если нажали на next или slider__item - следующим по порядку
        if ($(this).hasClass('prev')) {
            change = current.prev().length ? current.prev() : $('.slider__item:last-child');
        } else {
            change = current.next().length ? current.next() : $('.slider__item:first-child');
        }

        // Скрываем текущий
        current
            .addClass('hidden')
            .removeAttr('data-active');
        
        // Показываем следующий
        change
            .removeClass('hidden')
            .attr('data-active', '');
    })
})
