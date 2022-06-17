import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Ldoc from "./admin/Ldoc";
import "./App.css";
import Home from "./Home";
import Ibyarangishijwe from "./Ibyarangishijwe";
function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="ibyarangishijwe" element={<Ibyarangishijwe />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin/ldoc" element={<Ldoc />} />
      {/* <Route path="signup" element={<SignUp />} /> */}
    </Routes>
    </>
  );
}

export default App;
