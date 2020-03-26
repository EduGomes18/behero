import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";

import { Container, Icon, Title, Form, FormContainer, Links } from "./styles";

import logoImg from "../../Assets/logo.svg";
import heroesImg from "../../Assets/heroes.png";

export default function Login() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente");
    }
  }

  return (
    <Container>
      <FormContainer>
        <img src={logoImg} alt="Be The Hero" />
        <Form onSubmit={handleLogin}>
          <Title>Fazer login!</Title>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
          />

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
