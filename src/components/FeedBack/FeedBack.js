import React from "react";
import styled from "styled-components";

const Background = styled.section`
  position: fixed;
  display: ${({ feedbackOpen }) => (feedbackOpen ? "flex" : "none")};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
  background-color: ${({ feedback }) =>
    feedback === "empty" ? "#e74b3c" : "#3fc176"};
  transform: ${({ feedbackOpen }) =>
    feedbackOpen
      ? `translate(${window.innerWidth - 300}px, ${window.innerHeight / 2}px)`
      : `translate(${window.innerWidth}px, ${window.innerHeight / 2}px)`};
  transition: 0.3s;
  z-index: 3;
`;

const Feedback = ({ feedback, feedbackOpen, setFeedbackOpen }) => {
  // 상위 요소에서 feebackOpen,setFeebackOpen props로 내려 받아야 합니다.
  let notice;

  const closeFeedBack = () => {
    setFeedbackOpen(false);
  };

  if (feedback === "store") {
    notice = "저장이 완료되었습니다.";
  } else if (feedback === "change") {
    notice = "수정이 완료되었습니다.";
  } else if (feedback === "delete") {
    notice = "삭제가 완료되었습니다.";
  } else if (feedback === "empty") {
    notice = "메모를 입력해주세요.";
  }

  return (
    <>
      <Background onClick={closeFeedBack} feedbackOpen={feedbackOpen} />
      <Container feedback={feedback} feedbackOpen={feedbackOpen}>
        {notice}
      </Container>
    </>
  );
};

export default Feedback;
