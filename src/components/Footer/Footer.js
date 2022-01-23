import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <section className="footer">
                <div class="share">
                    <Link to="/privacy" class="btn"> privacy policy </Link>
                    <Link to="/terms" class="btn lowercase">  Terms of use </Link>
                </div>
                <div className="credit">&copy; all rights reserved <span>My college Reviews</span> @ 2022 </div>
            </section>
        </div>
    )
}

export default Footer
