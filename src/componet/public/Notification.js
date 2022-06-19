import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear } from  "../../redux/Public";

const Notification = () => {
  const dispatch = useDispatch();
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (publicDoc.message) setShow(true);
    else setShow(false);
  }, [dispatch, publicDoc.message]);

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <p className="px-3 pt-2 mt-2 text-center">{publicDoc.message}</p>
      <div className="col">
        <button className="btn btn-primary pull-right mx-3 mb-2" onClick={() => dispatch(clear())}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default Notification;
