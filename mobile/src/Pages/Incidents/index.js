import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useNavigation } from "@react-navigation/native";
import { FlatList, ActivityIndicator, View } from "react-native";

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
  BtnText
} from "./styles";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigationDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  console.log(total, incidents.length);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get("incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <HeaderText>
          Total de <HeaderBold color={Success}>0 casos</HeaderBold>
        </HeaderText>
      </Header>

      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia!</Description>

      <FlatList
        style={{ marginTop: 32 }}
        data={incidents}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <Incident>
            <IncidentProperty>ONG:</IncidentProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncidentProperty>CASO:</IncidentProperty>
            <IncidentValue>{incident.description}</IncidentValue>

            <IncidentProperty>VALOR:</IncidentProperty>
            <IncidentValue>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </IncidentValue>

            <Button
              onPress={() => {
                navigationDetail(incident);
              }}
            >
              <BtnText>Ver mais detalhes</BtnText>
              <Feather name="arrow-right" size={16} color={Secondary} />
            </Button>
          </Incident>
        )}
      />
      {loading === true ? (
        <ActivityIndicator size="small" color={Secondary} />
      ) : (
        <View />
      )}
    </Container>
  );
}
