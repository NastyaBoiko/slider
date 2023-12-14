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
        $(this).addClass('hidden');
        // Показываем следующий
        if ($(this).next().length) {

            $(this).next().removeClass('hidden');
            // $(this).next().fadeIn();
        } else {
            $('.slider__item:first-child').next().removeClass('hidden');
            // $('.slider__item:first-child').fadeIn();
        }
    })

    // $('.slider__item:not(:first-child)').addClass('hidden');

    $('.slider').on('click', '.slider__item', function(e) {
        // // e.preventDefault();
        // $(this).addClass('sss')
        // $(this).attr('data-s', '2');
        // // console.log($(this).data('s'));
        // // $(this).data('s')
        // console.log($(this));
        // console.log(e);



        // return false;
    })

    // $('.slider__item').each(function(el, index){
    //     console.log($(this))
    //     console.log(el, index)
    // })

})

// $(document).ready(()=>{

// })