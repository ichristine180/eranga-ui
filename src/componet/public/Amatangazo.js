import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLdoc } from  "../../redux/Public";
import { Intro, Itangazo } from "./Ibyarangishijwe";
import AddLdoc from "./AddLdoc";
const Amatangazo = () => {
  const dispatch = useDispatch();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  useEffect(() => {
    dispatch(getLdoc());
  }, [dispatch]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="col-md-8">
        <Intro setShow={setShow} title="Tanga Itangazo"/>
        <p className="title">Amatangazo yabataye Ibyangombwa</p>
        <div className="row">
          {publicDoc.ldoc &&
            publicDoc.ldoc.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  <Card item={item} />
                </React.Fragment>
              );
            })}

          {publicDoc.ldoc.length === 0 && (
            <p className="alert alert-warning">
              Ntamatangazo abashize kuboneka! <Itangazo setShow={setShow}/>
            </p>
          )}
        </div>
        <AddLdoc show={show} onHide={handleClose} />
      </div>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div className="card col-3   mb-5">
      <div className="card-body">
        <h4>Document: {item.doc_name}</h4>
        <h5 className="card-title">
          Owner: {item.owner_first_name} {item.owner_last_name}
        </h5>
        <span >Andi makuru</span>
        <p className="card-text">
         {item.description}</p>
      </div>
    </div>
  );
};

export default Amatangazo;
