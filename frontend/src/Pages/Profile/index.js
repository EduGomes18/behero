import React from "react";

import logoImg from "../../Assets/logo.svg";

import { Container, Title, Header, Links, Icon, IconTrash } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <Title>Bem vinda, APAD</Title>

        <Links className="button" to="/incidents/new">
          Cadastrar novo caso
        </Links>
        <button type="button">
          <Icon size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <IconTrash size={20} color="#a8a8b3"></IconTrash>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <IconTrash size={20} color="#a8a8b3"></IconTrash>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <IconTrash size={20} color="#a8a8b3"></IconTrash>
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRICAO:</strong>
          <p>Descricao teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <IconTrash size={20} color="#a8a8b3"></IconTrash>
          </button>
        </li>
      </ul>
    </Container>
  );
}
