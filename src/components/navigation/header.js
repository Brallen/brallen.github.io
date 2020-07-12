import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => {
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
      <nav class="navbar navbar-expand-sm fixed-top mt-sm-2">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#header-nav"
          aria-controls="header-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="navbar-toggler-burger">
            <span className="burger burger1"></span>
            <span className="burger burger2"></span>
            <span className="burger burger3"></span>
            <span className="burger burger4"></span>
          </div>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="header-nav"
        >
          <div class="navbar-nav">
            {data.allHeadlineTextJson.edges.map(link => {
              return (
                <a
                  className="nav-item nav-link px-4"
                  href={`#${link.node.id}`}
                  key={link.node.id}
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
