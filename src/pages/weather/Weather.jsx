import React, {useState} from "react";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import Widgetlg from '../../components/Widgetlg/Widgetlg';
//import {value} from '../localisation/localisation'

import "./Weather.css"

const api = {
  key: "d04c66ebc247781a397c3e2881a35521",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

  const [weather, setWeather] = useState({});
  var value = "brest,fr"
  


      fetch(`${api.base}forecast?q=${value}&units=metric&lang=fr&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);

        });


  const dateBuilder = (d) => {
    let months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    let days = ["Diamnche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
        <div className="Weather">
            <div>
            <main>
                {(typeof weather.cnt != "undefined") ? (
                <div>
                    <div className="location-box">
                        <div className="location">{weather.city.name}, {weather.city.country}</div>
                        <div className="date">{dateBuilder(new Date())}, {weather.list[0].dt_txt}</div>
                    </div>
                    <div className="weather-box">
                    <div className="weather">{weather.list[0].weather[0].description}</div>
                        <FeaturedInfo info1={Math.round(weather.list[0].main.temp)} unite1="°C" description1="Température" info2={weather.list[0].main.humidity} unite2="%" description2="Humidité" info3={weather.list[0].main.pressure} unite3="Pa" description3="Pression" info4={Math.round(weather.list[0].wind.speed)} unite4="km/h" description4="Vent"/>
                        <div className="weatherWidget">
                            <WidgetSm Titre="Détails de la journée" Jour1={weather.list[1].dt_txt} Temperature1={Math.round(weather.list[1].main.temp)} Description1={weather.list[1].weather[0].description} Jour2={weather.list[2].dt_txt} Temperature2={Math.round(weather.list[2].main.temp)} Description2={weather.list[2].weather[0].description} Jour3={weather.list[3].dt_txt} Temperature3={Math.round(weather.list[3].main.temp)} Description3={weather.list[3].weather[0].description} Jour4={weather.list[4].dt_txt} Temperature4={Math.round(weather.list[4].main.temp)} Description4={weather.list[4].weather[0].description} Jour5={weather.list[5].dt_txt} Temperature5={Math.round(weather.list[5].main.temp)} Description5={weather.list[5].weather[0].description}/>
                            <Widgetlg Titre="Prévision météo" Date1={weather.list[8].dt_txt} Date2={weather.list[16].dt_txt} Date3={weather.list[24].dt_txt} Date4={weather.list[32].dt_txt} Date5={weather.list[39].dt_txt} Temp1={Math.round(weather.list[8].main.temp)} Temp2={Math.round(weather.list[16].main.temp)} Temp3={Math.round(weather.list[24].main.temp)} Temp4={Math.round(weather.list[32].main.temp)} Temp5={Math.round(weather.list[39].main.temp)} Desc1={weather.list[8].weather[0].description} Desc2={weather.list[16].weather[0].description} Desc3={weather.list[24].weather[0].description} Desc4={weather.list[32].weather[0].description} Desc5={weather.list[39].weather[0].description}/>
                        </div>
                    </div>
                </div>
                ) : ('')}
            </main>
            </div>
        </div>
  );
}

export default Weather;

/*function Icone({description}){
    const icone="";
    if (description=="nuageux"){
        icone="wi-day-cloudy";
    }
    else if (description=="ensoleillée"){
        icone="wi-day-sunny";
    }
    else if (description=="Couvert"){
        icone="wi-day-cloudy-high";
    }
    else if (description=="legère pluie"){
        icone="wi-day-hail";
    }
    else if (description=="pluie modérée"){
        icone="wi-day-rain";
    }

    else if (description=="partiellement nuageux"){
        icone="wi-day-cloudy";
    }
    else if (description=="ciel dégagé"){
        icone="wi-day-sunny";
    }
    else {
        icone="barometer";
    }
    return icone;
}

*/
