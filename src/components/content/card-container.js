import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./project-card"
import ProjectModal from "./project-modal"

const CardContainer = () => {
  let data = useStaticQuery(graphql`
    query {
      allCardsJson {
        edges {
          node {
            cardName
            headline
            flairText
            shortDescription
            longDescription
            modalLink {
              url
              text
            }
          }
        }
      }
      allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  `)
  data.allCardsJson.edges.forEach(card => {
    card.node.image = data.allFile.edges.find(
      image =>
        image.node.childImageSharp.fluid.originalName ===
        `${card.node.cardName}-main.jpg`
    )
    card.node.modalImages = data.allFile.edges.filter(image =>
      image.node.childImageSharp.fluid.originalName.startsWith(
        `${card.node.cardName}-modal`
      )
    )
  })

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
