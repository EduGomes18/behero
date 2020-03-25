import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Principal } from "../../Config/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormContainer = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
  flex-direction: column;
`;

export const Form = styled.form`
  flex-direction: column;
`;

export const Links = styled(Link)``;

export const Icon = styled(FiLogIn)`
  margin-right: 10px;
`;

export const Title = styled.h1`
  color: ${Principal};
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
