import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLostdoc, publishLostDoc, rejectLostDoc } from "../../redux/Public";
const Ldoc = () => {
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  const dispatch = useDispatch();
  useEffect(() => {
    if (publicDoc.isLoggedIn) dispatch(getAllLostdoc());
  }, [dispatch, publicDoc.isLoggedIn]);

  return (
    <>
      <p className="title-admin mx-5 mt-5">Admin DashBoard --- Lost Document</p>

      <div className="mt-5 mx-5">
        {publicDoc.allLdoc.length === 0 && (
          <p className="text-center mt-5">No data found</p>
        )}
        {publicDoc.allLdoc.length !== 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Document name</th>
                <th>Owner Name</th>
                <th>Owner Mobile</th>
                <th>Owner email</th>
                <th>Description</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {publicDoc.allLdoc &&
                publicDoc.allLdoc.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{new Date(item.at_created).toLocaleDateString()}</td>
                      <td>{item.doc_name}</td>
                      <td>
                        {item.owner_first_name} {item.owner_last_name}
                      </td>
                      <td>{item.owner_mobile}</td>
                      <td>{item.owner_email}</td>
                      <td>{item.description}</td>
                      <td>{item.status}</td>
                      <td>
                        {item.status === "submitted" && (
                          <>
                            <span
                              className="btn btn-primary mx-2"
                              onClick={() => dispatch(publishLostDoc(item._id))}
                            >
                              Publish
                            </span>
                            <span
                              className="btn btn-danger"
                              onClick={() => dispatch(rejectLostDoc(item._id))}
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

export default Ldoc;
