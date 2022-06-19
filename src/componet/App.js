import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Ldoc from "./admin/Ldoc";
import Amatangazo from "./public/Amatangazo";
import "./App.css";
import Home from "./public/Home";
import Ibyarangishijwe from "./public/Ibyarangishijwe";
function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="ibyarangishijwe" element={<Ibyarangishijwe />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin/ldoc" element={<Ldoc />} />
      <Route path="Amatangazo" element={<Amatangazo />} />
    </Routes>
    </>
  );
}

export default App;
