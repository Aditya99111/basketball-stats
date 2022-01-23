import React, { useState } from "react";
import "./Home.css";
import {  useNavigate } from "react-router-dom";

const Home = () => {

  let navigate = useNavigate();
  const [input, setInput] = useState("");
  const search = (e) => {
     e.preventDefault();
    if (input === "") {
      alert("Please enter a college");
    } else {
      navigate(`/search/?searchTerm=${input}`);
    }
  };

  return (
    <section className="home" id="home">
      <div className="content">
        <h3>Finding your dream school should be easy!</h3>
       <form action="">
          <input
            value={input}
            onInput={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search a college..."
            className="box search"
            onSubmit={search}
          />
        </form>

        <button className="btn" onClick={search}>
          Search!
        </button>
      </div>


      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
    </section>
  );
};

export default Home;
