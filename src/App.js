import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
import Modal from "./components/Modal/Modal";
import Feedback from "./components/FeedBack/FeedBack";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetContentsQuery(pageNum);
  const [modalOpen, setModalOpen] = useState(true);
  const [feedback, setFeedback] = useState("store");
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  if (!isLoading) {
    console.log(data);
  }

  return (
    <div className="App">
      Hello!
      <Modal
        data={data.response[0]}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setFeedback={setFeedback}
        setFeedbackOpen={setFeedbackOpen}
      />
      <Feedback
        feedback={feedback}
        feedbackOpen={feedbackOpen}
        setFeedbackOpen={setFeedbackOpen}
      />
    </div>
  );
}

export default App;
