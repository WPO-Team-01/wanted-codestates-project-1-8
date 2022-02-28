import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import React, { useState } from "react";

const numOfRows = 10;

// fcNm 이름, fcAddr 주소, ref1 연락처
const ForestListPage = () => {
  const [scrollPage, setScrollPage] = useState(1);
  const [scrollList, setScrollList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const getMoreItem = async () => {
    setIsLoading(true);

    const { response } = await fetch(
      `https://corsanywhere12345.herokuapp.com/https://www.chungbuk.go.kr/openapi-json/pubdata/pubMapForest.do?pageNo=${scrollPage}`
    )
      .then((response) => response.json())
      .then((response) => JSON.parse(response));

    if (response.length < numOfRows) setIsEnded(true);

    setScrollPage(scrollPage + 1);
    setScrollList(scrollList.concat(response));
    setIsLoading(false);
  };

  const setObservationTarget = useInfiniteScroll(getMoreItem);

  return (
    <>
      <div>휴양림 목록</div>
      <ul>
        {scrollList.map((forest, index) => (
          <li
            key={`${forest.fcNm}-${index}`}
            style={{ height: "200px", border: "1px solid black" }}
          >
            <span>{index + 1}</span>
            <span>{forest.fcNm}</span>
            <span>{forest.fcAddr}</span>
            <span>{forest.ref1}</span>
          </li>
        ))}
        {!isLoading && !isEnded && <div ref={setObservationTarget}>더보기</div>}
        {isLoading && !isEnded && <div>로딩중</div>}
      </ul>
    </>
  );
};

export default ForestListPage;
