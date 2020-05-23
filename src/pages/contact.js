import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Contact from "../components/Home/Contact";


const ContactPage = ({ data }) => (
  <Layout>
  
    <SEO title="Contact Us" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="" styleClass="about-background" 
    /> 
    <Contact />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "NewMexico.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ContactPage
