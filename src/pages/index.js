import React, { Children } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa";

const IndexPage = () => (
  <Layout>
  
    <SEO title="Home" />
    <h1>Chimayo Chili Company</h1>
    <p>Welcome to the online store for authentic New Mexican Chimayo Chili</p>
    
  </Layout>
)

export default IndexPage
