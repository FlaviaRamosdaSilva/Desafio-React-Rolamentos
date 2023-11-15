import styled from "styled-components";
import Background from '../assets/background-vertical.png'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background: url('${Background}') no-repeat center center fixed;
background-size: cover;
height: 100vh;
width: 100vw;
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
`

export const Image = styled.img`
height: 450px;
`

export const ContainerItens = styled.div`

display: flex;
    flex-direction: column;
    align-items: left;


`

export const H1 = styled.h1`
color: #333C67;
font-size: 40px;
display: flex;
align-items: center;
margin-bottom: 25px;
`
export const InputLabel = styled.p`
color: #333C67;
font-size: 20px;
height: 40px;

`

export const Input = styled.input`
background-color: #D9D9D9;
border-radius: 30px;
height: 55px;
width: 350px;
padding-left: 10px;
font-size: 20px;
margin-bottom: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

border: none;
outline: none;
`

export const Button = styled(Link)`
background-color: #E31825;
color: #000;
border-radius: 15px;
height: 56px;
width: 100%;
font-size: 20px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

margin-bottom: 20px;
margin-top: 20px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`

export const Footer = styled.footer`
background-color: #6f85fd;
color: #fff;
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
font-style: oblique;

position: fixed;
bottom: 0;
margin-top: 1px;
`
export const Bearing = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;

margin-top: 20px;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
}

button{
    background: none;
    border: none;
    cursor: pointer;
   
}


`


