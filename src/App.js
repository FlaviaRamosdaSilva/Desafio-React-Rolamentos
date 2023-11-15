import React from "react";
import './style.css';
import { Container, H1, Image, ContainerItens, Button, Input, InputLabel } from "./styles";
import Nachi from './assets/Nachi-rolam-6303-removebg-preview.png'

const App = () =>{
  return <Container>
    <Image alt="rolamento-nachi" src={Nachi} />

    <ContainerItens>
    <H1> Faça seu Pedido! </H1>
    <InputLabel>Digite o tipo de Rolamento:</InputLabel>
    <Input placeholder='6004 2nsec, 6001 c3, 6205c3....' />
    <InputLabel>Digite a quantidade:</InputLabel>
    <Input placeholder='Quantidade em números' />

<Button>Cadastrar o pedido</Button>

    </ContainerItens>

    </Container>
}

export default App;
