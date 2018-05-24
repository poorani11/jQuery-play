$(function() {
    $('.highlight').css('color','red');
    $('.highlight').html('first');
    $('.highlight').html('Default');
    $('.highlight:first').html('First');
    $('li:first-child').html('The one');
    $('.highlight:even').html('EVEN');
    $('.hightlight:odd').html('ODD');
})