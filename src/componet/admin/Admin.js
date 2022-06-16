import { useSelector } from "react-redux";
import Home from "./Home";
import Login from "./login";

const Admin = () => {
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  return <>{!publicDoc.isLoggedIn ? <Login /> : <Home />}</>;
};

export default Admin;
