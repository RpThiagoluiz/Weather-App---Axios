import React, {useState, useEffect} from 'react'

//API-key
import { API_KEY } from './.env'


//Styles
import GlobalStyle from "./assets/styles/globalStyles.js"
import LoadingDots from './assets/styles/loadingDots'
import { BtnLocation, CityContainer, Content, HeaderContainer, Input, MainContainer, StatsContainer } from "./assets/styles/styles"


//global Scope for Acess

const api = {
    key:API_KEY,
    url:"https://api.openweathermap.org/data/2.5/" //  - /weather
}


const App = () => {
    const[query,setQuery] = useState('')
    const [weather, setWeather] = useState('')


  //Search...
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  //async

  // useEffect(() => {
  //   async function getItems() {
  //     try {
  //       const { result } = await api.get("https://api.openweathermap.org/data/2.5/");
  //       setWeather(result);
  //       setQuery('');
  //     } catch (error) {
  //       alert("Ocorreu um erro ao buscar os items");
  //     }
  //   }
  //   getItems();
  // }, []);


  //Date

  const dateBuilder = (d) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} de ${month} de ${year}`
  }

  //CallComponents

  
  

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <StatsContainer>
          <Input 
            type='text'
            placeholder="Procurar ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            

          />{(typeof weather.main !== "undefined") ? (
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
          ) : (
            <LoadingDots />
          )}
          
        <BtnLocation>
            onCLickas
        </BtnLocation>
        </StatsContainer>
      </MainContainer>
    </>
  )
}
export default App;
