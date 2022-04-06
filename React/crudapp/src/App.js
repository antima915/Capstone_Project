import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import AddUser from "./Components/User/AddUser";
import EditUser from "./Components/User/EditUser";
import ListUser from "./Components/User/ListUser";

function App() {

  // const {isLogged} = useSelector( (state) => state);
  const localData =localStorage.getItem('token');
  return (
    <div className="container">
      {localData ? <Header/> : ""}
      {/* {!isLogged ? <Login/> : ""} */}
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/list" element={<ListUser/>}/>
        <Route path = "/create" element={<AddUser/>}/>
        <Route path = "/edit/:id" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
