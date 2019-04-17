$(document).ready(function() {
    $('#secondiv').click(function() {
        $('#indexdiv').css('width','150px');
        $('#indexframe').css('left','150px');
        $('#secondiv').css('visibility', 'hidden');
    	$('#secondivx').css('visibility', 'visible');
        $('#add').css('visibility', 'visible');
        $('#bookshelf').css('visibility', 'visible');
    });
});

$(document).ready(function() {
    $('#secondivx').click(function() {
        $('#indexdiv').css('width','100px');
        $('#indexframe').css('left','100px');
        $('#secondivx').css('visibility', 'hidden');
    	$('#secondiv').css('visibility', 'visible');
        $('#add').css('visibility', 'hidden');
        $('#bookshelf').css('visibility', 'hidden');
    });
});

$(document).ready(function(){
	$('#li1').click(function(){
		$('#frametext').attr('src','page1.html');
		$('#titlespan').text('Harry Potter');
	});
});

$(document).ready(function(){
	$('#li2').click(function(){
		$('#frametext').attr('src','page2.html');
		$('#titlespan').text('Guerra dos tronos');
	});
});

$(document).ready(function(){
	$('#li3').click(function(){
		$('#frametext').attr('src','page3.html');
		$('#titlespan').text('O Hobbit');
	});
});

$(document).ready(function(){
	$('#add').click(function(){
		alert("Função não disponível no protótipo");
	});
});