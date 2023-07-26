import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import '../assets/css/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'


// import ScrollRevealTitle from '../components/ScrollReveal';


const Main = () => {

    useEffect( () => {
      AOS.init({duration:1500})
    }, [])


    return (
        <div>
            <div className='main'>

                

                    <h1 className="animation" data-aos="fade-left" >Proba #1</h1>


              <Link to='/kontakt' ><h3>Kontakt strana</h3></Link>

                <h1 className="w3-animate-right blabla">BlaBlaBla</h1>

              {/*<ScrollRevealTitle>Scroll Reveal Naslov</ScrollRevealTitle>*/}
                
            </div>



            <div className='main2'>

              <h1  >Hi Mom!</h1>


              <div data-aos="fade-left">
                <h1>Zdravo</h1>
              </div>


              <div className="animation" data-aos="fade-left">
                <h1>Naticio!</h1>
              </div>

                
            </div>
        </div>
    )
}

export default Main
