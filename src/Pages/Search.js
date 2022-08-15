import React, { useState, useEffect } from "react";
import "./Search.css";

import { useLocation } from "react-router-dom";

const Search = () => {
  let location = useLocation();
  const [searchTerm, setSearchterm] = useState(undefined);
  const [data, setData] = useState([])

  const apiGet = () => {
    fetch("https://sheetdb.io/api/v1/6l767ihbrp156")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };


  useEffect(() => {
    if (location.search !== "") {
      const input = location.search.split("=")[1];
      setSearchterm(input);
    } else {
      setSearchterm("");
    }
    apiGet()
  }, []);


  if (searchTerm === undefined) return (
  <h1>Loading...</h1>
  );

  return (
    <section className="searchpage">
      <div className="maincontent">
        <div className="searchbar">
          <form action="">
            <input
              className="box"
              type="text"
              placeholder="Search here"
              onChange={(event) => {
                setSearchterm(event.target.value);
              }}
            />

          </form>
        </div>
        <section class="products" id="products">
          <h1 class="heading">
            {" "}
            latest reviews{" "}
          </h1>

          <div class="box-container">

            {data
              .filter((val) => {
                if (searchTerm === "") { return val; }

                else if (val.Name_of_Team
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
                ) { return val; }

              })
              .reverse().map((val, key) => {
                return (

                  <div class="box" key={key}>
                      <p className="posteddate">{val.results}</p>

                    <div className="stars">{val.Name_of_Team}</div>
                    <div class="content">
                      <br />
                      <br />
                      <h3 className="left">Final score: {val.Final_score}</h3>
                      <h3 className="right">MVP: {!!(val.MVP)?val.MVP:"N/A"}</h3>
                      <p className="date">
                      <div>First quarter score: {!!(val.First_quarter_score)?val.First_quarter_score:"N/A"} </div> 
                      <div>Second quarter score: {!!(val.Second_quarter_score)?val.Second_quarter_score:"N/A"}</div>
                      <div>Third quarter score: {!!(val.Third_quarter_score)?val.Third_quarter_score:"N/A"}</div>
                      <div>Fourth quarter score: {!!(val.Fourth_quarter_score)?val.Fourth_quarter_score:"N/A"}</div>
                      
                      </p>
                      <p className="college_description"> <b>Highlights:</b> {val.Highlights}</p>

                    </div>
                  </div>
                );
              })}
          </div>

        </section>
      </div>
    </section>
  );
};

export default Search;