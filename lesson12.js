$(function(){
//    $('.highlight:nth-child(2)').html('Hello');
//    $('.highlight:nth-child(2)').css('color','blue')
//    $('.highlight:eq(2)').css('color','blue')
    
//    for(i=0;i<5;i++){
//        $('li:eq('+i+')').html(i+1)
//    }
//    for(x=0;x<$('li').length;x++) {
//        $('li:eq('+x+')').html(x+1);
//    }
    
    $('li:gt(3)').css('color','blue')
    $('li:lt(3)').css('color','green')
    $('li:eq(3)').css('color','red')
})