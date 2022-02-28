import { useState } from "react";
import "./App.css";
import { useGetContentsQuery } from "./store/query/ForestApi";
import SavedForestLists from "./pages/SavedForestLists/SavedForestLists";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

function App() {
  const [pageNum, setPageNum] = useState(1);
  const { data, isLoading } = useGetContentsQuery(pageNum);

  if (!isLoading) {
    console.log(data);
  }

  return (
    <Layout>
      {data?.response ? <SavedForestLists list={data.response} /> : <div></div>}
    </Layout>
  );
}

export default App;
