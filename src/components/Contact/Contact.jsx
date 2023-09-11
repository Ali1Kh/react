import React, { Component } from "react";
import Star from "../Star/Star";
import "./contact.css";
class Contact extends Component {
  render() {
    return (
      <>
        <title>Contact</title>
        <main className="contact bg-white vh-100">
          <div className="container">
            <div className="title p-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <h1>CONATCT SECTION</h1>
              <Star />
            </div>
            <div className="contactForm p-5">
              <div className="form-floating mb-3">
                <input
                  className="form-control border-top-0 border-start-0 border-end-0"
                  placeholder="Leave a comment here"
                  id="floatinginput"
                  type="text"
                ></input>
                <label htmlFor="floatinginput">userName :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control border-top-0 border-start-0 border-end-0"
                  placeholder="Leave a comment here"
                  id="floatinginput"
                  type="number"
                ></input>
                <label htmlFor="floatinginput">userAge :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control border-top-0 border-start-0 border-end-0"
                  placeholder="Leave a comment here"
                  id="floatinginput"
                  type="email"
                ></input>
                <label htmlFor="floatinginput">userEmail :</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  className="form-control border-top-0 border-start-0 border-end-0"
                  placeholder="Leave a comment here"
                  id="floatinginput"
                  type="password"
                ></input>
                <label htmlFor="floatinginput">userpassword :</label>
              </div>
              <button className="btn btn-info text-white">Send Message</button>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Contact;
