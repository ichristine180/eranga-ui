import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFdoc } from "../redux/Public";
import AddFdoc from "./addFdocModal";
import { Buffer } from "buffer";

const Amatangazo = () => {
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
          lorsdfsdfsdfsdfdfgggdfgdf
          E-ranga ni urubuga ruhuza uwataye ibyangombwa na nyir'i ibyangombwa,
          aho rwemerera uwabitaye kuba yatanga itangazo, ndetse nuwabitoye kuba
          yabirangisha.
        </p>

        <span className="link" onClick={() => setShow(true)}>
          {" "}
          Rangisha
        </span>
        <Itangazo />
      </div>
      <p className="title">Itangazo ku byangombwa wataye</p>
      <div className="row">
        {/* {publicDoc.fdoc &&
          publicDoc.fdoc.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Card item={item} />
              </React.Fragment>
            );
          })} */}

        {publicDoc.fdoc.length == 0 && (
          <p className="alert alert-warning">
            Ntabyangombwa bibashije kuboneka! <Itangazo />
          </p>
        )}
      </div>
      <AddFdoc show={show} onHide={handleClose} />
    </div>
  );
};

// const Card = ({ item }) => {
//   let imgSrc;
//   if (item.doc_image)
//     imgSrc = new Buffer.from(item.doc_image.data.data).toString("base64");

//   return (
//     <div className="card col-3 mt-5 mx-5">
//       {imgSrc && (
//         <img
//           src={`data:image/png;base64,${imgSrc}`}
//           className="card-img-top doc-image"
//           alt="..."
//         />
//       )}
//       <div className="card-body">
//         <h5 className="card-title">
//           Owner: {item.owner_first_name} {item.owner_last_name}
//         </h5>
//         <p className="card-text">{item.description}</p>
//         <button
//           className="btn btn-primary"
//           onClick={() => {
//             console.log(item._id);
//           }}
//         >
//           {" "}
//           Reba numero zu wabitoye!
//         </button>
//       </div>
//     </div>
//   );
// };

const Itangazo = (props) => {
  return (
    <span
      className="link"
      onClick={() => {
        console.log("got here");
      }}
    >
      {" "}
      Tanga-Itangazo
    </span>
  );
};
export default Amatangazo;
