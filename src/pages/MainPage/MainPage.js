import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SavedForestLists from "../SavedForestLists/SavedForestLists";
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

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 667px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid black;
`;
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
  const [myForestLists, setMyForestLists] = useState(
    JSON.parse(localStorage.getItem("myForestLists"))
  );
  const searchInputRef = useRef("");
  const currentSelectRef = useRef("");

  useEffect(() => {
    if (!myForestLists) {
      localStorage.setItem("myForestLists", JSON.stringify([]));
      setMyForestLists(JSON.parse(localStorage.getItem("myForestLists")));
    }
  }, []);

  // 검색 시 보여줄 List 만드는 함수
  const handleSearchClick = () => {
    console.log(
      searchInputRef.current.value.trim(),
      currentSelectRef.current.value
    );
  };

  //전체 조회 List 보여주기
  const handleShowDataListClick = () => {};

  return (
    <Wrapper>
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
      {myForestLists ? (
        <SavedForestLists myForestLists={myForestLists} />
      ) : (
        <div></div>
      )}
      <footer>
        <ShowDataListButton onClick={handleShowDataListClick}>
          ➕
        </ShowDataListButton>
      </footer>
    </Wrapper>
  );
};

export default MainPage;
