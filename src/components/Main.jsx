import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import '../assets/css/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'


const Main = () => {

    useEffect( () => {
      AOS.init({duration:1200})
    }, [])


    return (
        <div>
            <section className='main'>

              <h1 className="naslov" data-aos="slide-down" >Netlify CMS</h1>


                
            </section>

            <section className="main2">
              <h2 data-aos="fade-left">Ovo je kao sekcija 2</h2>
            </section>




        </div>
    )
}

export default Main
