import React from "react"

const ContactCard = () => (
  <section className="cards-container component container">
    <div className="card-contact card mb-5 col-12 col-md-10 offset-md-1 py-3 py-md-3 px-0">
      <div className="justify-content-center">
        <div className="card-body">
          <p className="card-text">Find me around the internet at</p>
          <a
            className="card-contact-link"
            href="https://github.com/Brallen"
            target="_blank"
            rel="noreferrer"
          >
            github<em>.com/</em>brallen
          </a>
          <a
            className="card-contact-link"
            href="https://linkedin.com/in/brettcase"
            target="_blank"
            rel="noreferrer"
          >
            linkedin<em>.com/in/</em>brettcase
          </a>
          <p className="card-text mt-3">Or send me an email at</p>
          <a
            className="card-contact-link"
            href="mailto:brett.case97@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            brett.case97<em>@</em>gmail<em>.com</em>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default ContactCard
