import React from 'react'
import "./About.css"
import about from "./about-img.png"
import { Link } from 'react-router-dom'
const About = () => {
    return (

        <section className="about" id="about">

            <h1 className="heading"> about us </h1>

            <div className="row">

                <div className="image">
                    <img src={about} alt="about" />
                </div>

                <div className="content">
                    <h3 className="title">Find the perfect school for you!</h3>
                    <p>Are you interested in finding your dream school? With My college reviews you can easily read reviews from college students. We want to help you with your college search! <br /> <br /> My College Reviews makes it easy to browse reviews from any college. All you got to do is search a college and start reading reviews. Help grow our community by posting a review today!</p>
                    <Link to="/search" className="btn">Search now</Link>
                </div>

            </div>

        </section>

    )
}

export default About
