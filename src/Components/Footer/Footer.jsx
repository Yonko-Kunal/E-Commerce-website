import React from 'react'
import './Footer.css'
import ig_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <p>STORE</p>
            </div>
            <div className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-containter">
                    <img src={ig_icon} alt="" />
                </div>
                <div className="footer-icons-containter">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-containter">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.</p>
            </div>

        </div>
    )
}

export default Footer