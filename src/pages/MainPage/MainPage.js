import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const SearchOptions = [
  {
    key: 1,
    value: "name",
    name: "이름",
  },
  {
    key: 2,
    value: "address",
    name: "주소",
  },
  {
    key: 3,
    value: "memo",
    name: "메모",
  },
];

const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShowDataListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 100%;
  width: 35px;
  height: 35px;

  cursor: pointer;
`;

const SearchButton = styled.div`
  cursor: pointer;
  border: solid 1px black;
`;

const MainPage = () => {
  const searchInputRef = useRef("");
  const currentSelectRef = useRef("");

  useEffect(() => {
    const getDataList = localStorage.getItem('myData');


  }, []);


  const handleSearchClick = () => {
      console.log(searchInputRef.current.value.trim(), currentSelectRef.current.value);

  };

  const handleShowDataListClick = () => {
    // 전체 조회 Link
  };

  return (
    <div>
      <SearchForm>
        <select ref={currentSelectRef}>
          {SearchOptions.map((elem) => (
            <option key={elem.key} value={elem.value}>
              {elem.name}
            </option>
          ))}
        </select>
        <input ref={searchInputRef} placeholder="검색어를 입력해주세요." />
        <SearchButton onClick={handleSearchClick}>🔍</SearchButton>
      </SearchForm>
      <div>휴양지 목록</div>
      <footer>
        <ShowDataListButton onClick={handleShowDataListClick}>➕</ShowDataListButton>
      </footer>
    </div>
  );
};

export default MainPage;
