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
`;

const ListWrap = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardContainer = styled.div`
  background-color: #f2f2f2;
  margin: 15px 0;
  padding: 10px;
  border-radius: 5px;
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
  left: 0.5rem;
  top: 0.5rem;
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
  const [scrollPage, setScrollPage] = useState(0);
  const [scrollList, setScrollList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowFeedback, setIsShowFeedback] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const queryResult = useGetContentsQuery(scrollPage);

  useEffect(() => {
    if (!queryResult.isLoading && isLoading) {
      setScrollList(scrollList.concat(queryResult.data.response));
      if (queryResult.data.response.length < numOfRows) setIsEnded(true);
      setIsLoading(false);
    }
  }, [queryResult]);

  const getMoreItem = async () => {
    setIsLoading(true);
    setScrollPage(scrollPage + 1);
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
          <li key={`${forest.fcNm}-${index}`}>
            <CardContainer onClick={() => onClickList(forest)}>
              <CardTitle>⛰ {forest.fcNm}</CardTitle>
              <CardInfo>📪 {forest.fcAddr}</CardInfo>
              <CardInfo>📞 {forest.ref1}</CardInfo>
            </CardContainer>
          </li>
        ))}
        <Btn onClick={() => navigate(-1)}>&#8678;</Btn>
        {isShowModal && (
          <Modal
            data={selectedData}
            mode="store"
            setModalOpen={setIsShowModal}
            setFeedback={(e) => console.log(e)}
            setFeedbackOpen={() => setIsShowFeedback(true)}
          ></Modal>
        )}
        {!isLoading && !isEnded && <div ref={setObservationTarget}>더보기</div>}
        {isLoading && !isEnded && <Loader></Loader>}
        <Feedback
          feedback="store"
          feedbackOpen={isShowFeedback}
          setFeedbackOpen={setIsShowFeedback}
        ></Feedback>
      </ListWrap>
    </>
  );
};

export default ForestListPage;
