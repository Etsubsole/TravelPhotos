import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Header from "./component/Header";
import Signup from "./component/Signup"
import Home from "./component/Home";
import Auth from "./component/Auth";
import Contactus from "./component/Contactus";
import About from "./component/About";
import Comment from "./component/Comments";
import Myaccount from "./component/Myaccount";
import Admin from "./component/Admin";
import ManageUser from "./component/ManageUser";
import UserData from "./component/UserData";
import Posted from "./component/Posted";
import Detail from "./component/Detail";
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}>
          </Route>
          <Route  exact path="/home" element={<Home />}>
          </Route>
          <Route  exact path="/signup" element={<Signup />}>
          </Route>
          <Route  exact path="/auth" element={<Auth />}>
          </Route>
          <Route  exact path="/contactus" element={<Contactus />}>
          </Route>
          <Route  exact path="/about" element={<About />}>
          </Route>
          <Route  exact path="/comments" element={<Comment />}>
          </Route>
          <Route  exact path="/myaccount" element={<Myaccount />}>
          </Route>
          <Route  exact path="/admin" element={<Admin />}>
          </Route>
          <Route  exact path="/manageuser" element={<ManageUser />}>
          </Route>
          <Route  exact path="/userdata" element={<UserData />}>
          </Route>
          <Route  exact path="/posted" element={<Posted />}>
          </Route>
          <Route  exact path="/detail" element={<Detail />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;