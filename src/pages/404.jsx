import React from 'react'
import Layout from "../components/Layout";
import {Seo} from "../components/Seo";
import {Script} from "gatsby";

const Error = () => {
  return (
      <Layout>
        <h1>404</h1>
        <h3>Not found</h3>
      </Layout>
  )
}
export default Error



export function Head() {
  return (
      <>
        <Seo title="Error strana" />
        <link rel="stylesheet" type="text/css" href={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"} />
        <Script src={"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"}/>
      </>
  )
}

