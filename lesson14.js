$(function() {
    $('li').click(function() {
        console.log($(this));
        console.log(this)
    })
})

$('p').bind('click',function() {
    console.log('Bind clicked');
})

$('a').on('click',function(e) {
    e.preventDefault();
})

$('img').on('click', function(){
    console.log('on click hit')
})