import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import Marquee from "../components/content/marquee"
import HeadlineWithText from "../components/content/headline-with-text"
import CardContainer from "../components/content/card-container"
import ContactCard from "../components/content/contact-card"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    <Marquee />
    <HeadlineWithText id="whoami" />
    <HeadlineWithText id="projects" />
    <CardContainer />
    <HeadlineWithText id="contact" />
    <ContactCard />
  </Layout>
)

export default IndexPage
