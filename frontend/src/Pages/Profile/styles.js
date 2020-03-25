import styled from "styled-components";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Principal } from "../../Config/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  & h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
  }

  & ul li {
    background: #fff;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  }

  & ul li button {
    position: absolute;
    right: 24px;
    top: 24px;
    background: transparent;
    border: 0;
  }

  & ul li button:hover {
    opacity: 0.8;
  }

  & ul li strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;
  }

  & ul li p + strong {
    margin-top: 32px;
  }

  & ul li p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  & img {
    height: 64px;
  }

  & button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;
  }

  & button:hover {
    border-color: #999;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Links = styled(Link)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
`;

export const Icon = styled(FiPower)``;

export const IconTrash = styled(FiTrash2)``;
