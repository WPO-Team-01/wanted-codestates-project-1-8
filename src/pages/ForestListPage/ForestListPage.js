import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import Feedback from "../../components/FeedBack/FeedBack";
import { useGetContentsQuery } from "../../store/query/ForestApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SavedForestCard from "../SavedForestLists/SavedForestCard";
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

const ListBtn = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
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
      console.warn(1111, queryResult.isFetching);
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
          <li key={`${forest.fcNm}-${index}`}>
            <ListBtn onClick={() => onClickList(forest)}>
              <SavedForestCard
                card={{
                  fcNm: forest.fcNm,
                  name: forest.fcNm,
                  address: forest.fcAddr,
                  phoneNum: forest.ref1,
                }}
              ></SavedForestCard>
            </ListBtn>
          </li>
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
