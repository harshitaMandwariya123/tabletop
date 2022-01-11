import { useState } from "react";
import data from "./data";
import {useNavigate} from 'react-router-dom';

var AddPlayer = (props) => {
  const navigate = useNavigate();
  var [player, setPlayer] = useState(data)
  var [id, setId] = useState('');
  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");
  var [contact, setContact] = useState("");
  var [session, setSession] = useState("");
    
  //after submit form redirect user
  const handleOnSubmit = (event) => {
    event.preventDefault()
  
    const item = {  
      id,
      firstName,
      lastName,
      contact,
      session
    }
    const playerData = [
      ...data, 
      Object.assign({}, item)
    ]
    setPlayer(playerData);
    alert(JSON.stringify(playerData) + " " + "Data Added Successfully");
    navigate('/');
  }

  function handleValidations() {
    return (
        firstName !== "" &&
        lastName !== "" &&
        contact !== "" &&
        session !== ""
    );
  }

  return (
    <>
      <div className="container text-center mb-0 mt-5">
          <strong style={{ fontFamily: "cursive", fontSize: "20px" }}>
            Add Player
          </strong>
      </div>
      <div className="p-5 mt-5 container">
        <form onSubmit={handleOnSubmit}>
        <div className="mb-3 row">
                <label htmlFor="id" className="col-sm-2 col-form-label">
                Sr no
                </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    value={id}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="first_name" className="col-sm-2 col-form-label">
                First Name
                </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    value={firstName}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="last_name" className="col-sm-2 col-form-label">
                Last Name
                </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    value={lastName}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="contact_no" className="col-sm-2 col-form-label">
                Contact Number
                </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="contact_no"
                    onChange={(e) => {
                        setContact(e.target.value);
                    }}
                    value={contact}
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="campaign_name" className="col-sm-2 col-form-label">
                Campaign Name
                </label>
                <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id="contact_no"
                    onChange={(e) => {
                        setSession(e.target.value);
                    }}
                    value={session}
                />
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" disabled={!handleValidations()}>
                    Submit
                </button>
            </div>
        </form>
      </div>
    </>
  );
};

export default AddPlayer
