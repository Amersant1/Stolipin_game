$(document).ready(function() {
    // Инициализация ползунков
    $('#slider-left').slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            console.log('Левые:', ui.value);
            // Ваш код здесь для использования нового значения
        }
    });

    $('#slider-liberals').slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            console.log('Либералы:', ui.value);
        }
    });

    $('#slider-tsar').slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            console.log('Царь:', ui.value);
        }
    });

    $('#slider-right').slider({
        min: 0,
        max: 100,
        value: 50,
        slide: function(event, ui) {
            console.log('Правые:', ui.value);
        }
    });
});