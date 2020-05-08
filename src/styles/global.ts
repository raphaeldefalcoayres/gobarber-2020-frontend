import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    min-height:100%;
    position:relative;
    overflow-x:hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background:#312e38;
    color:#fff;
  }

  body, input, button{
    font:1rem 'Roboto Slab',serif;
  }

  button{
    cursor:pointer;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }

`;
