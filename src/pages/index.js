import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="" styleClass="default-background" 
    /> 
    <Info />
    <Menu items={data.menu} />
  </Layout>
);

export const query = graphql`
{
  img: file(relativePath: {eq: "chimayo.JPG"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu: allContentfulChiliProduct{
    edges{
      node{
        id
        title
        description{
          description
        }
        price
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
