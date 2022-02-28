import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

const Title = styled.div`
  display: flex;
  color: #949494;
  font-size: 20px;
`;

const Description = styled.div`
  display: flex;
  color: black;
  font-size: 20px;
`;

const Text = ({ title, data }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{data}</Description>
    </Container>
  );
};

export default Text;
