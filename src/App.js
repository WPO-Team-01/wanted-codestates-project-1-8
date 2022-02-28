import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
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


  return <div className="App">
    <MainPage />
  </div>;
}

export default App;
