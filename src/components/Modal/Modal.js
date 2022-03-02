import React, { useState } from "react";
import styled from "styled-components";
import Text from "./Text";
import Memo from "./Memo";
import Button from "./Button";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Container = styled.section`
  width: 400px;
  height: 500px;
  position: fixed;
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

const Modal = ({ data, mode, setModalOpen, setFeedback, setFeedbackOpen }) => {
  // 상위 요소에서 modalOpen, setModalOpen, setFeedBack을 props로 내려 받아야 합니다.

  const [memo, setMemo] = useState("");

  const handleModal = () => {
    setModalOpen(false);
  };

  const makeMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);

    let object = {
      id: temp.length,
      name: data.fcNm,
      address: data.fcAddr,
      phoneNum: data.ref1,
      memo: memo,
    };

    temp.push(object);
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
  };
  const deleteMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);
    temp.splice([temp.id], 1);
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
  };
  const changeMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);
    let object = {
      id: temp.length,
      name: data.fcNm,
      address: data.fcAddr,
      phoneNum: data.ref1,
      memo: memo,
    };
    temp[temp.id] = object;
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
  };

  return (
    <>
      <Wrapper onClick={handleModal}>
        <Container onClick={(e) => e.stopPropagation()}>
          <Text title="이름" data={data.fcNm} />
          <Text title="주소" data={data.fcAddr} />
          <Text title="연락처" data={data.ref1} />
          <Memo title="메모" memo={memo} setMemo={setMemo} />
          <Button
            mode={mode}
            handleModal={handleModal}
            memo={memo}
            setFeedback={setFeedback}
            setFeedbackOpen={setFeedbackOpen}
            makeMemo={makeMemo}
            deleteMemo={deleteMemo}
            changeMemo={changeMemo}
          />
          {/* Button 태그의 mode props로 분기를 줬습니다.
                "store" -> 저장폼 
                "change" -> 수정폼 */}
        </Container>
      </Wrapper>
    </>
  );
};

export default Modal;
