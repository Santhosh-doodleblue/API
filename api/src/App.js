import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users"
      );
      setDatas(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="background">
        <h1 className="text-center pt-4 pe-5">Api Datas</h1>
        <table className="container mt-5 wrap text-center">
          <thead>
            <tr className="wrap">
              <th>ID</th>
              <th>Name</th>
              <th>Mobile Number </th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Email ID</th>
              <th>Description</th>
              <th>Qualification</th>
            </tr>
          </thead>

          {datas.map(
            ({
              id,
              name,
              mobileNumber,
              age,
              dob,
              emailId,
              description,
              qualification,
            }) => {
              return (
                <>
                  <tbody>
                    <tr className="line">
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{mobileNumber}</td>
                      <td>{age}</td>
                      <td>{dob}</td>
                      <td>{emailId}</td>
                      <td>{description}</td>
                      <td>{qualification}</td>
                    </tr>
                  </tbody>
                </>
              );
            }
          )}
        </table>
      </div>
    </div>
  );
}

export default App;
