import {createGlobalStyle} from 'styled-components'



export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Langar&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body, #root {
      height:100%;
   }
   *,button,input{
      border:0;
      outline:0;
      font-family: 'Langar', cursive;
   }
   button{
      cursor:pointer;
   }
`