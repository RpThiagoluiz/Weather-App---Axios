import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

`
export const StatsContainer = styled.div`
    width: 500px;
    height: 500px;
    padding: .75em; 

    background-color:rgba(250,250,250, 0.2);
    border-radius: 8px;

    display:flex;
    flex-direction: column;
    align-items:center;
    
    

  
    
`

export const Input = styled.input`

    width: 25vw ;
    
    position:relative;
    top: -35px;
    left: -35px;
    border-radius:5px;
    padding: .75em;
    transition:all .5 ease-in-out;

    :hover {
        
        border: 2px solid rgba(119,161,211);
        
    } 
    
`
export const CityContainer = styled.div`
    position:relative;
    top: 100px;
    color:white;


    > h3 {
        letter-spacing: 3px;
        text-transform: uppercase;
        font-size: 2.75em;

        
        //Props de acordo com a temperatura
        background-image: linear-gradient( 178.1deg,  rgba(246,199,34,1) 13%, rgba(245,149,33,1) 86.3% );
        background-clip:text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        
    }
    
    > small {
        font-size: 1.75em;
        margin-left: .75em;
        padding: 2px;
        
        > sup {
            font-size: .75em;
            font-weight: bold;
    
            position:relative;
            top: -5px;
        }
    }

`

export const WeatherImg = styled.img `
    padding-top: 5px;
    border-radius: 8px;

`

export const BtnLocation = styled.button `
    background-color:red;
    color: #fff;
    padding: .75em;

    position:absolute;
    top: 50px;
    right: 50px;

    border-radius: 9px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);

    transition:all .7 ease-in-out;

    &:hover{
        //change colors, && effect.
    }


`