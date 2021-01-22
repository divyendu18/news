import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer_container">
            <div className="footer_left">
            <h3>DJ { new Date().getFullYear() }</h3>
            </div>
            <div className="footer_middle">
                <div className="icons face">
                  <FacebookIcon/>
                </div>
                <div className="icons twit">
                <TwitterIcon/>
                </div>
                <div className="icons insta">
                <InstagramIcon/>
                </div>
            </div>
            <div className="footer_right">
                <h1>prime<span className="tag">Time.</span></h1>
            </div>
            
        </div>
    )
}

export default Footer
