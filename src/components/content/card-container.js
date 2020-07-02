import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"
import ProjectModal from "./project-modal"

const CardContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allCardsJson {
        edges {
          node {
            cardName
            image
            headline
            flairText
            shortDescription
            longDescription
            modalImages
          }
        }
      }
    }
  `)

  return (
    <section className="cards-container component container">
      {data.allCardsJson.edges.map((card, index) => {
        return (
          <div key={`${card.node.cardName}`}>
            <ProjectCard content={card.node} order={(index % 2) + 1} />
            <ProjectModal content={card.node} />
          </div>
        )
      })}
    </section>
  )
}

export default CardContainer
