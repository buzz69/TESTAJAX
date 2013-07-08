function comTest(){
	$('#result').html('Please wait...');
	$.ajax({
		type       : "GET",
		url        : "http://www.cloudsecuritycam.com/COM/ajax.php",
		crossDomain: true,
		data       : {action : 'HELLO', password : 'cloudsecuritycam'},
		success    : function(response) {
				$('#result').html(response);
			}
	});
}
