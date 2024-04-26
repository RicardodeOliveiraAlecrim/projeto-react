import React, { useState, useRef } from "react";

import axios from "axios";

import Arrow from "../../assets/arrow.png";

import Logo from "../../assets/Logo.png";

import { useHistory } from "react-router-dom";

import {
  Container,  
  ContainerItens,
  H1,
  InputText,
  Input,
  Button,
  Image  
} from "./styles";

const Home = () => {

  const history = useHistory();

  const [users, setUsers] = useState([]);

  const inputName = useRef();

  const inputAge = useRef();

  
  async function addNewUser() {
     
     const {data:addUser}= await axios.post("http://localhost:3001/users/", { name: inputName.current.value, age: inputAge.current.value })
    
     console.log(addUser)
    
     setUsers([...users, addUser]);

    history.push("/users");
    
  }


  return (

    <Container>
      
      <Image alt="logo" src={Logo}/>

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
      
      </ContainerItens>
    </Container>
  );
};

export default Home;
