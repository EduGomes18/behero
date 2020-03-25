import React from "react";

import {
  Container,
  Content,
  Section,
  Form,
  Title,
  Text,
  Links,
  Icon,
  InputGroup
} from "./styles";
import logoImg from "../../Assets/logo.svg";

export default function NewIncident() {
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
        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em Reais" />
          <button className="button" type="submit">
            Cadastrar Caso
          </button>
        </Form>
      </Content>
    </Container>
  );
}
