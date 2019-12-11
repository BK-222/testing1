const scroll = new SmoothScroll('#navbar a[href*="#"]', {
	speed: 1500,
	offset: 50
});

const scroll2 = new SmoothScroll('#cover a[href*="#"]', {
	speed: 1500,
	offset: 50
});

function initMap () {
	const loc = { lat: 22.262630, lng: 114.127420};
	const map = new google.maps.Map(document.querySelector('.map')
	, {
		zoom: 11,
		center: loc
	});
	const marker = new google.maps.Marker({ position: loc, map:
		map });
}
