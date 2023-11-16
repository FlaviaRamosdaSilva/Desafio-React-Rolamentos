import React from "react";
import { useState, useRef } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { Container, H1, Image, ContainerItens, Button, Input, InputLabel, Footer, Select} from "./styles";

import Nachi from '../assets/Nachi-rolam-6303-removebg-preview.png'


function App() {
  const [bearing, setBearings] = useState([]);
  const inputName = useRef();
  const inputNumber = useRef();
  const inputPrice = useRef();

  const history = useHistory();

  const baseUrl = "https://bearing-backend-flavia-ramos-projects.vercel.app"

  async function addNewBearing() {
    const { data: newBearing } = await axios.post(`${baseUrl}/bearings`, {
      name: inputName.current.value,
      number: inputNumber.current.value,
      price: inputPrice.current.value
    });

    setBearings([...bearing, newBearing]);

    history.push("/bearings");

    console.log(inputPrice)
  }

  return <Container>
    <Image alt="rolamento-nachi" src={Nachi} />

    <ContainerItens>
    <H1> Faça seu Pedido! </H1>
    <InputLabel>Escolha o tipo de Rolamento:</InputLabel>
    <Select ref={inputName} placeholder='6004 2nsec, 6001 c3, 6205c3....' >
    <option>Selecione</option>
      <option>6004 2nse</option>
      <option>6201 2nse</option> 
      <option>6202 2nse</option> 
      <option>6203 2nse</option> 
      <option>6204 2nse</option> 
      <option>6301 2nse</option> 
      <option>6302 2nse</option> 
      <option>6303 2nse</option> 
      <option>6203 c3</option> 
      <option>6202 SPL s/bli</option> 
      <option>28bc18nse2</option> 
      <option>28bcs18</option> 
      <option>35b0765nc2s18</option> 
      <option>35bc07658</option> 
      <option>6001 c3</option> 
      <option>6003 ze</option> 
      <option>6205 ncc3</option> 
      <option>6205 ncc4</option> 
      <option>63/22 c18</option> 
      <option>63/22 c37</option> 
      <option>63/28 hsc3</option>
      <option>63/28 NSL2</option> 
      <option>6207 j2nc2</option> 
      <option>6305 ncc3</option> 
      <option>6304 c3</option> 
      <option>NSK B17 -147 </option> 
      <option>Agulha</option> 
      <option>ina 113342</option>  
      </Select>
    <InputLabel>Digite a quantidade:</InputLabel>
    <Input ref={inputNumber} placeholder='Quantidade em números' type="number" />
    <InputLabel>Valor em reais: </InputLabel>
    <Input ref={inputPrice} placeholder='apenas números' type="number" />

<Button onClick={addNewBearing}>Cadastrar o pedido</Button>

    </ContainerItens>

    <Footer>Created by Flávia Ramos - Design in Nov/2023</Footer>

    </Container>

    
}

export default App;
