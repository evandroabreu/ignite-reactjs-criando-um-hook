import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #FFFFFF;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-900: #121214;
    --gray-580: #1f2729;
    --cyan-500: #61dafb;
    --yellow-500: #eba417;
  }

  @media(max-width:1080px){
    html{
        font-size: 93.75%;
    }
  }

  @media(max-width:720px){
      html{
          font-size: 87.5%;
      }
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .react-modal-close{     

    cursor: pointer;
    background-color: #137A5A; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 100%;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
  }

`;
