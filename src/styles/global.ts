
import { createGlobalStyle } from 'styled-components';
import cinemaBackground from '../assets/cinemaBackground.svg';

export default createGlobalStyle`

        *{
            margin:0;
            padding:0;
            outline:0;
            box-sizing:border-box;
        }

        body{
            font: 14px Arial, Verdana, sans-serif;
            background: url(${cinemaBackground}) no-repeat 70% top;
        }

        button{
            cursor:pointer;
        }

        #root{
            max-width:960px;
            margin:0 auto;
            padding: 40px 20px;
        }

`;