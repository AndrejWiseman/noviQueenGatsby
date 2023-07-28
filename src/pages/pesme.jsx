import React, {useEffect} from 'react'
import Layout from "../components/Layout";
import { Script, graphql } from "gatsby";
import { Seo } from '../components/Seo'
import '../assets/css/main.scss'

// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import AOS from 'aos'
import 'aos/dist/aos.css'



const Pesme = ({data}) => {

  useEffect( () => {
    AOS.init({duration:1500})
  }, [])

  return (
      <Layout>
        <section className="sekcija-kontakt">
          <h2 data-aos="slide-down">Kolekcija pesama</h2>


          <hr/><hr/><hr/>

          <h2>{data.pesme.totalCount}</h2>

          <hr/>

          {data.pesme.edges.map(({node}) => (
              <>
                <h2 key={node.id} >{node.childMarkdownRemark.frontmatter.title}</h2>
                <h4 key={node.id} >{node.childMarkdownRemark.frontmatter.datum}</h4>
                {/*<h5 key={node.id} >{node.childMarkdownRemark.rawMarkdownBody}</h5>*/}

                <div className="tekst" dangerouslySetInnerHTML={{ __html: node.childMarkdownRemark.htmlAst  }} />


                <div>
                  <h5 key={node.id} >{node.childMarkdownRemark.rawMarkdownBody }</h5>
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
        <Seo title="Kolekcija pesama" />
        <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
        <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
      </>
  )
}

export default Pesme



export const query = graphql`
  query {
    pesme: allFile(filter: {relativeDirectory: {eq: "pesme"}}) {
      totalCount
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              datum
              
            }
            rawMarkdownBody
            html
            htmlAst
          }
        }
      }
    }
  }
`



