import React, { useState } from 'react'
import "./Contact.css"
const Contact = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (

        <section className="contact" id="contact">

            <h1 className="heading">contact us </h1>

            <div className="icons-container">
                <a href="https://instagram.com/mycollegereviews">
                    <div className="icons">
                        <i class="fab fa-instagram"></i>
                        <h3>our instagram</h3>
                        <p className="lowercase">@mycollegereviews</p>
                    </div>
                </a>


                <a href="https://www.tiktok.com/@mycollegereviews">
                    <div className="icons">
                        <i class="fab fa-tiktok"></i>
                        <h3>our tiktok</h3>
                        <p className="lowercase">@mycollegereviews</p>
                    </div>
                </a>
                <a href="#_">
                    <div className="icons">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>our location</h3>
                        <p>USA</p>
                    </div>
                </a>
            </div>

            <div className="row">


                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert("Success! Your message has been submitted.");
                    fetch("https://sheetdb.io/api/v1/gug8odhc1al1a", {
                        method: "post",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    })
                        .then((res) => res.json())
                        .then((res) => console.log(res));
                }}
                    method="POST"
                    id="form">
                    <h1 class="heading lowercase" style={{ fontSize: '3rem' }}>Feel free to send us a message below.</h1>
                    <input name="name" type="text" placeholder="Name" className="box" onChange={handleChange}
                        required />
                    <input name="email" type="email" placeholder="Email" className="box" onChange={handleChange}
                        required />
                    <input name="subject" type="text" placeholder="Subject" className="box" onChange={handleChange}
                        required />
                    <textarea name="message" placeholder="Message" className="box" id="" cols="30" rows="10" onChange={handleChange}
                        required></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>

            </div>

        </section>
    )
}

export default Contact
