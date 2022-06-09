import DataTable from "./components/Table";
import UserPortfolio from "./components/UserPortfolio";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DataTable />} />
      <Route path="/:name" element={<UserPortfolio />} />
    </Routes>
  );
}

export default App;
