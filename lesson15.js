$(function() {
//    $('p').click(function() {
//        $('li').filter('.highlight').css('color','red')
//    });
    
//    $('li').click(function() {
//        $(this).filter('.highlight').css('color','red')
//    })
    
//    $('p').click(function(){
//        console.log($('li'));
//        $('li').first().css('color','blue')
//    })
    
    $('p').click(function() {
        console.log($('li'));
        $('li').has('span').css('color','green')
    })
})