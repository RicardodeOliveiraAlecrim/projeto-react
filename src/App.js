import React, { useState, useRef } from "react";

import axios from "axios";

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
  User,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);

  const inputName = useRef();

  const inputAge = useRef();

  async function addNewUser() {

    const data = await axios.post("http://localhost:3001/users/", { name: inputName.current.value, age: inputAge.current.value })
      console.log(data)
    /* setUsers([
       ...users,
       {
         id: Math.random(),
         name: inputName.current.value,
         age: inputAge.current.value,
       },
     ]);*/
  }

  function removeUser(id) {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <ContainerItens>
        <H1>Bem vindo!</H1>

        <InputText>Nome</InputText>
        <Input placeholder="Me chamo..." type="text" ref={inputName} />

        <InputText>Idade</InputText>
        <Input
          placeholder="Tenho..." type="text" ref={inputAge}
        />

        <Button type="button" onClick={addNewUser}>
          Cadastrar
          <img alt="arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p>
              <p> {user.age} anos</p>
              <button type="button" onClick={() => removeUser(user.id)}>
                <img alt="trash" src={Trash} />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
