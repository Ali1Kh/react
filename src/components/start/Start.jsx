import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import "./start.css";
import $ from "jquery";
class Start extends Component {
  componentDidMount() {
    $(".nav-link").click((e) => {
      $(".nav-link.active").removeClass("active");
      $(e.target).addClass("active");
    });
  }
  render() {
    return (
      <main>
        <nav className="navbar navbar-expand-lg mainBgColor">
          <div className="container">
            <Link className="navbar-brand fs-3 fw-semibold">
              START FRAMEWORK
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link rounded-3 active"
                    aria-current="page"
                    to="about"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link rounded-3" to="portfolio">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link rounded-3" to="contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
        <footer className="text-center">
          <div className="mainFooter p-5 mainBgColor">
            <div className="container">
              <div className="inner d-flex justify-content-between align-items-center">
                <div className="footerItem p-1">
                  <h3>LOCATION</h3>
                  <p className="mb-2">2215 John Daniel Drive</p>
                  <p className="mb-0">Clark, MO 65243</p>
                </div>
                <div className="footerItem p-1">
                  <h3 className="mb-4">AROUND THE WEB</h3>
                  <div className="socialIcons d-flex justify-content-center gap-3">
                    <div className="icon d-flex justify-content-center align-items-center border border-1 rounded-circle">
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="icon d-flex justify-content-center align-items-center border border-1 rounded-circle">
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="icon d-flex justify-content-center align-items-center border border-1 rounded-circle">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="icon d-flex justify-content-center align-items-center border border-1 rounded-circle">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                  </div>
                </div>
                <div className="footerItem p-1">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="copyRight p-3">Copyright Ali Elsaadany© 2023</div>
        </footer>
      </main>
    );
  }
}
export default Start;
