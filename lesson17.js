$(function() {
    $('.btn').click(function() {
        var eleKids = $('p').children();
        console.log(elekids)
    })
    
    $('span').click(function(){
        var eleDad = $(this).parent().attr('title');
        console.log(eleDad);
    })
})