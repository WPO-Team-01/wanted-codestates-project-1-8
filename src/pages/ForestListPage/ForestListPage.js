import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useGetContentsQuery } from "../../store/query/ForestApi";

const numOfRows = 10;

// fcNm 이름, fcAddr 주소, ref1 연락처
const ForestListPage = () => {
  const [scrollPage, setScrollPage] = useState(0);
  const [scrollList, setScrollList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
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
      <div>휴양림 목록</div>
      {isShowModal && (
        <Modal
          data={selectedData}
          mode="store"
          setModalOpen={setIsShowModal}
          setFeedback={(e) => console.log(e)}
          setFeedbackOpen={(e) => console.log(e)}
        ></Modal>
      )}
      <ul>
        {scrollList.map((forest, index) => (
          <li
            key={`${forest.fcNm}-${index}`}
            style={{ height: "200px", border: "1px solid black" }}
          >
            <button onClick={() => onClickList(forest)}>
              <span>{index + 1}</span>
              <span>{forest.fcNm}</span>
              <span>{forest.fcAddr}</span>
              <span>{forest.ref1}</span>
            </button>
          </li>
        ))}
        {!isLoading && !isEnded && <div ref={setObservationTarget}>더보기</div>}
        {isLoading && !isEnded && <div>로딩중</div>}
      </ul>
    </>
  );
};

export default ForestListPage;
