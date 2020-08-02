import React, { Component } from "react";

export class footer extends Component {
  render() {
    return (
      <div className="footer-row">
        <div className="left-block">
          <div className="footer-col">
            <p className="footer-col-heading">About Redbus</p>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-links"
                  href="https://www.redbus.in/info/aboutus"
                >
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p className="footer-col-heading">About Redbus</p>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-links"
                  href="https://www.redbus.in/info/termscondition"
                >
                  T & C
                </a>
              </li>
              <li>
                <a
                  className="footer-links"
                  href="https://www.redbus.in/info/privacypolicy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="footer-links"
                  href="https://www.redbus.in/info/faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-block">
          <div className="img-desc">
            <img
              alt="r_logo"
              src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png"
            />
            <p className="footer-about">
              Worlds largest Online Bus Ticketing Platform
            </p>
          </div>
          <p className="footer-about">
            redBus is the world's largest online bus ticket booking service
            trusted by over 8 million happy customers globally. redBus offers
            bus ticket booking through its website,iOS and Android mobile apps
            for all major routes.
          </p>
          <p className="footer-about">Ⓒ 2017 ibibogroup All rights reserved</p>
        </div>
      </div>
    );
  }
}

export default footer;
