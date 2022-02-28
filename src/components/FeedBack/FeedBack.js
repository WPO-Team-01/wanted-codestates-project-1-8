import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Container = styled.div`
  position: absolute;
`;

const FeedBack = () => {
  // 상위 요소에서 feebackOpen,setFeebackOpen props로 내려 받아야 합니다.
  const [feebackOpen, setFeebackOpen] = useState(false);

  const handleFeedBack = () => {
    setTimeout(() => setFeebackOpen(false), 1000);
  };

  return (
    <>
      {feebackOpen ? (
        <>
          <Wrapper onClick={handleFeedBack}>
            <Container></Container>
          </Wrapper>
        </>
      ) : null}
    </>
  );
};

export default FeedBack;
