//var cityAndState = "Chicago, IL";

var forcastResult, jsonDataTenDay, resultsText;

var locationSubmission;

var weatherAPI;

var cityEntry;
var stateEntry;

$("weather").toggle();
$("place").toggle();


function getFormvalue(){
	cityEntry = document.getElementsByName("cityEntry")[0];
	stateEntry = document.getElementsByName("stateEntry")[0];

	showLocalWeather();
	return false;
}

function showLocalWeather(){
		$("weather").fadeOut(1000);
		$("place").fadeOut(1000);

		locationSubmission = (cityEntry.value + "," + stateEntry.value);
		console.log(locationSubmission);

	weatherAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + locationSubmission + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	console.log(weatherAPI);

	$.getJSON(weatherAPI, (jsonData) => {

		$("place").html(jsonData.query.results.channel.description); })
		$("place").fadeIn(1000);

	$.getJSON(weatherAPI, (jsonData) => {
		$("weather").html(jsonData.query.results.channel.item.description);

		var textMod = $("weather").html()
		textMod = textMod.replace("http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*","");

		textMod = textMod.replace("]]&gt;","");
		textMod = textMod.replace(">Full","target=\"_blank\" >Full");

		$("weather").html(textMod);
		$("weather").fadeIn(1000);
	});



}


//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
