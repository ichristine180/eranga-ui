import { useSelector } from "react-redux";

const Home = () => {
  const publicDoc = useSelector(({ publicDoc }) => publicDoc);
  return (
    <>
      <p className="title-admin mx-5 mt-5">Admin DashBoard</p>

      <div className="mt-5 mx-5">
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
            {publicDoc.allFdoc &&
              publicDoc.allFdoc.map((item, i) => {
                return (
                  <tr key={i}>
                    <td></td>
                    <td>
                      {item.founder_first_name}
                      {item.founder_last_name}
                    </td>
                    <td>{item.founder_mobile}</td>
                    <td></td>
                    <td>
                      {" "}
                      {item.owner_first_name}
                      {item.Owner_last_name}
                    </td>
                    <td>{item.status}</td>
                    <td>
                      {item.status === "submitted" && (
                        <>
                          <span>Publish</span>
                          <span>Reject</span>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
