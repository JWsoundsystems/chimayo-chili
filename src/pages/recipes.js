import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Recipes from "../components/Home/Recipes";




const RecipePage = ({ data }) => (
  <Layout>
  
    <SEO title="Recipes" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="" styleClass="default-background" 
    /> 
    <Recipes />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "food.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default RecipePage
