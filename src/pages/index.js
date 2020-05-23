import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Contact from '../components/Home/Contact'
import Products from '../components/Home/Products'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
    img={data.img.childImageSharp.fluid} 
    title="" styleClass="default-background" 
    /> 
    <Products />
    <Info />
    <Menu items={data.menu} />
    <Contact />
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
          fixed(width:100,height:100){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
