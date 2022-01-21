import React from "react"
import Img from "gatsby-image"

const ProjectCard = ({ content, order }) => (
  <div
    className={`card mb-5 col-12 col-md-10 offset-md-1 pb-3 py-md-3 px-0 ${content.cardName}`}
  >
    <div className="row">
      <div className={`col-md-5 order-1 order-md-${order}`}>
        {content.image !== undefined && (
          <Img
            fluid={content.image.node.childImageSharp.fluid}
            className={`card-img ${order === 1 ? "ml-md-5" : "mr-md-5"}`}
            imgStyle={{ objectFit: "contain" }}
          />
        )}
      </div>
      <div
        className={`col-md-7 order-2 px-md-5 text-center text-md-left order-md-${
          order === 1 ? 2 : 1
        }`}
      >
        <div className="card-body">
          <h5 className="card-title">{content.headline}</h5>
          <p className="card-text">
            <small className="text-muted">{content.flairText}</small>
          </p>
          <p className="card-text">{content.shortDescription}</p>
          <button
            type="button"
            className="btn btn-toggle"
            data-toggle="modal"
            data-target={"#" + content.cardName}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectCard
