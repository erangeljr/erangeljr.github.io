(function(){
	"use strict";

	var $pickButton = $("#pickButton");

	$("#reasonDropdown li a").on("click", function(){
		var reason = $(this).text();
		$pickButton.text(reason);
	});


	var $sentDialog =$("#sentDialog");

	$("#contactForm").on("submit", function(){
		$sentDialog.modal('show');
		return false;
	});

	$sentDialog.on("hidden.bs.modal", function(){
		alert("close");
	});

	$("#contactForm input[type=submit]").tooltip({
		delay: {
			show: 500,
			hide: 0
		}
	});
})();

$( "#contact-menu" ).click(function() {
  $("#home-menu").removeClass('active');
  $("#contact-menu").addClass('active');
});