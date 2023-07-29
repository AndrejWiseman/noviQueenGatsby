import React, {useEffect} from 'react'
import Layout from "../components/Layout";
import { Script, graphql, Link } from "gatsby";
import { Seo } from '../components/Seo'
import '../assets/css/main.scss'

import slugify from 'slugify'


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



          {/*<ul>*/}
          {/*  {data.pesme.edges.map(({node}) => (*/}
          {/*      <>*/}

          {/*        <li><Link to=""><h2 key={node.id} >{node.childMarkdownRemark.frontmatter.title}</h2></Link></li>*/}


          {/*        /!*<h2 key={node.id} >{node.childMarkdownRemark.frontmatter.title}</h2>*!/*/}
          {/*        /!*<h4 key={node.id} >{node.childMarkdownRemark.frontmatter.datum}</h4>*!/*/}

          {/*        /!*<div className="text-field">*!/*/}
          {/*        /!*  <ReactMarkdown key={node.id} className="text" >{node.childMarkdownRemark.rawMarkdownBody}</ReactMarkdown>*!/*/}
          {/*        /!*</div>*!/*/}


          {/*        <hr/>*/}
          {/*      </>*/}
          {/*  ))}*/}
          {/*</ul>*/}




          {data.pesme.edges.map(({node}) => {


            const slug = slugify(node.childMarkdownRemark.frontmatter.title, {lower:true})

            return (
                <>

                  <Link to={`/${slug}`}>
                    <h2 key={node.id} >{node.childMarkdownRemark.frontmatter.title}</h2>
                  </Link>


                  <hr/>
                </>
            )
          })}



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
    pesme: allFile(filter: {relativeDirectory: {eq: "pesme"}} sort: {childMarkdownRemark: {frontmatter: {datum: DESC}}}) {
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
          } 
        }
      }
    }
  }
`



