import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

const Title = styled.div`
  display: flex;
  color: #949494;
  font-size: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 50%;
  font-size: 16px;
`;

const Memo = ({ title, memo, setMemo }) => {
  const onChangeInput = (e) => {
    setMemo(e.target.value);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Input
        onChange={(e) => onChangeInput(e)}
        value={memo}
        placeholder="내용을 입력해주세요"
      />
    </Container>
  );
};

export default Memo;
