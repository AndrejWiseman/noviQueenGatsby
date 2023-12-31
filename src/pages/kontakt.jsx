import React, {useEffect} from 'react'
import Layout from "../components/Layout";
import {Script, graphql } from "gatsby";
import { Seo } from '../components/Seo'
import '../assets/css/main.scss'


import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AOS from 'aos'
import 'aos/dist/aos.css'


const Kontakt = ({data}) => {


  useEffect( () => {
    AOS.init({duration:1500})
  }, [])

  return (
      <Layout>
        <section className="sekcija-kontakt">
          <h2 data-aos="slide-down"  >Kontakt strana</h2>


          <hr/><hr/><hr/>

          <h2>{data.travelLocations.totalCount}</h2>

          <hr/>

            {data.travelLocations.edges.map(({node}) => (
                <>
                  <h2 key={node.id} >{node.childMarkdownRemark.frontmatter.location}</h2>
                  <h4 key={node.id} >{node.childMarkdownRemark.frontmatter.travel_date}</h4>

                  <div className="slika">
                    <GatsbyImage
                        image={getImage(node.childMarkdownRemark.frontmatter.featured_image)}
                        alt="slika"
                    />
                  </div>
                  <hr/>
                </>
            ))}



        </section>

      </Layout>
  )
}


export function Head() {
  return (
      <>
        <Seo title="Kontakt strana" />
        <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
        <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
      </>
  )
}

export default Kontakt



export const query = graphql`
  query {
    travelLocations: allFile(filter: {relativeDirectory: {eq: "travel-packages"}}) {
      totalCount
      edges {
        node {
          name
          childMarkdownRemark {
            frontmatter {
              location
              travel_date
              featured_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`



