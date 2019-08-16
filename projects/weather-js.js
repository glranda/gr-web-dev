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
			//For dark mode, I just converted NY time to West Coast time. Going further than this would require the user's location
			let nyTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
			nyTime = new Date(nyTime);
			let hours = nyTime.getHours();
			hours = hours - 3;
			if (hours >= 20 || hours <= 7) {
				body.classList.add('darkmode');
			} else {
				body.classList.remove('darkmode');
			}
		}
		//Populate list with weekly forecast and icons
		function weeklyForecast() {
			for (let i = 0; i < data.cities[city].weekly.length; i++) {
				let li = document.createElement('li');
				let day = data.cities[city].weekly[i].day;
				let week = data.cities[city].weekly[i].condition;
				let icon = data.cities[city].weekly[i].icon;
        console.log(icon);
				let iconUrl = 'portfolio/projects/assets.js' + icon + '.png'
				let img = '<img class="weather-icon" src=\"' + iconUrl + '\"' + 'alt=\"' + icon +' weather icon\"' + '>' + '</img>';
				let text;
				if (day == 'Thu') {
					text = '<strong>' + day + 'rsday: ' + '</strong>' + week + img;
				} else if (day == 'Sat') {
					text = '<strong>' + day + 'urday: ' + '</strong>' + week + img;
				} else if (day == 'Tue') {
					text = '<strong>' + day + 'sday: ' + '</strong>' + week + img;
				} else if (day == 'Wed') {
					text = '<strong>' + day + 'nesday: ' + '</strong>' + week + img;
				} else {
					text = '<strong>' + day + 'day: ' + '</strong>' + week + img;
				}
				li.innerHTML = text;
				weeklyList.appendChild(li);
			}
		}
	}
