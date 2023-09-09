import React, { Component } from "react";
import Star from "../Star/Star";
import "./portfolio.css";
import img1 from "./imgs/poert1.png";
import img2 from "./imgs/port2.png";
import img3 from "./imgs/port3.png";

class Portfolio extends Component {
  render() {
    return (
      <>
        <title>Portfolio</title>
        <main className="portfolio bg-white vh-100">
          <div className="container">
            <div className="title p-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <h1>PORTFOLIO COMPONENT</h1>
              <Star />
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img1} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img2} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img3} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img1} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img2} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden">
                    <img className="w-100" src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Portfolio;
