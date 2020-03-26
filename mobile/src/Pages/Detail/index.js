import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Linking } from "react-native";

import * as MailComposer from "expo-mail-composer";

import logoImg from "../../Assets/logo.png";
import { Feather } from "@expo/vector-icons";

import { Secondary, Success } from "../../Config/Theme";

import {
  Container,
  Header,
  HeaderBold,
  IncidentProperty,
  Title,
  Description,
  HeaderText,
  Logo,
  Incident,
  IncidentValue,
  Button,
  BtnText,
  Contact,
  Actions,
  Action,
  HeroTitle,
  HeroDescription,
  ActionText
} from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const message = `Ola ${
    incident.name
  }, estou entrando em contato pois gostaria de ajudar no caso "${
    incident.title
  }" com o valor de ${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Button onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color={Secondary} />
        </Button>
      </Header>

      <Incident>
        <IncidentProperty>ONG:</IncidentProperty>
        <IncidentValue>
          {incident.name} de {incident.city}/{incident.uf}
        </IncidentValue>

        <IncidentProperty>CASO:</IncidentProperty>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncidentProperty>VALOR:</IncidentProperty>
        <IncidentValue>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(incident.value)}
        </IncidentValue>
      </Incident>

      <Contact>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o heroi deste caso.</HeroTitle>

        <HeroDescription>Entre em contato:</HeroDescription>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>Whatsapp</ActionText>
          </Action>

          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </Contact>
    </Container>
  );
}
