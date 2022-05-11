import {React, useState} from 'react'
import axios from "axios";

// import { TodoContext } from './TodoContext';

function Details({clicked, click}) {
  const [details, setDetails] = useState("");
  const [putDetails, setPutDetails] = useState(
    {details:"",}
  );
  const {id, title, date} = clicked;
  const [fetchedDetails, setFetchedDetails] = useState("")
  const [isToggled, setIsToggled] = useState(false);

  // setFetchedDetails(() =>{
  //   console.log("here!");
  //   axios
  //     .get(`http://localhost:8000/api/todo/${id}`, id)
  //     .then((res =>{
  //       console.log("Success fetching 1 todo");
  //       setFetchedDetails(res.data.details)
  //     }))
  //     .catch((err) =>{
  //       console.log("Can't fetch todo");
  //       console.log(err.message);
  //     });
  // }
  // );
  const getDetails = () =>{    
    console.log("here!")
    axios
      .get(`http://localhost:8000/api/todo/${id}`, id,{
        headers:{
          'user-agent':'not-axios',
        }
      })
      .then((res =>{
        // console.log("Success fetching 1 todo");
        // setFetchedDetails(res.data.details);
        let dat = res.data.data.details;
        if(dat === undefined){
          dat = "";
        }
        
        setFetchedDetails(dat);    
        // console.log(dat);  
        // console.log(typeof(dat))
        // return dat;
      }))
      .catch((err) =>{
        console.log("Can't fetch todo");
        console.log(err.message);
      });
  };
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
    console.log(details);
  };

  const handleSubmit = (e) =>{

    e.preventDefault();
    console.log(details);

    console.log(id, title, date);
    // console.log(details);
    // setPutDetails({
    //     ...details,      
    //      details   
    // });
    // console.log(details);
    // console.log(putDetails);
    
    axios
      .put(`http://localhost:8000/api/todo/${id}`,details) 
      .then((res) =>{
        console.log(("details added!"));

        setDetails("");

      })
      .catch((err) =>{
        console.log("Can't add details");
        console.log(err.message);
      });  
    
      
  }
  return (
    <>
            {click !== true ?
             <div>Click on a todo item</div>    
        :            
        <>  
            <div>Title: {title}</div>
            <span>Details</span>
            <button onClick={() => setIsToggled(!isToggled)}>Edit</button>
            <div defaultValue={getDetails()}>{fetchedDetails}</div>
            
        </>
        }
      
      {isToggled ?
        <form id="details" onSubmit={handleSubmit}>
        <textarea name="details" onChange={handleChange} defaultValue={fetchedDetails}></textarea>
        <button>Save</button>
        
        {/* <span>{fetchedDetails}</span> */}
        </form> 
        :
        ""
      }
    </>
  )
}

export default Details


 {/*         */}        