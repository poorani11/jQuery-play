$(function(){
    $('input').first().before('Image Text:');
    $('input').after('<br>');
    $('input[type="color"]').first().before('Background Color:');
    $('input[type="color"]').last().before('Text Color:');
    $('input[type="submit"]').click(function(){
        event.preventDefault();
        var clrValues = $('input[type="color"]');
        var textHolder = cleanSpace($('input[type="text"]').val());
        var colorBlack = cleanHash(clrValues.first().val());
        var colorFront = cleanHash(clrValues.last().val());
        
        var imagePath = 'http://via.placeholder.com/350x150/'+colorBlack+'/'+colorFront+'?text='+textHolder;
        $('img').attr('src', imagePath);
        $('input').last().val(imagePath);
    })
    
    function cleanHash(arg){
        return arg.replace('#','');
    }
    
    function cleanSpace(arg){
        return arg.replace(' ','+');
    }
})