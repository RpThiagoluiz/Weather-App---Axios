import React,{useState} from 'react'

//Styles
import {CityContainer, Content, HeaderContainer} from "./assets/styles/styles"

 //Date



const ValidCity = () => {
    const [weather, setWeather] = useState('')

    const dateBuilder = (d) => {
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} de ${month} de ${year}`
      }


    return (
        <CityContainer>
        <HeaderContainer>
          <sup>{weather.sys.country}</sup>
          <h3>{weather.name}</h3>
          <p>{dateBuilder(new Date())}</p>
        </HeaderContainer>
        <Content>
          <small className="temp">Temp: {Math.round(weather.main.temp)} <sup>°C</sup></small> 
          <small className="humid">Umidade {weather.main.humidity} <sup>%</sup></small>
          <small className="fell">Sensação {Math.round(weather.main.feels_like)}<sup>°C</sup></small>
          {/* info secondary */}
          <small className="temp-min">Temp. Min: {Math.round(weather.main.temp_min)} <sup>°C</sup> </small>
          <small className="temp-max">Temp. Max: {Math.round(weather.main.temp_max)}<sup>°C</sup></small>
          <div className="img-container">
          <img className="img" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
          <p>{weather.weather[0].description}</p> 
          </div>
        </Content>
      </CityContainer>
    )
}

export default ValidCity