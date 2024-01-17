import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
