$(function(){
    $('.btn').css({
        'border':'1px solid black',
        'padding':'10px',
        'width':'150px'
    })
    $('.btn').click(function(){
        if($(this).hasClass('btn-1')){
            $('h1').load('hello.txt')
        }
        if($(this).hasClass('btn-2')){
            $('h1').load('hello.html .one')
        }
        
        if($(this).hasClass('btn-3')){
            var url = 'hello.html';
            
            $('#output1').load(url, function(responseText,status,xhr){
                console.log(responseText);
                console.log(status);
                console.log(xhr)
            })
        }
    })
})