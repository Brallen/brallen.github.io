import React from "react"

const ProjectCard = ({ content }) => (
  <div
    className={`card mb-5 col-12 col-md-10 offset-md-1 py-3 py-md-3 px-0 ${content.cardName}`}
  >
    <div className="row">
      <div className="col-md-5">
        <img src={content.image} className="card-img" alt="random" />
      </div>
      <div className="col-md-7">
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
