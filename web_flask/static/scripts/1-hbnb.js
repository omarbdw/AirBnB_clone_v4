$(document).ready(function() {
	const amenities = {};

	$('input[type="checkbox"]').change(function() {
		const amenityId = $(this).data('amenity-id');
		const amenityName = $(this).data('amenity-name');

		if ($(this).is(':checked')) {
			amenities[amenityId] = amenityName;
		} else {
			delete amenities[amenityId];
		}

		const amenitiesList = Object.values(amenities).join(', ');
		$('div.Amenities h4').text(amenitiesList);
	});
});