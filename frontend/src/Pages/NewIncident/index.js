import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";

import {
  Container,
  Content,
  Section,
  Form,
  Title,
  Text,
  Links,
  Icon
} from "./styles";
import logoImg from "../../Assets/logo.svg";

export default function NewIncident() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      console.log(ongId);

      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Text>
            Descreva o caso detalhadamente para encontrar um herói que possa
            resolver.
          </Text>
          <Links className="back-link" to="/profile">
            <Icon size={16} color="#e02041" />
            Voltar para home!
          </Links>
        </Section>
        <Form onSubmit={handleNewIncident}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar Caso
          </button>
        </Form>
      </Content>
    </Container>
  );
}
