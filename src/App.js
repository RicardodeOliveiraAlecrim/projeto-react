import React from "react";

import Logo from "./assets/Logo.png";

import Arrow from "./assets/arrow.png";

import Trash from "./assets/trash.png";


import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputText,
  Input,
  Button,
  User
} from "./styles";

const App = () => {
  const users = [
    { id: Math.random(), name: "José", age: 20 },
    { id: Math.random(), name: "Maria", age: 23 },
    { id: Math.random(), name: "Mateus", age: 30 },
  ];

  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <ContainerItens>
        <H1>Bem vindo!</H1>

        <InputText>Nome</InputText>
        <Input placeholder="Me chamo..." />

        <InputText>Idade</InputText>
        <Input placeholder="Tenho..." />

        <Button>
          Cadastrar
          <img alt="arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p>
              <p> {user.age} anos</p>
              <button><img alt="trash" src={Trash}/></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
