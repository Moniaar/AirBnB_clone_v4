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

	$.ajax({
    	type: 'POST',
    	url: 'http://localhost:5001/api/v1/places_search/',
    	data: '{}',
    	success: function (data) { renderPlaces(data); },
    	contentType: 'application/json'
  });
});

function renderPlaces (places) {
  $('section.places').html('');
  places.forEach(place => {
    $('section.places').append(`<article><div class="title_box"><h2>${place.name}</h2><div class="price_by_night">$${place.price_by_night}</div></div><div class="information"><div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div><div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div><div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div></div><div class="description">${place.description}</div></article>`);
  });
}
