(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)
// Solve Button
// fix bootstrap model trigger event
$("#btn-solve").click(function(event) {
	if (rowValidation() && colValidation() && blockValidation()) {
		console.log("Correct Solution")
	} else {
		// FAILED
		// Rewrites Modal Message
		$("#modal-id .modal-body p").html("Something seems to be wrong. Please try again.")
		console.log("Incorrect Solution")
	}
});