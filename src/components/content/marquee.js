import React from "react"
import Landscape from "../../images/landscape.svg"
import Reflection from "../../images/reflection.svg"

const Marquee = () => (
  <section className="main-marquee">
    <div className="container">
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
