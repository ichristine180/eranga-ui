import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFdoc } from "../redux/Public";
import AddFdoc from "./addFdocModal";

const Ibyarangishijwe = () => {
  const dispatch = useDispatch();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  useEffect(() => {
    dispatch(getFdoc("submitted"));
  }, [dispatch]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="container">
      <div className="alert alert-primary mt-5">
        <h4>Incamake kuri E-RANGA</h4>
        <p>
          E-ranga ni urubuga ruhuza uwataye ibyangombwa na nyir'i ibyangombwa,
          aho rwemerera uwabitaye kuba yatanga itangazo, ndetse nuwabitoye kuba
          yabirangisha.
        </p>

        <span className="link" onClick={() => setShow(true)}>
          {" "}
          Rangisha
        </span>
        <span
          className="link"
          onClick={() => {
            console.log("got here");
          }}
        >
          {" "}
          Tanga Itangazo
        </span>
      </div>
      <p className="title">Ibyangombwa byatoraguwe</p>
      <div className="row">
        {publicDoc.fdoc &&
          publicDoc.fdoc.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Card item={item} />
              </React.Fragment>
            );
          })}
      </div>
      <AddFdoc show={show} onHide={handleClose} />
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="card col-3 mt-5 mx-5">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          Owner: {item.owner_first_name} {item.owner_last_name}
        </h5>
        <p className="card-text">{item.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log(item._id);
          }}
        >
          {" "}
          Reba numero zu wabitoye!
        </button>
      </div>
    </div>
  );
};

export default Ibyarangishijwe;
