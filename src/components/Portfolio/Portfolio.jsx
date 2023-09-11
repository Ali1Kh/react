import React, { Component } from "react";
import Star from "../Star/Star";
import "./portfolio.css";
import img1 from "./imgs/poert1.png";
import img2 from "./imgs/port2.png";
import img3 from "./imgs/port3.png";
import $ from "jquery";
class Portfolio extends Component {
  componentDidMount() {
    $(".portfolio .cardLayer").click((e) => { 
      this.imgSrc = $($(e.target).parents(".cardItem").children("img")).attr("src");
      $(".mainLayer .image img").attr("src",this.imgSrc)
      $(".mainLayer").removeClass("d-none");
      $(".mainLayer").addClass("d-flex");
    });
    $(".mainLayer").click((e) => {
      if (e.target.tagName !== "IMG") {
        $(".mainLayer").addClass("d-none");
        $(".mainLayer").removeClass("d-flex");
      }
    });
  }
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
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img1} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img2} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img3} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img1} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img2} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cardItem rounded-3 overflow-hidden position-relative">
                    <img className="w-100" src={img3} alt="" />
                    <div className="cardLayer opacity-0 d-flex justify-content-center align-items-center position-absolute top-0 bottom-0 start-0 end-0">
                      <i className="fa fa-plus text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="mainLayer d-none position-fixed top-0 bottom-0 start-0 end-0 justify-content-center align-items-center">
          <div className="image">
            <img className="w-100" src="" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
