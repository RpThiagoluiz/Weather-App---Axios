import {createGlobalStyle} from 'styled-components'



export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body, #root {
      background-image: linear-gradient( 109.6deg,  rgba(121,203,202, 1) 11.2%, rgba(119,161,211,1) 79.1% );
      height: 100%;
      overflow:hidden;
   }
   *,button,input{
      border:0;
      outline:0;
      font-family: 'Roboto', sans-serif;
   }
   button{
      cursor:pointer;
   }
`