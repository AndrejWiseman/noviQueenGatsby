import * as React from "react"
import { Script, graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import Main from '../components/Main'
import '../assets/css/global.css'
import { Seo } from '../components/Seo'

// import Img from 'gatsby-plugin-image';

import { GatsbyImage, getImage } from "gatsby-plugin-image"






export default function Home() {

  // const image = getImage(data.file.childImageSharp.fluid)

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "logo-bg/q1.jpg"}) {
        id
        childImageSharp {
          gatsbyImageData( placeholder: BLURRED)
        }
      }
    }
  `)


  const image = getImage(data.file.childImageSharp.gatsbyImageData)


  return (
      <>
        
        <Layout>
          <section>

            <GatsbyImage image={image} alt="slika" />

            <Main />

            {/*<Img fluid={props.data.file.childImageSharp.fluid} />*/}

            {/*<Img*/}
            {/*    fixed={data.file.childImageSharp.fixed}*/}
            {/*    alt="Gatsby Docs are awesome"*/}
            {/*/>*/}



          </section>
        </Layout>



      </>
  )
}


// export const query = graphql`
//   query {
//     file(extension: {eq: "jpg"}, name: {eq: "q1"}) {
//       id
//       name
//       childImageSharp {
//         fluid {
//           src
//         }
//         gatsbyImageData(placeholder: BLURRED)
//       }
//     }
//   }
// `




export function Head() {
  return (
      <>
        <Seo title="Pocetnaa" />
        {/*<link rel="stylesheet" type="text/css" href={"https://www.w3schools.com/w3css/4/w3.css"} />*/}
        <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
        <Script src="aos/dist/aos.js" />
        <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"} />
      </>
  )
}




