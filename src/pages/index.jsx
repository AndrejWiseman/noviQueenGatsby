import * as React from "react"
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


export const Head = () => (
    <Seo title="Pocetna strana" />
)


