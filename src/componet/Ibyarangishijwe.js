import React, { useEffect, useState } from "react";
import './Ibyarangishijwe.css'
import img1 from '../assets/doc.jpg'
import { useDispatch, useSelector } from "react-redux";
import { getFdoc, viewFoundContact } from "../redux/Public";
import AddFdoc from "./addFdocModal";
import { Buffer } from "buffer";
import { Button, Modal } from "react-bootstrap";
import { validateEmail } from "./admin/login";
const Ibyarangishijwe = () => {
  const dispatch = useDispatch();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  useEffect(() => {
    dispatch(getFdoc("published"));
  }, [dispatch]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  return (

    <div className="container-fluid d-flex justify-content-center">        
      <div className="col-md-8">
      <div className="container">
      <div className="alert alert-primary mt-5">
        <h4>Incamake kuri E-RANGA</h4>
        <p>
          E-ranga ni urubuga ruhuza uwataye ibyangombwa na nyir'i ibyangombwa,
          aho rwemerera uwabitaye kuba yatanga itangazo, ndetse nuwabitoye kuba
          yabirangisha. kurangisha icyangombwa yaba kuwagitoye cyangwa uwagitaye
          nubuntu, ariko kuwateye icyangombwa kugira ngo ubone numero zuwagitoye
          wishyura amafaranga 1000
        </p>
        <hr />
        <p className="p">
        E-ranga ni urubuga ruhuza uwataye ibyangombwa na nyir'i ibyangombwa,
          aho rwemerera uwabitaye kuba yatanga itangazo, ndetse nuwabitoye kuba
          yabirangisha. kurangisha icyangombwa yaba kuwagitoye cyangwa uwagitaye
          nubuntu, ariko kuwateye icyangombwa kugira ngo ubone numero zuwagitoye
          wishyura amafaranga 1000
        </p>
        
        
        <span className="link" onClick={() => setShow(true)}>
          {" "}
          Rangisha
        </span>
        <Itangazo />
      </div>
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

        {publicDoc.fdoc.length === 0 && (
          <p className="alert alert-warning">
            Ntabyangombwa bibashije kuboneka! <Itangazo />
          </p>
        )}
      </div>
      <AddFdoc show={show} onHide={handleClose} />
    </div>

     

        <div className="col-md-4 m-t-50">
            <div className='card text-center shadow'>
          <div className="overflow">
            <img src={img1} alt="Image" className='card-img-top' />
          </div>
          <div className="car text-dark">
            <h4 className="card-tie">E-ranga Document</h4>
            <p className="card-text text-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, beatae!
            </p>
          </div>
        </div>
        </div>

    </div>






  );
};

const Card = ({ item }) => {
  let imgSrc;
  if (item.doc_image)
    imgSrc = new Buffer.from(item.doc_image.data.data).toString("base64");
  const [show, setShow] = useState(false);
  return (
    <div className="card col-3 mt-5 mx-5">
      {imgSrc && (
        <img
          src={`data:image/png;base64,${imgSrc}`}
          className="card-img-top doc-image"
          alt="..."
        />
      )}
      <div className="card-body">
        <h5 className="card-title">
          Owner: {item.owner_first_name} {item.owner_last_name}
        </h5>
        <p className="card-text">{item.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            setShow(true);
          }}
        >
          {" "}
          Reba numero zu wabitoye!
        </button>
      </div>
      <ViewContact show={show} onHide={() => setShow(false)} id={item._id} />
    </div>
  );
};
const ViewContact = (props) => {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const send = () => {
    if (validate(mobile, email, setError)) {
      dispatch(
        viewFoundContact({
          owner_mobile: mobile,
          owner_email: email,
          id: props.id,
        })
      );
      props.onHide();
    }
  };
  return (
    <Modal {...props} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Kubona Numero zuwatoye ibyangombwa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <p className="text-danger text-center">{error}</p>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Amafaranga ugomba kwishyura
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              value="1000"
              disabled={true}
            />
          </div>
          <Button variant="secondary" onClick={() => props.onHide()}>
            Cancel
          </Button>
          <Button variant="primary pull-right" onClick={() => send()}>
            Send
          </Button>
        </>
      </Modal.Body>
    </Modal>
  );
};

const Itangazo = (props) => {
  return (
    <span
      className="link"
      onClick={() => {
        console.log("got here");
      }}
    >
      {" "}
      Tanga Itangazo
    </span>
  );
};

const validate = (mobile, email, setError) => {
  if (validateEmail(email, setError)) {
    if (
      (mobile.startsWith("078") ||
        mobile.startsWith("079") ||
        mobile.startsWith("073") ||
        mobile.startsWith("072")) &&
      mobile.length === 10
    ) {
      setError();
      return true;
    } else setError("Mobile number is not valid(07XXXXXXXX)");
  }
  return false;
};
export default Ibyarangishijwe;
