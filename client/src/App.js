import TopBar from "./topbar/topbar";
import Home from "./pages/home/home";
import Task1 from "./pages/task1/task1";
import Task2 from "./pages/task2/task2";
import Task3 from "./pages/task3/task3";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
      </Routes>
    </Router>
  );
}

export default App;
