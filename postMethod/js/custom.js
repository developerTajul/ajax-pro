jQuery(document).ready(function(){

	jQuery('a').click(function(){

		jQuery.post('home.html', '', function(def){

			jQuery('.container').html(def);


		});


		return false;
	});


});

/**
(function($){

	$(document).ready(function(){

		$('a').click(function(){

			
			$.post('home.html', '', function(def){
				$('.container').html(def);
			});

			return false;
		});

	});

}(jQuery));







jQuery(document).ready(function(){

	jQuery('a').click(function(){


		jQuery('.container').html("<h2>Good News</h2>");

		return false;
	});

}); **/