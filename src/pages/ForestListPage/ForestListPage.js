import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Feedback from "../../components/FeedBack/FeedBack";
import { useGetContentsQuery } from "../../store/query/ForestApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const TitleBox = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  margin: 1rem;
`;

const ListWrap = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardContainer = styled.button`
  background-color: #f2f2f2;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5) inset;
  }
`;

const CardTitle = styled.div`
  font-weight: bold;
  margin: 5px 0;
`;

const CardInfo = styled.p`
  margin: 5px 0;
`;

const Btn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  left: 1rem;
  top: 1rem;
  background-color: #ddd;
  border-radius: 5px;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5) inset;
  }
`;

const numOfRows = 10;

const ForestListPage = () => {
  const navigate = useNavigate();
  const [scrollPage, setScrollPage] = useState(1);
  const [scrollList, setScrollList] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowFeedback, setIsShowFeedback] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [feedback, setFeedback] = useState("empty");
  const queryResult = useGetContentsQuery(scrollPage);

  const isEnded = queryResult.data?.response.length < numOfRows;

  useEffect(() => {
    if (!queryResult.isFetching) {
      setScrollList(scrollList.concat(queryResult.data.response));
    }
  }, [queryResult]);

  const getMoreItem = async () => {
    if (!queryResult.isFetching && !isEnded) {
      setScrollPage((prev) => prev + 1);
    }
  };

  const setObservationTarget = useInfiniteScroll(getMoreItem);

  const onClickList = (data) => {
    setIsShowModal(true);
    setSelectedData(data);
  };

  return (
    <>
      <TitleBox>휴양림 목록</TitleBox>
      <ListWrap>
        {scrollList.map((forest, index) => (
          <CardContainer
            key={`${forest.fcNm}-${index}`}
            onClick={() => onClickList(forest)}
          >
            <CardTitle>⛰ {forest.fcNm}</CardTitle>
            <CardInfo>📪 {forest.fcAddr}</CardInfo>
            <CardInfo>📞 {forest.ref1}</CardInfo>
          </CardContainer>
        ))}
        <Btn onClick={() => navigate(-1)}>&#8678;</Btn>
        {isShowModal && (
          <Modal
            data={selectedData}
            mode="store"
            setModalOpen={setIsShowModal}
            setFeedback={setFeedback}
            setFeedbackOpen={() => setIsShowFeedback(true)}
          ></Modal>
        )}
        {!queryResult.isFetching ? (
          !isEnded && <div ref={setObservationTarget}>더보기</div>
        ) : (
          <div ref={setObservationTarget}>로딩중</div>
        )}
        {queryResult.isFetching && !isEnded && <Loader></Loader>}
        <Feedback
          feedback={feedback}
          feedbackOpen={isShowFeedback}
          setFeedbackOpen={setIsShowFeedback}
        ></Feedback>
      </ListWrap>
    </>
  );
};

export default ForestListPage;
