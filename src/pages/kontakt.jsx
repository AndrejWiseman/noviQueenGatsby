import React, {useEffect} from 'react'
import Layout from "../components/Layout";
import {Script} from "gatsby";
import { Seo } from '../components/Seo'
import '../assets/css/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'


const Kontakt = () => {

  useEffect( () => {
    AOS.init({duration:1500})
  }, [])

  return (
      <Layout>
        <section className="sekcija-kontakt">
          <h2 data-aos="slide-down"  >Kontakt strana</h2>
        </section>

      </Layout>
  )
}
export default Kontakt


export function Head() {
  return (
      <>
        <Seo title="Kontakt strana" />
        <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
        <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
      </>
  )
}
