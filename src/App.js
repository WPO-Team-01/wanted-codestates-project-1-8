import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
import SavedForestLists from "./pages/SavedForestLists/SavedForestLists";
import styled from "styled-components";
import MainPage from "./pages/MainPage/MainPage";

const Layout = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

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

  return (
    <Layout>
      <MainPage>
        {data?.response ? (
          <SavedForestLists list={data.response} />
        ) : (
          <div></div>
        )}
      </MainPage>
    </Layout>
  );
}

export default App;
