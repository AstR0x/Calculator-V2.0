$(document).ready(function() {
    var display = $('.display__input');
    var key = $('.button-block button');
    var button = $('.button-block__button')
    var clear = $('.button-block__clear');
    var equal = $('.button-block__equal');
    var operations = $('.operations-block__button');

    key.each(function() {
        var current = $(this).attr('value');
        $(this).text(current);
    })

    button.click(function() {
        display.val(display.val() + $(this).val());
    })

    clear.click(function() {
        display.val('');
    })

    equal.click(function() {
        display.val(eval(display.val()));
    })






















})