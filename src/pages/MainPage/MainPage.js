import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  }, [myForestLists]);

  // 검색 시 보여줄 List 만드는 함수
  const handleSearchClick = () => {
    const targetForestLists = JSON.parse(localStorage.getItem("myForestLists"));
    const selectType = currentSelectRef.current.value;
    const searchInput = searchInputRef.current.value.trim();

    const searchMyForestLists = targetForestLists.filter((elem) => {
      if (elem[selectType].includes(searchInput)) {
        return true;
      }
    });

    setMyForestLists(searchMyForestLists);
  };

  // const makeList = () => {
  //   let temp = localStorage.getItem("myForestLists");
  //   temp = JSON.parse(temp);

  //   let object = {
  //     id: "1",
  //     name: "테스트 이름^^",
  //     address: "테스트 주소%%",
  //     phoneNum: "000-000-0000$$",
  //     memo: "테스트 메모@@",
  //   };

  //   temp.push(object);
  //   localStorage.setItem("myForestLists", JSON.stringify(temp));
  //   setMyForestLists(temp);
  // };

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
        <Link to="/">
          <ShowDataListButton onClick={handleShowDataListClick}>
            ➕
          </ShowDataListButton>
        </Link>

        <ShowDataListButton onClick={makeList}>MAKE LIST</ShowDataListButton>
      </footer>
    </div>
  );
};

export default MainPage;
