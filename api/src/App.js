import React, { useEffect, useState } from "react";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import eye from "./icons/eye.png";
import edit from "./icons/edit.png";
import { BsSearch } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
// import { AiOutlineEye } from "react-icons/ai";
// import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate } from "react-router";
function App() {
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users"
      );

      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const createUser = () => {
    navigate("/create");
  };

  // const deleteData = (id) => {
  //   console.log(id, "asdutasyudf");
  //   axios
  //     .delete(`https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users/${id}`)
  //     .then(function (handleDelete) {
  //         getData();

  //       console.log(handleDelete);
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };

  const deleteData = async (id) => {
    try {
      await axios.delete(
        `https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users/${id}`
      );
      const handleDelete = data.filter((list) => list.id !== id);
      setData(handleDelete);
    } catch (err) {
      console.log(err);
    }
  };

  const editData = (id) => {
    // navigate("/create");

    setData(data);
    console.log(setData);
  };

  return (
    <div>
      <div className="background">
        <div className="container d-flex justify-content-between pt-5">
          <p className="head ">Product Management</p>
          <button onClick={createUser} className="user-btn">
            + Create User
          </button>
        </div>
        <div className="container d-flex justify-content-between serve ">
          <p className=" server ">Services</p>
          <input
            className="parent"
            type={"text"}
            placeholder="Search..."
          ></input>
          <i className="child">
            <BsSearch />
          </i>
        </div>
        <table className="container mt-4  text-center main-table rounded">
          <thead className="table-head">
            <tr className="wrap rounded">
              <th>Name</th>
              <th>Mobile Number </th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Email ID</th>
              <th>Description</th>
              <th>Qualification</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(
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
                  <tr key={id} className="line">
                    <td>{name}</td>
                    <td>{mobileNumber}</td>
                    <td>{age}</td>
                    <td>{dob}</td>
                    <td>{emailId}</td>
                    <td>{description}</td>
                    <td>{qualification}</td>
                    <td>
                      <button className="view">
                        {<img src={eye} alt="missing" />}
                      </button>
                      <button onClick={() => editData(id)} className="view">
                        {<img src={edit} alt="missing" />}
                      </button>
                      <button
                        onClick={() => deleteData(id)}
                        className="view view-delete"
                      >
                        {<MdDelete />}
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <div className="container">
          <div className="d-flex p-3 py-5 justify-content-end">
            <button className="prev">Previous</button>
            <button className="begin">1</button>
            <button className="end">2</button>
            <button className="end">3</button>
            <button className="next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
