import axios from "axios";
import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";
import "./Create.css";

function Create() {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    email: "",
    qualification: "",
    dob: "",
    mobileNumber: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [post, setPost] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    if (post === false) {
      setErrors(Validation(details));
    }
  };
  //   console.log(parseInt(details.age));
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(parseInt(details.age));
    if (post === true) {
      console.log(details);
      axios
        .post(
          `https://636ddafeb567eed48acb07be.mockapi.io/api/v1/users`,
          details
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setDetails({
        name: "",
        age: "",
        email: "",
        qualification: "",
        dob: "",
        mobileNumber: "",
        description: "",
      });
      navigate("/");
    }

    setErrors(Validation(details));
  };
  const Validation = (details) => {
    let errors = {};
    let errorValues = Object.keys(details);

    errorValues.map((value) => {
      if (details[value] === "") {
        errors[value] = "*This field cannot be empty";
        setPost(false);
      } else {
        setPost(true);
      }
    });
    return errors;
  };
  const reset = () => {
    setDetails({
      name: "",
      age: "",
      email: "",
      qualification: "",
      dob: "",
      mobileNumber: "",
      description: "",
    });
  };
  return (
    <div>
      <div className="background">
        <div className="container form-content p-5 ">
          <div className="header d-flex ">
            <a className="pe-5 anchor" href="/">
              <BiChevronLeft /> Users
            </a>

            <a className="anchor" href="/create">
              <BiChevronLeft />
              Add User
            </a>
          </div>
          <div className="container bg-white create-form">
            <div className="row d-flex">
              <div className="col-md-4 left">
                <label>User Name</label>
                <br></br>
                <input
                  type={"text"}
                  name="name"
                  value={details.name}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.name}</p>
                <label>Age</label> <br></br>
                <input
                  type={"number"}
                  placeholder="Enter Here"
                  name="age"
                  value={details.age}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.age}</p>
                <label>Email Id</label>
                <br></br>
                <input
                  type={"text"}
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.email}</p>
                <label>Qualification</label>
                <br></br>
                <select
                  value={details.qualification}
                  onChange={handleChange}
                  name="qualification"
                >
                  <option></option>
                  <option>Bachelors</option>
                  <option>Masters</option>
                  <option>P.hd</option>
                </select>
                <p className="text-danger">{errors.qualification}</p>
                <label>Date of birth</label>
                <br></br>
                <input
                  type={"text"}
                  name="dob"
                  value={details.dob}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.dob}</p>
              </div>
              <div className="col-md-4 right">
                <label>Mobile Number</label> <br></br>
                <input
                  type={"number"}
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={details.mobileNumber}
                  onChange={handleChange}
                />
                <p className="text-danger">{errors.mobileNumber}</p>
                <label>Description</label> <br></br>
                <textarea
                  placeholder="Enter Here"
                  name="description"
                  rows={10}
                  cols={50}
                  value={details.description}
                  onChange={handleChange}
                ></textarea>
                <p className="text-danger">{errors.description}</p>
              </div>
              <hr></hr>
            </div>
            <div className="bottom text-center">
              <button onClick={reset} className="create-btn">
                Cancel
              </button>
              <button onClick={handleSubmit} className="create-btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
