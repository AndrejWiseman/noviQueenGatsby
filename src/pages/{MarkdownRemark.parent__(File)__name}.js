import React from 'react'
import { graphql} from "gatsby"
import '../assets/css/template.scss'

import ReactMarkdown from 'react-markdown';


const Page = ({ data }) => {

  const title = data.markdownRemark.frontmatter.title
  const datum = data.markdownRemark.frontmatter.datum
  const text = data.markdownRemark.rawMarkdownBody
  // const html = data.markdownRemark.html


  // const printableText = html.replace(/(?:\r\n|\r|\n)/g, "<br />");

  // const dangerousText = { __html: printableText };


  return (

      <div className="temp">
        <h2>Template page</h2>

        <h1>{title}</h1>
        <h2>{datum}</h2>

        <div className="text-field">
          <ReactMarkdown key={data.markdownRemark.id} className="text">
            {text}
          </ReactMarkdown>

        </div>



        {/*<p dangerouslySetInnerHTML={dangerousText} />*/}

        {/*<div dangerouslySetInnerHTML={{ __html: text }} />*/}

        {/*{text}*/}

        {/*{html}*/}


      </div>
  )
}

export default Page


export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      html
      id
      rawMarkdownBody
      frontmatter {
        title
        datum
      }
    }
  }
`