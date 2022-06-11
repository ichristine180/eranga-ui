import { Button, Modal } from "react-bootstrap";

const AddFdoc = (props) => {
  return (
    <Modal {...props} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Rangisha Ibyangombwa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.onHide()}>
          Cancel
        </Button>
        <Button variant="primary">Send</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Form = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          First name
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Last name
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Phone number
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Owner First name
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
        <div id="emailHelp" class="form-text">
          izina ari kubyangombwa watoye.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Owner Last name
        </label>
        <input type="text" class="form-control" id="exampleInputEmail1" />
        <div id="emailHelp" class="form-text">
          izina ari kubyangombwa watoye.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          placeholder="Sobanura neza aho wayitoye"
          id="floatingTextarea"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Document Picture
        </label>
        <input type="file" class="form-control" id="exampleInputPassword1" />
      </div>
    </form>
  );
};

export default AddFdoc;
