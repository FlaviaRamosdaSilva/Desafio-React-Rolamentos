import React from "react";
import { useState, useRef } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import { Container, H1, Image, ContainerItens, Button, Input, InputLabel, Footer} from "./styles";

import Nachi from '../assets/Nachi-rolam-6303-removebg-preview.png'


function App() {
  const [bearing, setBearings] = useState([]);
  const inputName = useRef();
  const inputNumber = useRef();

  const history = useHistory();

  const baseUrl = "https://bearing-backend-flavia-ramos-projects.vercel.app"

  async function addNewBearing() {
    const { data: newBearing } = await axios.post(`${baseUrl}/bearings`, {
      name: inputName.current.value,
      number: inputNumber.current.value
    });

    setBearings([...bearing, newBearing]);

    history.push("/bearings");
  }

  return <Container>
    <Image alt="rolamento-nachi" src={Nachi} />

    <ContainerItens>
    <H1> Faça seu Pedido! </H1>
    <InputLabel>Digite o tipo de Rolamento:</InputLabel>
    <Input ref={inputName} placeholder='6004 2nsec, 6001 c3, 6205c3....' />
    <InputLabel>Digite a quantidade:</InputLabel>
    <Input ref={inputNumber} placeholder='Quantidade em números' />

<Button onClick={addNewBearing}>Cadastrar o pedido</Button>

    </ContainerItens>

    <Footer>Created by Flávia Ramos - Design in Nov/2023</Footer>

    </Container>

    
}

export default App;
