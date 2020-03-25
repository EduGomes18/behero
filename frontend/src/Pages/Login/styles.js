import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
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

export const Link = styled.a`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled(FiLogIn)`
  margin-right: 10px;
`;

export const Title = styled.h1`
  color: #7159c1;
  font-size: 32px;
  margin-top: 32px;
  margin-bottom: 32px;
`;
