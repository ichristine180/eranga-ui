import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveLdoc } from  "../../redux/Public";

const AddLdoc = (props) => {
  return (
    <Modal {...props} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Tanga Itangazo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form {...props} />
      </Modal.Body>
    </Modal>
  );
};

const Form = (props) => {
  const [ownerMobile, setOwnerMobile] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerFname, setOwnerFname] = useState("");
  const [ownerLName, setOwnerLname] = useState("");
  const [description, setDescription] = useState("");
  const [docName, setDocName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const saveHandler = () => {
    save(
      ownerEmail,
      ownerMobile,
      docName,
      ownerFname,
      ownerLName,
      description,
      props.onHide,
      setError,
      dispatch
    );
  };
  return (
    <>
      <p className="text-danger text-center">{error}</p>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Owner First name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={ownerFname}
          onChange={(e) => setOwnerFname(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          izina ari kubyangombwa wataye.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Owner Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={ownerLName}
          onChange={(e) => setOwnerLname(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          izina ari kubyangombwa wataye.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Owner Phone number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={ownerMobile}
          onChange={(e) => setOwnerMobile(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          placeholder="Sobanura neza aho wayitoye"
          id="floatingTextarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Document name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocName(e.target.value);
          }}
        />
      </div>
      <Button variant="secondary" onClick={() => props.onHide()}>
        Cancel
      </Button>
      <Button variant="primary pull-right" onClick={() => saveHandler()}>
        Send
      </Button>
    </>
  );
};

export default AddLdoc;

const save = (
  owner_email,
  owner_mobile,
  doc_name,
  owner_first_name,
  owner_last_name,
  description,
  onHide,
  setError,
  dispatch
) => {
  if (
    !owner_first_name ||
    !owner_last_name ||
    !description ||
    !doc_name ||
    !owner_email ||
    !owner_mobile
  )
    setError("All fields are required");
  else {
    dispatch(
      saveLdoc({
        doc_name,
        owner_first_name,
        owner_last_name,
        owner_mobile,
        description,
        owner_email,
      })
    );
    onHide();
  }
};
