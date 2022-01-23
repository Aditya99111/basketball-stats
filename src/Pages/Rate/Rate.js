import React, { useState  } from 'react'
import "./Rate.css"
const Rate = () => {

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
        <div className="ratepage">
            <section className="contact" id="contact">

                <h1 className="heading"> write a  review </h1>


                <div className="row">


                    <form onSubmit={(e) => {
                        e.preventDefault();
                        alert("Success! Your review has been submitted.");
                        fetch("https://sheetdb.io/api/v1/370q0msdfd9bl", {
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
                        <p className="input_title"> college name</p>
                        <input type="text" placeholder="e.g. Harvard" name="Name_of_College" className="box" onChange={handleChange}
                            required />
                        <p className="input_title"> start date</p>
                        <input type="month" name="Start_Date" className="box" onChange={handleChange}
                            required />
                        <p className="input_title"> graduation date</p>
                        <input type="month" name="Graduation_Date" className="box" placeholde="mm/yyyy" onChange={handleChange}
                            required />
                        <p className="input_title"> college major</p>
                        <input type="text" name="College_Major" placeholder="e.g. Computer science" className="box" onChange={handleChange}
                            required />

                        <p className="input_title"> Your Rating</p>
                        <div className="label">
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                        </div>
                        <div className="ratingsection">
                            <input type="radio" value="1" name="College_Rating" className="box" onChange={handleChange}
                                required />
                            <input type="radio" value="2" name="College_Rating" className="box" onChange={handleChange}
                                required />
                            <input type="radio" value="3" name="College_Rating" className="box" onChange={handleChange}
                                required />
                            <input type="radio" value="4" name="College_Rating" className="box" onChange={handleChange}
                                required />
                            <input type="radio" value="5" name="College_Rating" className="box" onChange={handleChange}
                                required />
                        </div>
                        <p className="input_title"> college review</p>
                        <textarea name="College_Review" placeholder="Write your review here..." className="box" id="" cols="30" rows="10" onChange={handleChange}
                            required></textarea>
                        <input type="submit" value="Submit" className="btn" />
                    </form>

                </div>

            </section>
        </div>
    )
}

export default Rate
