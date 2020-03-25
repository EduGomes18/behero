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

export default function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Text>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Text>
          <Links className="back-link" to="/">
            <Icon size={16} color="#e02041" />
            Já sou cadastrado!
          </Links>
        </Section>
        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />
          <InputGroup>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
