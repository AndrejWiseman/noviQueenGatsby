import React, {useEffect, useState } from 'react'
import Layout from "../components/Layout";
import { Script, graphql, Link } from "gatsby";
import { Seo } from '../components/Seo'
import '../assets/css/main.scss'

import slugify from 'slugify'


import AOS from 'aos'
import 'aos/dist/aos.css'


import { get, set } from "local-storage";


const Pesme = ({data}) => {



  const quotes = data.allContentfulPoruke.edges[0].node.poruke.poruke.map(poruka => (poruka.tekst))

  const [currentQuote, setCurrentQuote] = useState(get("currentQuote") || "");



  useEffect( () => {
    AOS.init({duration:1500})
  }, [])






  useEffect(() => {
    // Function to set a random quote
    const setRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const newQuote = quotes[randomIndex];
      setCurrentQuote(newQuote);
      set("currentQuote", newQuote);
    };

    // Set a random quote initially if LocalStorage is empty
    if (!currentQuote) {
      setRandomQuote();
    }

    // Set a new random quote every minute
    const intervalId = setInterval(() => setRandomQuote(), 60000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [quotes, currentQuote]);




  return (
      <Layout>
        <section className="sekcija-kontakt">
          <h2 data-aos="slide-down">Kolekcija pesama</h2>


          <h2>{currentQuote}</h2>


          <hr/><hr/><hr/>

          {/*<h2>{data.pesme.totalCount}</h2>*/}

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



          {/*{data.allContentfulPesme.edges.map(({node}) => {*/}

          {/*  // const slug = slugify(node.childMarkdownRemark.frontmatter.title, {lower:true})*/}

          {/*  const slug = slugify(node.title, {lower:true})*/}

          {/*  return (*/}
          {/*      <>*/}

          {/*        <Link to={`/${slug}`}>*/}
          {/*          <h2 key={node.id} >{node.title}</h2>*/}
          {/*        </Link>*/}


          {/*        <hr/>*/}
          {/*      </>*/}
          {/*  )*/}
          {/*})}*/}




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


          <hr/><hr/>


{/*ovaj je dobar kod*/}
{/*          <div>*/}
{/*            {data.allContentfulPoruke.edges[0].node.poruke.poruke.map(poruka => (*/}
{/*                <div key={poruka.id}>*/}
{/*                  <h3>{poruka.tekst}</h3>*/}
{/*                  <p>{poruka.pisac}</p>*/}
{/*                </div>*/}
{/*            ))}*/}
{/*          </div>*/}





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
    
    allContentfulPoruke {
      edges {
        node {
          id
          poruke {
            poruke {
              pisac
              tekst
            }
          }
        }
      }
    }
  }
  
`



