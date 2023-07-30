import * as React from 'react'
import { graphql } from 'gatsby'


const PesmaTemplate = ({data}) => {
  const {
    title,
    body: {body},
    objavljeno,
    datum,

  } = data.contentfulPesme

  // const pathToImage = getImage(slikaFilma)

  return (
      <>
        <main >

          <div>
            {/*hero*/}
            <section >

              <article>

                <div >
                  <h2>{title}</h2>
                </div>

                <div >
                  <p>{datum}</p>
                  <p>{objavljeno}</p>
                </div>

              </article>
            </section>

            {/*rest of content*/}
            <section>
              <h5>Sadržaj:</h5>
              <p>{body}</p>
            </section>
          </div>
        </main>
      </>
  )
}



export const query = graphql`
  query ($title: String) {
    contentfulPesme (title: {eq: $title}) {
      title
      objavljeno
      datum
      body {
        body
      }
    }
  }
`




// export const query = graphql`
//   query ($naslov: String) {
//     contentfulFilm(naslov: {eq: $naslov}) {
//       naslov
//       originalniNaslov
//       vrstaFilma
//       godina
//       imdbOcena
//       linkZaPreuzimanje
//       noviFilm
//       opisRadnje {
//         opisRadnje
//       }
//       zanr
//       tags {
//         zanr
//         linkPreuzimanje
//       }
//       slikaFilma {
//         gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
//       }
//     }
//   }
// `

export default PesmaTemplate