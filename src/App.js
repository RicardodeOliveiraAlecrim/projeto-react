import React from 'react'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputText,
  Input,
  Button
} from "./styles";

const App = () => {

  return (

    <Container>

      <Image></Image>

      <ContainerItens>

        <H1>Bem vindo!</H1>

        <InputText>Nome</InputText>
        <Input placeholder="Me chamo..."/>

        <InputText>Idade</InputText>
        <Input placeholder="Tenho..."/>

        <Button>Cadastrar</Button>

      </ContainerItens>

    </Container>

  )
}

export default App