$(document).ready(function(){
    $('.go_to').click( function click(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

});

$(document).ready(function() { //отключения scroll
    $('#name').on('click', function () {
        $('body').css("overflow", "hidden")

    })
});

$(document).ready(function() { //Включения scroll
    $('#name-exit, #clickMenu').on('click', function () {
        $('body').css("overflow", "visible")

    })
});
