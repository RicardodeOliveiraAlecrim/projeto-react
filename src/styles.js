import styled from "styled-components";

import Back1 from "./assets/back1.jpg";

export const Container = styled.div`
  height: 100%;
  background: url("${Back1}");
  background-size: cover;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
 `;

export const Image = styled.img`
  height: 200px;
  margin-top: 20px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.5) 84%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0.15) 100%
  );
  border-radius: 60px 60px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 10px;  
  height: 100vh;
  width: 350px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  color: #fff;
  margin-bottom: 20px;
`;

export const InputText = styled.p`
  color: #fff;
  font-size: 25px;
`;

export const Input = styled.input`
  color: #fff;
  font-size: 25px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 84%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0.15) 100%
  );
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  color: #fff;
  font-size: 25px;
  background: green;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  border-width: 0px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const User = styled.div`
  color: #fff;
  font-size: 25px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.5) 84%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0.15) 100%
  );
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  border: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;

  button {
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    cursor: pointer;
    outline: none;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }
  }

  img {
    height: 30px;
  }
`;
