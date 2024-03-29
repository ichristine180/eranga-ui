import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buffer } from "buffer";
import { getAllFdoc, publish, reject } from "../../redux/Public";
const Home = () => {
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  const dispatch = useDispatch();
  useEffect(() => {
    if (publicDoc.isLoggedIn) dispatch(getAllFdoc());
  }, [dispatch, publicDoc.isLoggedIn]);

  return (
    <>
      <p className="title-admin mx-5 mt-5">Admin DashBoard --- Found Document</p>

      <div className="mt-5 mx-5">
        {publicDoc.allfdoc.length === 0 && (
          <p className="text-center mt-5">No data found</p>
        )}
        {publicDoc.allfdoc.length !== 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Founder Name</th>
                <th>Founder Mobile</th>
                <th>Doc Image</th>
                <th>Owner</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {publicDoc.allfdoc &&
                publicDoc.allfdoc.map((item, i) => {
                  let imgSrc;
                  if (item.doc_image)
                    imgSrc = new Buffer.from(item.doc_image.data.data).toString(
                      "base64"
                    );
                  return (
                    <tr key={i}>
                      <td>{new Date(item.at_created).toLocaleDateString()}</td>
                      <td>
                        {item.founder_first_name} {item.founder_last_name}
                      </td>
                      <td>{item.found_mobile}</td>
                      {!imgSrc && <td>No Image</td>}
                      {imgSrc && (
                        <td>
                          <img
                            src={`data:image/png;base64,${imgSrc}`}
                            alt="..."
                            className="img"
                          />
                        </td>
                      )}
                      <td>
                        {" "}
                        {item.owner_first_name} {item.owner_last_name}
                      </td>
                      <td>{item.status}</td>
                      <td>
                        {item.status === "submitted" && (
                          <>
                            <span
                              className="btn btn-primary mx-2"
                              onClick={() => dispatch(publish(item._id))}
                            >
                              Publish
                            </span>
                            <span
                              className="btn btn-danger"
                              onClick={() => dispatch(reject(item._id))}
                            >
                              Reject
                            </span>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Home;
