import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function View() {
  const [show, setShow] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("profiles"));

    setShow(data);
  });
  
  function handleChange(e){
   if(e.target.value==="Ascending"){
     
   }
  }

  return (
    <div>
      {show.length > 0 ? (
        <>
          <select onChange={handleChange}>
            <option value="Ascending">Acending</option>
            <option value="Descending">Descending</option>
          </select>
          <table style={{ border: "1px solid black" }}>
            <tr style={{ backgroundColor: "#eee", padding: "5px" }}>
              <th>Profile</th>
              <th>Name</th>
              <th>Location</th>
              <th>Number</th>
              <th>Dob</th>
              <Link to="/">Go Home</Link>
            </tr>
            {show.slice(page * 10 - 10, page * 10).map((el) => {
              return (
                <tr
                  style={{
                    border: "1px solid black",
                    backgroundColor: "green",
                    color: "white",
                  }}
                >
                  <td>
                    <img src={el.picture} alt={el.name} />
                  </td>
                  <td>{el.name}</td>
                  <td>{el.location}</td>
                  <td>{el.number}</td>
                  <td>{el.dob}</td>
                </tr>
              );
            })}
          </table>
        </>
      ) : (
        <h3>
          No Data present <Link to="/">Go Home</Link>
        </h3>
      )}
      {show.length > 0 && (
        <div className="pagination">
          <span>◀</span>
          {[...Array(show.length / 10)].map((_, index) => {
            return <span onClick={() => setPage(index + 1)}>{index + 1}</span>;
          })}
          <span>▶</span>
        </div>
      )}
    </div>
  );
}

export default View;
