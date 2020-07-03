import React from "react"

const ProjectModal = ({ content }) => (
  <div
    className="modal fade"
    id={content.cardName}
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      className="modal-dialog modal-dialog-centered modal-md"
      role="document"
    >
      <div className="modal-content px-md-4">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {content.headline}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div
            id={`${content.cardName}-gallery`}
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {content.modalImages.map((image, index) => {
                return (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <img src={image} className="d-block w-100" alt="..." />
                  </div>
                )
              })}
            </div>
            <a
              className="carousel-control-prev"
              href={`#${content.cardName}-gallery`}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={`#${content.cardName}-gallery`}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="modal-text text-center">
            <p>{content.longDescription}</p>
            <a
              href={content.modalLink.url}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {content.modalLink.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProjectModal
