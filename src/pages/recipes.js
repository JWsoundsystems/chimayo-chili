import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";




const RecipePage = ({ data }) => (
  <Layout>
  
    <SEO title="Recipes" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="Recipes" styleClass="about-background" 
    /> 
    <Info />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "about.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default RecipePage
