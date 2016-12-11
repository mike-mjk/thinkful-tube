var baseURL = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromApi(searchTerm, callback) {
	var query = {
		q: searchTerm,
		part: 'snippet',
		r: 'json',
		key: 'AIzaSyCIdQfwZ7qDSA1BhnfzEBa-6AB8ma8YY9k'
	}
	$.getJSON(baseURL, query, callback);
}

function displayData (data) {
	var resultElement = '';
	console.log(data.items);
	if (data.items.length > 0) {
		data.items.forEach(function(item) {
			//resultElement += "<img src='" + item.snippet.thumbnails.medium.url + "'>"
			resultElement += "<a href='https://www.youtube.com/watch?v=\
			" + item.id.videoId +"' class='thumbnail'> <img src='" + item.snippet.thumbnails.medium.url + "'></a>"

		})
	}
	else {
		resultElement += '<p>No Results</p>';
	}
	//console.log(data.items[0].snippet.thumbnails.medium.url);
	//resultElement += data.items[0].snippet.thumbnails.medium.url;
	//$('.js-search-results').html("<img src='" + resultElement + "'>");
	$('.js-search-results').html(resultElement);
}


function onSubmit () {
	$('.js-button').on("click", function() {
		console.log("nothing");
		console.log($('.js-query').val());
		return $('.js-query').val();

	});
}
//$('.js-button').on( "click", function() {
//	console.log("click");
//});

function watchSubmit() {
	$('.js-search-form').submit(function(e) {
		e.preventDefault();
		var query = $(this).find('.js-query').val();
		getDataFromApi(query, displayData);
	});
}


//getDataFromApi(onSubmit(), displayData);
//$(document).ready(getDataFromApi());
$(function(){watchSubmit();});
