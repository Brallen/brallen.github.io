import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {
  const autoScroll = e => {
    if (e.target) {
      const scrollTarget = document.querySelector(e.target.hash).offsetTop
      window.scroll({
        top: scrollTarget,
        behavior: "smooth",
      })
      document.querySelector(".navbar-toggler").click()
    }
  }

  const onClick = e => {
    e.preventDefault()
    autoScroll(e)
  }

  const data = useStaticQuery(graphql`
    query {
      allHeadlineTextJson {
        edges {
          node {
            id
            headline
          }
        }
      }
    }
  `)
  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top mt-sm-2">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header-nav"
          aria-controls="header-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-burger">
            <span className="burger burger1"></span>
            <span className="burger burger2"></span>
            <span className="burger burger3"></span>
            <span className="burger burger4"></span>
          </div>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="header-nav"
        >
          <div className="navbar-nav">
            {data.allHeadlineTextJson.edges.map(link => {
              return (
                <a
                  className="nav-item nav-link px-4"
                  href={`#${link.node.id}`}
                  key={link.node.id}
                  onClick={onClick}
                >
                  {link.node.headline}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
