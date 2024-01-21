import "./styles/main.css";
import "./modules/icon.js";
import "./modules/skeleton.js";

// npm install --save-dev eslint-config-prettier html-webpack-plugin terser-webpack-plugin css-minimizer-webpack-plugin style-loader css-loader

async function getData () {
    try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1cfa627e1c6c4a79ba8152845241901&q=chicago&aqi=yes`, {mode:"cors"});
    const weatherObj = await response.json();
    console.log(`city name : ${weatherObj.location.name}`);
    console.log(`condtions : ${weatherObj.current.condition.text}`);
    console.log(`wind : ${weatherObj.current.wind_kph}`);
    console.log(`uv: ${weatherObj.current.uv}`);
    } catch (err) {
        console.log(err);
    }
}

getData();