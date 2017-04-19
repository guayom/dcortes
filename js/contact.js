var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {

	e.preventDefault();

	var buttonCopy = $('#contact-form button').html(),
		errorMessage = $('#contact-form button').data('error-message'),
		sendingMessage = $('#contact-form button').data('sending-message'),
		okMessage = $('#contact-form button').data('ok-message'),
		hasError = false;

		$('#contact-form .error-message').remove();

	$.ajax({
		url: '//formspree.io/infostampscr@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$('#contact-form button').html('<i class="fa fa-spinner fa-spin"></i>'+sendingMessage);
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$('#contact-form button').html('<i class="fa fa-check"></i>'+okMessage);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
		}
	});
});
