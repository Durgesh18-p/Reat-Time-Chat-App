import Join from "./components/Join";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route to="/" exact element={<Join />} />
        <Route to="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
