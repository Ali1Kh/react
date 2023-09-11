import React, { Component } from "react";
import Star from "../Star/Star";
class About extends Component {
  render() {
    return (
      <>
        <title>About</title>
        <main className="vh-100 d-flex align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <h1>ABOUT COMPONENT</h1>
            <Star />
            <div className="about d-flex gap-3 p-4">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default About;
