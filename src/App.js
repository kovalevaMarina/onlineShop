import "./App.scss";
import Layout from "./components/Layout/Layout";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
