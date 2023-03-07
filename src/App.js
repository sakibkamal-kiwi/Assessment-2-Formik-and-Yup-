import GoogleTranslate from "./pages/GoogleTranslate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Googlelogin from "./pages/Googlelogin";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./Protected";
// import Datepicker from "./Datepicker";
//import Parent from './context/Parent';
import Component1 from "./ContextApi/Component1";
//import RegisterData from './pages/RegisterData';
import HigherOrderc from "./context/HigherOrderc";

function App() {
  const str = "?search=Tides%20&%20Storm%20Surge";
  const updatedText = decodeURI(str);

  console.log(updatedText); // ?search= Tides & Storm Surge  => Tides & Storm Surge
  return (

    <div>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route index element={<Login />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/login" element={<Login />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/googlelogin" element={<Googlelogin />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/context" element={<Component1 />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/higherorder" element={<HigherOrderc />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/translate" element={<GoogleTranslate />} />{" "}
        </Routes>
        {/* <Routes> <Route path='/home' element= {<Protected Component ={Home} />} /> </Routes> */}
        <Routes>
          {" "}
          <Route path="/register" element={<Register />} />{" "}
        </Routes>
        <Routes>
          {" "}
          <Route path="/user" element={<Protected />}>
            <Route path="home" element={<Home />} />{" "}
          </Route>
        </Routes>
        {/* <Routes> <Route path='/registerdata' element={<Protected Component ={RegisterData} />} /> </Routes> */}
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

