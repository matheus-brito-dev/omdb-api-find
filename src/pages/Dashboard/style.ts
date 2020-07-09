import styled from 'styled-components';
import {shade} from 'polished';



//sempre exportar o componente
export const Title = styled.h1`

        font-size: 3em;
        color:#3A3A3A;
        max-width:540px;
        margin-top: 60px;

        span{
            color:#340D66;
        }
        
`;


export const Error = styled.span`
        
        display:block;
        color:#c53030;
        margin-top:8px;
`;
    


export const Form = styled.form`

    max-width:700px;
    display:flex;
    margin-top: 80px;
   

    input{
        flex:1;
        border: 2px solid #d4d4d4;
        padding: 0 24px;
        height:70px;
        border-radius: 5px 0 0 5px;

        &::placeholder{
            font-size:1.125em;
            
        }   
    }

    button{

        background-color:#340D66;
        color:white;
        border:none;
        padding:10px 0;
        width:210px;
        transition: background-color 0.2s;
        border-radius: 0 5px 5px 0;

        &:hover{
                background-color: ${shade(0.2,'#340D66')}
            }
        
    }

`;


export const Movies = styled.div`

        display:flex;
        max-width:700px;
        flex-wrap:wrap;
        margin:70px auto;
       
        /*background-color:tomato;*/
    
    

    div.container{
        flex:1;
        margin-left:24px;
        background-color:#fff;
        border: 2px solid #d4d4d4;
        width:250px;
        padding: 60px 0;
        margin-top:24px;
        
    }

        div.img{
            text-align:center;

            img{
            width:64px;
            height:64px;
            border-radius:50%;
            
        }
        }

        div.info{
            display:flex;
            justify-content:center;
           
  
        }
       

        h2{
            text-align:center;
            color:#B0AFAF;
            font-weight:bold;
            font-size:1.825em;
            line-height:1.4em;
            margin-top:10px;
        }

        p{
            color:#717171;
            margin-top:10px;
        }


       

                a{
            display:block;
            text-decoration:none;
            background-color:#340D66;
            color:white;
            border:none;
            padding:10px 5px;
            width:150px;
           
            cursor:pointer;
            text-align:center;
                
            margin:30px auto;
            display:flex;
            justify-content:center;
           
            
            
          
            
            
        
            
        
        }
       

       


`;




