import displayController from "./domValues.js";

async function getData(locationQuery) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=1cfa627e1c6c4a79ba8152845241901&q=${locationQuery}&aqi=yes`,
      { mode: "cors" },
    );
    const weatherObj = await response.json();

    displayController.makeDisplayBoxDiv();
    displayController.appendLocation(
      weatherObj.location.country,
      weatherObj.location.name,
    );
    displayController.appendConditions(
      weatherObj.current.condition.icon,
      weatherObj.current.condition.text,
    );
    displayController.appendTemperature(
      weatherObj.current.temp_c,
      weatherObj.current.feelslike_c,
    );
    displayController.appendWindSpeed(
      weatherObj.current.wind_kph,
      weatherObj.current.wind_dir,
    );
    displayController.appendHumidity(weatherObj.current.humidity);
  } catch (err) {
    throw err;
  }
}

export default getData;
