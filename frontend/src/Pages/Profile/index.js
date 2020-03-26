import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import { useHistory } from "react-router-dom";

import logoImg from "../../Assets/logo.svg";

import { Container, Title, Header, Links, Icon, IconTrash } from "./styles";

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");

  const history = useHistory();

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente.");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Be The Hero" />
        <Title>Bem vinda, {ongName}</Title>

        <Links className="button" to="/incidents/new">
          Cadastrar novo caso
        </Links>
        <button onClick={handleLogout} type="button">
          <Icon size={18} color="#E02041" />
        </button>
      </Header>

      <h1>Casos Cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRICAO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button
              onClick={() => {
                handleDeleteIncident(incident.id);
              }}
              type="button"
            >
              <IconTrash size={20} color="#a8a8b3"></IconTrash>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
