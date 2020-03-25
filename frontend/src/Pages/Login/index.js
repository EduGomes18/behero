import React from "react";
import { Container, Icon, Title, Form, FormContainer, Links } from "./styles";

import logoImg from "../../Assets/logo.svg";
import heroesImg from "../../Assets/heroes.png";

export default function Login() {
  return (
    <Container>
      <FormContainer>
        <img src={logoImg} alt="Be The Hero" />
        <Form>
          <Title>Fazer login!</Title>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>

          <Links className="back-link" to="/register">
            <Icon size={16} color="#e02041" />
            Não sou cadastrado!
          </Links>
        </Form>
      </FormContainer>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
