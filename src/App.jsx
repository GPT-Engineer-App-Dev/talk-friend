import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Chat from "./pages/Chat.jsx";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={username ? <Chat username={username} /> : <Login onLogin={setUsername} />} />
      </Routes>
    </Router>
  );
}

export default App;