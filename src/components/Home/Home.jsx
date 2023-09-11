import React, { Component } from "react";
import "./home.css";
import avatar from "./imgs/avatar.png";
import Star from "../Star/Star";
class Home extends Component {
  render() {
    return (
      <>
        <title>Home</title>
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center">
          <div className="image mb-4">
            <img src={avatar} alt="" />
          </div>
          <h1 className="fw-bold mb-2">START FRAMEWORK</h1>
          <Star />
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </main>
      </>
    );
  }
}
export default Home;
