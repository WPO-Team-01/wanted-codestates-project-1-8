import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetContentsQuery(pageNum);

  if (!isLoading) {
    console.log(JSON.parse(data));
  }

  return <div className="App">Hello!</div>;
}

export default App;
