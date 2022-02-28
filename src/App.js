import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
import ForestListPage from "./pages/ForestListPage/ForestListPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetContentsQuery(pageNum);

  if (!isLoading) {
    console.log(data);
  }

  return (
    <div className="App">
      <ForestListPage></ForestListPage>
    </div>
  );
}

export default App;
