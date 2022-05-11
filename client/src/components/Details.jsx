import { React, useEffect, useState } from "react";
import axios from "axios";

// import { TodoContext } from './TodoContext';

function Details({ clicked, click }) {
  const [details, setDetails] = useState("");
  const [putDetails, setPutDetails] = useState({});
  const { id, title, date } = clicked;

  // Holds details of fetched Todo
  const [fetchedDetails, setFetchedDetails] = useState("");
  // State of Edit Button
  const [isToggled, setIsToggled] = useState(false);

  const [editText, setEditText] = useState("");

  useEffect(() => {
    setPutDetails(editText);
    console.log(editText);
  }, [editText]);

  useEffect(() => {
    console.log("in details use effect");
    axios
      .get(`http://localhost:8000/api/todo/${id}`, id, {
        headers: {
          "user-agent": "not-axios",
        },
      })
      .then((res) => {
        let dat = res.data.data.details;
        if (dat === undefined) {
          dat = "way sud";
        }
        setFetchedDetails(dat);
        console.log(dat);
      })
      .catch((err) => {
        console.log("Can't fetch todo");
        console.log(err.message);
      });
    console.log("called!");
  }, [id]);

  const handleChange = (e) => {
    console.log(editText);
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editText);

    console.log(id, title, date, editText);
    // console.log(details);
    setPutDetails({
      details: editText,
    });
    // console.log(details);
    console.log(putDetails);
    //
    axios
      .put(`http://localhost:8000/api/todo/${id}`, putDetails)
      .then((req, res) => {
        console.log("details added!");
        console.log(req);
      })
      .catch((err) => {
        console.log("Can't add details");
        console.log(err.message);
      });
    setIsToggled(!isToggled);
  };
  const editDetailText = (e) => {
    setEditText(e.target.value);
    console.log(editText);
  };
  const editing = () => {
    console.log("in editing!");
    setIsToggled(!isToggled);
    console.log(fetchedDetails);
    setEditText(fetchedDetails);
  };

  return (
    <>
      {click !== true ? (
        <div>Click on a todo item</div>
      ) : (
        <>
          <div>Title: {title}</div>
          <span>Details</span>
          <button onClick={editing}>Edit</button>
          <div>{fetchedDetails}</div>
        </>
      )}
      {isToggled ? (
        <form id="details" onSubmit={handleSubmit}>
          <textarea
            name="details"
            onChange={handleChange}
            value={editText}
            id="details"
          ></textarea>
          <button>Save</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default Details;
