import React, { useState, useEffect } from "react";

import axios from "axios";

import Arrow from "../../assets/arrow.png";

import Trash from "../../assets/trash.png";

import Contacts from "../../assets/contacts.png";

import {useHistory} from "react-router-dom";

import { Container, ContainerItens, H1, Button, Image, User } from "./styles";

const Users = () => {

  const history = useHistory();
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    async function fetchUsers() {
      const { data: logUser } = await axios.get("http://localhost:3001/users");
      setUsers(logUser);
    }

    fetchUsers();
  }, []);

  async function removeUser(id) {
    await axios.delete(`http://localhost:3001/users/${id}`);

    setUsers(users.filter((user) => user.id !== id));
  }

  function mainPage() {
    history.push("/");
  }

  return (
    <Container>
      <ContainerItens>
        <Image alt="contact" src={Contacts} />

        <H1>Usuários</H1>

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

        <Button type="button" onClick={mainPage}>
          <img alt="arrow" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
