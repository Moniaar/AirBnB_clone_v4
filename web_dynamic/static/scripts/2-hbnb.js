$(document).ready(function(){

    $('input[type="checkbox"]').on('change', function(){

        var amenitiesChecked = [];
        $('input[type="checkbox"]:checked').each(function(){

            amenitiesChecked.push($(this).data('id'));
        });
        var amenitiesNames = $('input[type="checkbox"]:checked').map(function(){

            return $(this).data('name');
        }).get();
        $('div.amenities h4').text(amenitiesNames.join(', '));
    });

	$.get('http://localhost:5001/api/v1/status/', function (data, status) {
    	if (status === 'success') {
      		if (data.status === 'OK') {
        		$('div#api_status').addClass('available');
      		} else {
        		$('div#api_status').removeClass('available');
      		}
    	}
  	});

});
