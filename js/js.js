function comTest(){
	$('#result').html('Please wait...');
	$.ajax({
		type: "POST",
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		url: "http://www.cloudsecuritycam.com/COM/ajax.php",
		data: "action=HELLO",
		crossDomain: true, 
		success: function (rep) {
			$('#result').html(rep);
		}
	});
}