import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Ibyarangishijwe from "./Ibyarangishijwe";
function App() {
  return (
    <>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="ibyarangishijwe" element={<Ibyarangishijwe />} />
      {/* <Route path="conceal" element={<Conceal />} />
      <Route path="signup" element={<SignUp />} /> */}
    </Routes>
    </>
  );
}

export default App;
