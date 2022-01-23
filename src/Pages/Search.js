import React, { useState, useEffect } from "react";
import "./Search.css";

import { useLocation } from "react-router-dom";

const Search = () => {
  let location = useLocation();
  const [searchTerm, setSearchterm] = useState(undefined);
  const [data, setData] = useState([])

  const apiGet = () => {
    fetch("https://sheetdb.io/api/v1/370q0msdfd9bl")
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




  if (searchTerm === undefined) return <p>Loading...</p>;

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
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.Name_of_College
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => {
                return (

                  <div class="box" key={key}>
                    <div className="stars">
                      {Array.from('x'.repeat(val.College_Rating)).map((_, idx) => {
                        return <i key={idx} class="fas fa-star" />
                      })}

                      {Array.from('x'.repeat(val.Less_Stars)).map((_, idx) => {
                        return <i key={idx} class="far fa-star" />
                      })}


                    </div>


                    <div class="content">

                      <h3 className="left">{val.College_Major}</h3>
                      <h3 className="right">{val.Name_of_College}</h3>
                      <p className="date">{val.Start_Date} - {val.Graduation_Date}</p>
                      <p className="college_description">{val.College_Review}</p>

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