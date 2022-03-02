import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage, ForestListPage } from "./pages";

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
