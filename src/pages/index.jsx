import * as React from "react"
import { Script } from 'gatsby'
import Layout from "../components/Layout"
import Main from '../components/Main'
import '../assets/css/global.css'
import { Seo } from '../components/Seo'


export default function Home() {

  return (
      <>
        
        <Layout>
          <section>
            <Main />
          </section>
        </Layout>



      </>
  )
}



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




