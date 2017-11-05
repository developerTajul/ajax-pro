jQuery(document).ready(function(){

	jQuery('.user_info').click(function(){

		var naam = jQuery('input#userName').val();
		var email = jQuery('input#userEmail').val();

		$.ajax({
			'url'	: 'process.php',
			'success' : function(result){
				jQuery('.something').html(result);
			},
			'type'	: 'POST',
			'data'	: {
				'userName'	: naam,
				'userEmail'	: email
			}
		});


		return false;
	});

});