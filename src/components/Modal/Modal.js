import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import Memo from "./Memo";
import Button from "./Button";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.section`
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 1;
`;

const Modal = ({ data, setModalOpen, setFeedback, setFeedbackOpen }) => {
  // 상위 요소에서 modalOpen, setModalOpen, setFeedBack을 props로 내려 받아야 합니다.

  const [memo, setMemo] = useState("");

  const handleModal = () => {
    setModalOpen(false);
  };
  console.log(data);
  return (
    <>
      <Wrapper onClick={handleModal} />
      <Container>
        <Text title="이름" data={data.fcNm} />
        <Text title="주소" data={data.fcAddr} />
        <Text title="연락처" data={data.ref1} />
        <Memo title="메모" memo={memo} setMemo={setMemo} />
        <Button
          mode="change"
          handleModal={handleModal}
          memo={memo}
          setFeedback={setFeedback}
          setFeedbackOpen={setFeedbackOpen}
        />
        {/* Button 태그의 mode props로 분기를 줬습니다.
                "store" -> 저장폼 
                "change" -> 수정폼 */}
      </Container>
    </>
  );
};

export default Modal;
