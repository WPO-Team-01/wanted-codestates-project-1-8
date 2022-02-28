import styled from "styled-components";
import "./App.css";
import ForestList from "./pages/ForestList/ForestList";

const Layout = styled.div`
  margin: 0 auto;
  max-width: 400px;
  border: 1px solid black;
`;

function App() {
  return (
    <Layout>
      <ForestList />
    </Layout>
  );
}

export default App;
