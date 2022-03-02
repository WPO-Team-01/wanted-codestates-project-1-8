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
  background-color: ${({ memo }) => (memo === "" ? "#339c61" : "#3fc176")};
  border-radius: 5px;
  cursor: pointer;
`;

const ChangeButton = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ memo, color }) =>
    memo === "" ? (color === "#e74c3b" ? "#ae392f" : "#339c61") : color};
  border-radius: 5px;
  cursor: pointer;
`;

const Button = ({
  mode,
  handleModal,
  memo,
  setFeedback,
  setFeedbackOpen,
  makeMemo,
  deleteMemo,
  changeMemo,
}) => {
  const storeData = () => {
    if (memo.trim()) {
      handleModal();
      setFeedback("store");
      setFeedbackOpen(true);
      makeMemo();
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
      deleteMemo();
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
      changeMemo();
    } else {
      setFeedback("empty");
      setFeedbackOpen(true);
    }
  };

  return (
    <>
      <Container>
        {mode === "store" ? (
          <StoreButton memo={memo} onClick={storeData}>
            저장
          </StoreButton>
        ) : mode === "change" ? (
          <>
            <ChangeButton color="#e74c3b" memo={memo} onClick={deleteData}>
              삭제
            </ChangeButton>
            <ChangeButton color="#3fc176" memo={memo} onClick={changeData}>
              수정
            </ChangeButton>
          </>
        ) : null}
      </Container>
    </>
  );
};

export default Button;
