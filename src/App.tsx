import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import {TaskMaster}  from "./pages/TaskMaster/TaskMaster";
import { Home } from "./pages/Home/Home";
import { ConnectHub } from "./pages/ConnectHub/ConnectHub";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/TaskMaster" element={<TaskMaster />} />
        <Route path="/" element={<Home />} />
        <Route path="/ConnectHub" element={<ConnectHub />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;