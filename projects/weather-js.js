// Load and display data
	function hdnWeatherJsonpCallback(data) {
		let currentDiv = document.getElementById('current');
		let forecastDiv = document.getElementById('forecast');
		let weeklyList = document.querySelector('ul');
		let selectCity = document.getElementById('selectCity');
		let body = document.querySelector('body');
		let city = 9;
		//initially populate the page
		window.onload = () => {
			populateSelect();
			displayCurrent();
			weeklyForecast();
		}
		//Update data based on city change
		selectCity.onchange = () => {
			city = selectCity.value;
			removeListItems();
			displayCurrent();
			weeklyForecast();
		}
		//Reset data every 10 minutes
		setInterval(function() {
			console.log('Reset');
			removeListItems();
			displayCurrent();
			weeklyForecast();
		}, 600000);
		//remove previous data before populating new list items
		function removeListItems() {
			let allListItems = document.querySelectorAll('li');
			for (var i = 0; i < allListItems.length; i++) {
		    weeklyList.removeChild(allListItems[i]);
		  }
		}
		//Populate the select element with all cities
		function populateSelect() {
			for (let i = 0; i < data.cities.length; i++) {
				let option = document.createElement('option');
				let optValue = i;
				let optCity = data.cities[i].geoloc.city;
				if (optValue == 9) {
					option.setAttribute('selected', 'selected');
				}
				option.innerHTML = optCity;
				option.value = optValue;
				selectCity.appendChild(option);
			}
		}
		//Display current temp and condition and set dark mode
		function displayCurrent() {
			let temp = '<p>' + 'The current temperature is: ' + '<strong>' + data.cities[city].current[0].temp + '&deg;' + '</strong>' + '</p>';
			let condition = '<p>' + 'The current condition is: ' + '<strong>' + data.cities[city].current[0].condition + '</strong>' + '</p>';
			currentDiv.innerHTML =  temp + condition;
			let nyTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
			nyTime = new Date(nyTime);
			let hours = nyTime.getHours();
			if (hours >= 20 || hours <= 7) {
				body.classList.add('darkmode');
			} else {
				body.classList.remove('darkmode');
			}
		}

		var weathericons = '{"weather" : [' +
									'{"id":"sunny","icon":"32.svg" },' +
									'{"id":"mostlysunny","icon":"34.svg" },' +
									'{"id":"clear","icon":"32.svg" },' +
									'{"id":"partlysunny","icon":"34.svg" },' +
									'{"id":"cloudy","icon":"26.svg" },' +
									'{"id":"rainy","icon":"11.svg" },' +
									'{"id":"partlycloudy","icon":"28.svg" }' +
							 ']}';

		var obj = JSON.parse(weathericons);


		//Populate list with weekly forecast and icons
		function weeklyForecast() {
			for (let i = 0; i < (data.cities[city].weekly.length); i++) {
				if (i >= 2 && i <= 8) {
					let li = document.createElement('li');
					let text, img;
					let day = data.cities[city].weekly[i].weekday;
					let d = new Date();
				  let current = d.getDay()
					current = (current + 2);
					let high = data.cities[city].weekly[i].high;
					let low = data.cities[city].weekly[i].low;
					let condition = data.cities[city].weekly[i].daycondition;
					let awicon = data.cities[city].weekly[i].awdayicon;
					console.log(i + ' = icon = ' + awicon);
					// console.log(obj.weather[i].id);

					for (let j=1; j<=obj.weather.length; j++) {
						let urlSetup = obj.weather[j].id;
						console.log(urlSetup);
						if (awicon == urlSetup) {
							console.log('yay');
							img = "WOOOOOO"
							break;
						}
					}

					if (current == i) {
						text = '<strong>' + day + '</strong>' + 'the high is: ' + high + 'and the low: ' +  low + img + '<span>' + condition + '</span>';
						li.classList.add("current-day");
						li.innerHTML = text;
						weeklyList.appendChild(li);
					} else {
						text = '<strong>' + day + '</strong>' + 'the high is: ' + high + 'and the low: ' +  low + img + '<span>' + condition + '</span>';
						li.innerHTML = text;
						weeklyList.appendChild(li);
					}
				}
			}
		}
	}
