function comTest(){
	$('#result').html('Please wait...');
	$.ajax({
		type       : "GET",
		url        : "http://www.cloudsecuritycam.com/COM/ajax.php",
		contentType: "application/json",  
        dataType   : 'jsonp',  
        data       : {action: 'HELLO', pwd: 'PASSWORD' },
		success    : function(response) {
			$('#result').html(response.text);
		},
		error      : function() {
		    //console.error("error");
		    alert('Not working!');                  
		}
	});
}

$( document ).bind( "mobileinit", function() {  
       // Make your jQuery Mobile framework configuration changes here!  
       $.mobile.allowCrossDomainPages = true;  
     }); 
