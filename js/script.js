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
        var result = eval(display.val());
        result = (result.toFixed(5));
        result = result.toString();
        result = delNull(result);
        display.val(result);
    })

    function delNull(num) {
        var i = num.length - 1;
        while (num[i] == '0') {
            i--;
        }
        if (num[i] == '.') {
            return num.slice(0, i)
        }
        return num.slice(0, i + 1);
    }

    


})