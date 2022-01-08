import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HeadlineWithText = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      allHeadlineTextJson {
        edges {
          node {
            id
            headline
            text
          }
        }
      }
    }
  `)

  //since not using createPage, have to get all content and sort for the one we want
  const content = data.allHeadlineTextJson.edges.find(
    content => content.node.id === id
  ).node

  return (
    <>
      <div id={id} className="anchor"></div>
      <section className={`headline-with-text component container`}>
        {content.headline !== undefined && (
          <h3 className="col-12">{content.headline}</h3>
        )}
        {content.text !== undefined && (
          <p className="col-12 col-md-10 offset-md-1">{content.text}</p>
        )}
      </section>
    </>
  )
}

export default HeadlineWithText
