import { React, useEffect, useState } from "react";
import axios from "axios";

// import { TodoContext } from './TodoContext';

// UGH TARUNGON PA NI NGA PART!

function Details({ clicked, click }) {
  const [details, setDetails] = useState("");
  const [putDetails, setPutDetails] = useState({});
  const [edited, setEdited] = useState(false);
  const { id, title, date } = clicked;

  // Holds details of fetched Todo
  const [fetchedDetails, setFetchedDetails] = useState("");
  // State of Edit Button
  const [isToggled, setIsToggled] = useState(false);
  const [willFetch, setWillFetch] = useState(true);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    setPutDetails(editText);
    console.log(editText);
  }, [editText]);

  useEffect(() => {
    if(willFetch){
    console.log("in details use effect");
    axios
      .get(`http://localhost:8000/api/todo/${id}`, id, {
        headers: {
          "user-agent": "not-axios",
        },
      })
      .then((res) => {
        let dat = res.data.data.details;
        // if (dat === undefined) {
        //   dat = "way sud";
        // }
        setFetchedDetails(dat);
        setEdited(!edited);
        console.log(dat);
      })
      .catch((err) => {
        console.log("Can't fetch todo");
        console.log(err.message);
      });
    console.log("called!");
    console.log(willFetch);
  }
  }, [id, willFetch]);

  const handleChange = (e) => {
    console.log(editText);
    setEditText(e.target.value);
  };
  // const handleChange = (e) =>{
  //   setEditText({[e.target.name] : e.target.value});
  //   console.log(editText);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // setWillFetch(!willFetch);
    console.log(putDetails);
    console.log(editText);
    console.log(id, title, date, editText);
    setPutDetails({
      details: editText,
    });   

    // console.log(details);
    console.log(putDetails);
    //
    axios
      .put(`http://localhost:8000/api/todo/${id}`, {details: editText})
      .then((req, res) => {
        console.log("details added!");
        console.log(req);
      })
      .catch((err) => {
        console.log("Can't add details");
        console.log(err.message);
      });
    console.log(willFetch);
    setIsToggled(!isToggled);
    setWillFetch(!willFetch);
    console.log(willFetch);
  };
  const editDetailText = (e) => {
    setEditText(e.target.value);
    console.log(editText);
  };
  const editing = () => {
    console.log("in editing!");
    setIsToggled(!isToggled);
    setWillFetch(!willFetch);
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
          {/* <div>{isToggled ? `${editText}` :fetchedDetails }</div>
          {isToggled ? <div className:>{editText}</div>:} */}

          {/* {isToggled ? <div className="hidden">{editText}</div> :<div>{fetchedDetails}</div>} */}
          {<div>{editText}</div>}
          {<div>{fetchedDetails}</div>}
        </>
      )}
      {isToggled &&
        <form id="details" onSubmit={handleSubmit}>
          <textarea
            name="details"
            onChange={handleChange}
            value={editText}
            id="details"
          ></textarea>
          <button>Save</button>
        </form>
      }
    </>
  );
}

// https://stackoverflow.com/questions/49718281/react-state-is-empty-upon-form-submission

export default Details;
