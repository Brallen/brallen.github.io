import React from "react"

const HeadlineWithText = ({ headline, text }) => (
  <section className="headline-with-text component container">
    {headline !== undefined && <h3 className="col-12">{headline}</h3>}
    {text !== undefined && (
      <p className="col-12 col-md-10 offset-md-1">{text}</p>
    )}
  </section>
)

export default HeadlineWithText
