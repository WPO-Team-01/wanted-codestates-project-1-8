import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  color: white;
`;

const StoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3fc176;
  border-radius: 5px;
  cursor: pointer;
`;

const ChangeButton = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button = ({ mode, handleModal, memo, setFeedback, setFeedbackOpen }) => {
  const storeData = () => {
    if (memo !== "") {
      handleModal();
      setFeedback("store");
      setFeedbackOpen(true);
    } else {
      setFeedback("empty");
      setFeedbackOpen(true);
    }
  };
  const deleteData = () => {
    if (memo !== "") {
      handleModal();
      setFeedback("delete");
      setFeedbackOpen(true);
    } else {
      setFeedback("empty");
      setFeedbackOpen(true);
    }
  };
  const changeData = () => {
    if (memo !== "") {
      handleModal();
      setFeedback("change");
      setFeedbackOpen(true);
    } else {
      setFeedback("empty");
      setFeedbackOpen(true);
    }
  };

  return (
    <>
      <Container>
        {mode === "store" ? (
          <StoreButton onClick={storeData}>저장</StoreButton>
        ) : mode === "change" ? (
          <>
            <ChangeButton color="#e74c3b" onClick={deleteData}>
              삭제
            </ChangeButton>
            <ChangeButton color="#3fc176" onClick={changeData}>
              수정
            </ChangeButton>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Button;
