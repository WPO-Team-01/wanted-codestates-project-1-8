import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "../../components/Modal/Modal";
import SavedForestLists from "../SavedForestLists/SavedForestLists";
import FeedBack from "../../components/FeedBack/FeedBack";

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
  overflow-y: scroll;
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
  //
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("store");
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  //
  const [selectedData, setSelectedData] = useState(null);

  console.log(selectedData);

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

  console.log(selectedData);
  console.log(modalOpen);
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
        <SavedForestLists
          setModalOpen={setModalOpen}
          setSelectedData={setSelectedData}
          myForestLists={myForestLists}
        />
      ) : (
        <div></div>
      )}
      <footer>
        <Link to="/forestList">
          <ShowDataListButton>➕</ShowDataListButton>
        </Link>
      </footer>
      {modalOpen ? (
        <Modal
          data={{
            id: selectedData.id,
            fcNm: selectedData.name,
            fcAddr: selectedData.address,
            ref1: selectedData.phoneNum,
            memo: selectedData.memo,
          }}
          mode="change"
          setModalOpen={setModalOpen}
          setFeedback={setFeedback}
          setFeedbackOpen={setFeedbackOpen}
        />
      ) : null}
      {feedbackOpen ? (
        <FeedBack
          feedback={feedback}
          feedbackOpen={feedbackOpen}
          setFeedbackOpen={setFeedbackOpen}
        />
      ) : null}
    </Wrapper>
  );
};

export default MainPage;
