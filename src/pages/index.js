import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Marquee from "../components/content/marquee"
import HeadlineWithText from "../components/content/headline-with-text"
import CardContainer from "../components/content/card-container"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <Marquee />
    <HeadlineWithText
      headline="Who Am I?"
      text="Hello, I am a 23 year old developer currently working for Wacom in their web services department. I enjoy working with all things web related"
    />
    <HeadlineWithText headline="Stuff I've Built" />
    <CardContainer />
  </Layout>
)

export default IndexPage
