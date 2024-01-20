
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import ViewUser from "./component/ViewUser";

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:employeeId" element={<EditUser />} />
          <Route exact path="/viewuser/:employeeId" element={<ViewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
