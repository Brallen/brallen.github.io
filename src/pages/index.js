import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"

import Landscape from "../images/landscape.svg"
import Reflection from "../images/reflection.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />

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

    <section className="who-am-i component container">
      <h3 className="col-12">Who am I?</h3>
      <p className="col-12 col-md-10 offset-md-1">
        Hello, I am a 23 year old developer currently working for Wacom in their
        web services department. I enjoy working with all things web related
      </p>
    </section>

    <section className="project-cards component container">
      <h3 className="col-12">Stuff I've Built</h3>

      <div className="card mb-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://source.unsplash.com/random"
              className="card-img"
              alt="random"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">project</h5>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-5">
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://source.unsplash.com/random"
              className="card-img"
              alt="random"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">project</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
