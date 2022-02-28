import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
import Modal from "./components/Modal/Modal";
import Feedback from "./components/FeedBack/FeedBack";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetContentsQuery(pageNum);
  const [modalOpen, setModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("store");
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  if (!isLoading) {
    console.log(data);
  }
  localStorage.setItem("data", JSON.stringify([]));

  function handleModal() {
    setModalOpen(!modalOpen);
  }
  /* 위 핸들러는 모달 작동 확인용입니다. 후에 삭제 예정 */

  return (
    <div className="App">
      Hello!
      <button onClick={handleModal}>모달 확인</button>
      <MainPage />
      {/* 버튼은 모달 작동 확인용입니다. 후에 삭제 예정 */}
      <Feedback
        feedback={feedback}
        feedbackOpen={feedbackOpen}
        setFeedbackOpen={setFeedbackOpen}
      />
      {modalOpen ? (
        <Modal
          data={data.response[0]}
          mode="store"
          // mode는 store, change 두가지 로 나눠져있습니다.
          modalOpen={modalOpen}
          feedback={feedback}
          feedbackOpen={feedbackOpen}
          setModalOpen={setModalOpen}
          setFeedback={setFeedback}
          setFeedbackOpen={setFeedbackOpen}
        />
      ) : null}
    </div>
  );
}

export default App;
