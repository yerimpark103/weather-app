import styled from "@emotion/styled";
import {Card} from "antd";

export const Container = styled.div`
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ElevatedCard = styled(Card)`
  min-width: 20rem;
  padding: 3rem 2rem;
  box-shadow: 5px 8px 24px 5px rgba(208, 216, 243, 0.6);
  text-align: center;
`;
