import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import Trash from '../assets/lixeira.svg'
import Orders from '../assets/varias-caixas-png-removebg-preview.png'

import { Container, H1, Image, ContainerItens, Button, Footer, Bearing } from "./styles";


function Bearings() {
  const [bearings, setBearings] = useState([]);
  const history = useHistory()
  const baseUrl = "https://bearing-backend-flavia-ramos-projects.vercel.app"

  useEffect(() => {

    async function fetchBearings() {
      const { data: newBearing } = await axios.get(`${baseUrl}/bearings`)
      setBearings(newBearing);
    }
    fetchBearings()
  }, [bearings])



  async function deleteBearing(bearingId) {
    await axios.delete(`${baseUrl}/bearings/${bearingId}`)

    const newBearings = bearings.filter(bearing => bearing.id !== bearingId);  // estamos criando um novo array utilizando o array atual e
    // filtrando, onde a gente só deixa no array os usuários que tiverem um ID diferente do que foi selecionado.
    setBearings(newBearings);
  };

function goBackPage() {
  history.push("/")
}


  return <Container>

    <Image alt="rolamento-nachi" src={Orders} />

    <ContainerItens>

      <H1>Lista do Pedido</H1>

      <ul>
        {bearings.map((bearing) => (
          <Bearing key={bearing.id}>
            <p>{bearing.name}</p> <p>{bearing.number}</p>
            <button onClick={() => deleteBearing(bearing.id)}><img src={Trash} alt='lata-de-lixo' /></button>
          </Bearing>))}
      </ul>

      <Button onClick={goBackPage} >Voltar</Button>

    </ContainerItens>

    <Footer>Created by Flávia Ramos - Design in Nov/2023</Footer>

  </Container>


}

export default Bearings;
