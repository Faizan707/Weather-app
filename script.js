const apiKey = "8d6ebe5bce2c9ec8b392a28a8d1d61fa";

async function check(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "C";
    document.querySelector(".hum").innerHTML = "Humidity: " + data.main.humidity;
    document.querySelector(".windSpeed").innerHTML = "Windspeed: " + data.wind.speed + " km/h";
    
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", () => {
  const searchBox = document.querySelector(".search input");
  check(searchBox.value);
});

// Example usage: check("London");
