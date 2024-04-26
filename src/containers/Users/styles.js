import styled from "styled-components";

import Back2 from "../../assets/back2.jpg";




export const Container = styled.div`
  height: 100vh;
  background: url("${Back2}");
  background-size: cover;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
 `;

export const Image = styled.img`
  height: 100px;
  margin-top: 20px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    145deg,
    rgba(0, 0, 0, 0.5) 84%,
    rgba(0, 0, 0, 0.5) 85%,
    rgba(0, 0, 0, 0.15) 100%
  );
  backdrop-filter: blur(05px);

 
  border-radius: 60px 60px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  gap: 10px;  
  height: 100%;
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
  margin-bottom: 50px;
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
  margin-top: 100px;

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
    trasform: rotate(180deg);
  }

`;
