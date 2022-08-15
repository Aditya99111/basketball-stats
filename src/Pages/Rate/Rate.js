import React, { useState, useEffect } from 'react'
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
                        fetch("https://sheetdb.io/api/v1/6l767ihbrp156", {
                            method: "post",
                            headers: {
                                Accept: "application/json, text/plain, */*",
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                        })
                            .then((res) => res.json())
                            .then((res) => console.log(res));
                        if (window.confirm('Success! Your review has been submitted.')) {
                            window.location.reload();

                        }
                        else {
                            alert("Success! Your review has been submitted.")
                        }


                    }

                    }
                        method="POST"
                        id="form">
                        <p className="input_title"> Team *</p>
                        <input type="text" placeholder="e.g. Lakers" name="Name_of_Team" className="box" onChange={handleChange}
                            required />

{/* -------blank---------- */}
                        <p className="input_title"> results *</p>

                        <select  name="results" className="box" required onChange={handleChange} >
                            <option></option>
                            <option value="Won" >Won</option>
                            <option value="Overtim">Overtim</option>
                            <option value="Loss" >Loss</option>
                        </select>



                        <p className="input_title"> Final score *</p>
                        <input type="text" name="Final_score" className="box" placeholder="e.g. 50"  onChange={handleChange}
                            required />


                        <p className="input_title"> First quarter score</p>
                        <input type="text" id="First_quarter_score" name="First_quarter_score" placeholder="e.g. 50" className="box" onChange={handleChange}
                             />

                        <p className="input_title"> Second quarter score</p>
                        <input type="text" id="Second_quarter_score" name="Second_quarter_score" placeholder="e.g. 50" className="box" onChange={handleChange}
                             />

                        <p className="input_title"> Third quarter score</p>
                        <input type="text" id="Third_quarter_score" name="Third_quarter_score" placeholder="e.g. 50" className="box" onChange={handleChange}
                             />

                        <p className="input_title"> Fourth quarter score</p>
                        <input type="text" id="Fourth_quarter_score" name="Fourth_quarter_score" placeholder="e.g. 50" className="box" onChange={handleChange}
                             />

                        <p className="input_title"> MVP </p>
                        <input type="text" name="MVP" placeholder="e.g. Lakers" className="box" onChange={handleChange}
                             />

                       
                        <p className="input_title"> Highlights *</p>
                        <textarea name="Highlights" placeholder="Write your review here..." className="box" id="" cols="30" rows="10" onChange={handleChange}
                            required></textarea>

                       

                        <input type="submit" value="Submit" className="btn" />
                    </form>

                </div>

            </section>
        </div>
    )
}

export default Rate
