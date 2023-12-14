$(function() {

    $('.slider').find('img').each(function(index) {
        // Выдаем всем индексы
        $(this).attr('data-index', index);

        // Прячем все и добавляем класс data-active первому
        if (index) {
            $(this).addClass('hidden');
        } else {
            $(this).attr('data-active', '');
        }
    
    })

    // Клик по слайдам
    $('.slider').on('click', '.slider__item', function() {
        // Скрываем текущий слайд
        console.log($(this));
        $(this)
            .addClass('hidden')
            .removeAttr('data-active');

            const next = $(this).next()
        // Показываем следующий
        if (next.length) {
            next
                .removeClass('hidden')
                .attr('data-active', '');
        } else {
            $('.slider__item:first-child').removeClass('hidden');
        }
    })

    // Клик вперед
    $('.next').on('click', function() {
        const current = $('.slider').find('[data-active]');

        // Следующий слайд
        const next = current.next().length ? current.next() : $('.slider__item:first-child');

        // Скрываем текущий
        current
            .addClass('hidden')
            .removeAttr('data-active');
        
        // Показываем следующий
        next
            .removeClass('hidden')
            .attr('data-active', '');

    })
    // Клик назад
    $('.prev').on('click', function() {
        const current = $('.slider').find('[data-active]');

        // Следующий слайд
        const prev = current.prev().length ? current.prev() : $('.slider__item:last-child');

        // Скрываем текущий
        current
            .addClass('hidden')
            .removeAttr('data-active');
        
        // Показываем предыдущий
        prev
            .removeClass('hidden')
            .attr('data-active', '');

    })

})
