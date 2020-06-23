import React from "react"
import ProjectModal from "./project-modal"

const ProjectCard = () => (
  <>
    <div className="card mb-5 col-12 col-md-10 offset-md-1 py-3 py-md-3 px-0">
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
            <button
              type="button"
              class="btn btn-toggle"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    <ProjectModal />
  </>
)

export default ProjectCard
