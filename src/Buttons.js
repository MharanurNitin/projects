import React from 'react'
import{Link} from 'react-router-dom';
import { useState, useEffect } from "react";


function Buttons() {
     const [getData, setGetData] = useState([]);
     const [isFetching, setIsFetching] = useState(false);

     useEffect(() => {
       let data = localStorage.getItem("profiles");
        // localStorage.setItem("fetching", JSON.stringify(false));
       // setGetData(data);
       if (!data) {
         localStorage.setItem("profiles", JSON.stringify([]));
       }
     }, []);
     async function fetchData() {
       let Data = [];
       if (isFetching) {
         alert("data fetching is already running");
         return;
       }
       setIsFetching(true);
       for (let i = 0; i < 50; i++) {
         const res = await fetch("https://randomuser.me/api");
         const data = await res.json();
         //  data.push(fetchedData);
         const { info, results } = data;
         const [first, second] = results;
         const NewObj = {
           number: first.cell,
           dob: first.dob.date.slice(0,10),
           location: `${first.location.street.name}  ${first.location.street.name}`,
           name: `${first.name.first} ${first.name.last}`,
           picture: first.picture.thumbnail,
         };
         Data.push(NewObj);
       }
       setIsFetching(false);
       let store = JSON.parse(localStorage.getItem("profiles"));
       store.push(...Data);
       localStorage.setItem("profiles", JSON.stringify(store));
       setGetData(store);
       alert("data fetching completed");
     }
     function deleteAll() {
       localStorage.setItem("profiles", JSON.stringify([]));
       setGetData([]);
     }
  return (
    <div className="buttons">
      {isFetching ? <h1>fetching the data....</h1> : ""}
      <button onClick={fetchData}>fetch data</button>
      <button onClick={deleteAll}>delete</button>
      <button>
        <Link to="/view">view Data</Link>
      </button>
    </div>
  );
}

export default Buttons