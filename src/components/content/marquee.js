import React from "react"
import Landscape from "../../images/landscape.svg"
import Reflection from "../../images/reflection.svg"

const Marquee = () => (
  <section className="main-marquee">
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center text-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link px-4" href="#">
              Who Am I?
            </a>
            <a className="nav-item nav-link px-4" href="#">
              Stuff I've Built
            </a>
            <a className="nav-item nav-link px-4" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="col-12">Brett Case</h1>
        <h2 className="col-12">Full Stack Developer</h2>
      </div>
    </div>

    <img src={Landscape} className="mountains" alt="mountain landscape" />
    <img src={Reflection} className="reflection" alt="reflection" />
  </section>
)

export default Marquee
