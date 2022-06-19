import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveFdoc } from "../../redux/Public";

const AddFdoc = (props) => {
  return (
    <Modal {...props} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Rangisha Ibyangombwa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form {...props} />
      </Modal.Body>
    </Modal>
  );
};

const Form = (props) => {
  const [founderFname, setFounderFname] = useState("");
  const [founderLName, setFounderLname] = useState("");
  const [founderMobile, setFounderMobile] = useState("");
  const [ownerFname, setOwnerFname] = useState("");
  const [ownerLName, setOwnerLname] = useState("");
  const [description, setDescription] = useState("");
  const [docImage, setDocImage] = useState({});
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const saveHandler = () => {
    save(
      founderFname,
      founderLName,
      founderMobile,
      ownerFname,
      ownerLName,
      description,
      docImage,
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
          First name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={founderFname}
          onChange={(e) => setFounderFname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Last name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={founderLName}
          onChange={(e) => setFounderLname(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Phone number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={founderMobile}
          onChange={(e) => setFounderMobile(e.target.value)}
        />
      </div>
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
          izina ari kubyangombwa watoye.
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
          izina ari kubyangombwa watoye.
        </div>
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
          Document Picture
        </label>
        <input
          //enctype="multipart/form-data"
          type="file"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => {
            setDocImage(e.target.files[0]);
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

export default AddFdoc;

const save = (
  founderFname,
  founderLName,
  founderMobile,
  ownerFname,
  ownerLName,
  description,
  docImage,
  onHide,
  setError,
  dispatch
) => {
  if (
    !founderFname ||
    !founderLName ||
    !founderMobile ||
    !ownerFname ||
    !ownerLName ||
    !description ||
    !docImage
  )
    setError("All fields are required");
  else {
    dispatch(
      saveFdoc({
        doc_image: docImage,
        founder_first_name: founderFname,
        founder_last_name: founderLName,
        found_mobile: founderMobile,
        description: description,
        owner_last_name: ownerLName,
        owner_first_name: ownerFname,
      })
    );
    onHide();
  }
};
