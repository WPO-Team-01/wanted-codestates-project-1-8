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

const Modal = ({
  data,
  mode,
  selectedData,
  setModalOpen,
  setFeedback,
  setFeedbackOpen,
  setMyForestLists,
}) => {
  // 상위 요소에서 modalOpen, setModalOpen, setFeedBack을 props로 내려 받아야 합니다.

  const [memo, setMemo] = useState(data.memo !== "" ? data.memo : "");
  console.log(selectedData);
  const handleModal = () => {
    setModalOpen(false);
  };

  const makeMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);

    let object = {
      id: Math.random(),
      name: data.fcNm,
      address: data.fcAddr,
      phoneNum: data.ref1,
      memo: String(memo),
    };

    temp.push(object);
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
  };
  const deleteMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);

    let deleteIndex;
    for (let i = 0; i < temp.length; i++) {
      if (selectedData.id === temp[i].id) {
        deleteIndex = i;
      }
    }
    console.log(deleteIndex);
    temp.splice(deleteIndex, 1);
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
    setMyForestLists(temp);
  };
  console.log(memo);
  const changeMemo = () => {
    let temp = localStorage.getItem("myForestLists");
    temp = JSON.parse(temp);
    console.log(temp);
    let object = {
      id: data.id,
      name: data.fcNm,
      address: data.fcAddr,
      phoneNum: data.ref1,
      memo: memo,
    };
    let changeIndex;
    for (let i = 0; i < temp.length; i++) {
      if (selectedData.id === temp[i].id) {
        changeIndex = i;
      }
    }
    console.log(changeIndex);
    temp[changeIndex] = object;
    console.log(temp);
    localStorage.setItem("myForestLists", JSON.stringify(temp));
    setMyForestLists(temp);
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
