import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage, ForestListPage } from "./pages";

import { useGetContentsQuery } from "./store/query/ForestApi";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route
            path="/forestList"
            element={<ForestListPage></ForestListPage>}
          ></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
