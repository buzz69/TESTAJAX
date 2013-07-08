function comTest(){
	$.ajax({
		type: "POST",
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
		url: "http://www.cloudsecuritycam.com/COM/ajax.php",
		data: "action=HELLO",
		success: function (rep) {
			$('#result').html(rep);
		}
	});
}