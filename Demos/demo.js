window.addEvent('domready',function(){

	$('to_p').addEvent('click',function(){
		$('text').convert('p',['name','id','class','text']);
	});

	$('to_h2').addEvent('click',function(){
		$('text').convert('h2',['name','id','class','text']);
	});
	
	$('to_input').addEvent('click',function(){
		$('input').convert('input',['name','id','class','value']);
	});

	$('to_textarea').addEvent('click',function(){
		$('input').convert('textarea',['name','id','class','value']);
	});
	
});