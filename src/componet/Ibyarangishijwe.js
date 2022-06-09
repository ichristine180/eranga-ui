import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFdoc } from "../redux/actions/publicAction";

const Ibyarangishijwe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFdoc());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="alert alert-primary mt-5">
        <h4>Incamake kuri E-RANGA</h4>
        E-ranga ni urubuga ruhuza uwataye ibyangombwa na nyir'i ibyangombwa, aho
        rwemerera uwabitaye kuba yatanga itangazo, ndetse nuwaaaaaaaaabitoye
        kuba yabirangisha.
      </div>
    </div>
  );
};

export default Ibyarangishijwe;
