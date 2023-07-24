import React from 'react'
import '../assets/css/main.scss'
import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";
// import 'animate.css';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';


const Main = () => {
    return (
        <>
            <div className='main'>

                <h2 className='naslov animate__animated animate__bounce'>Opa maci</h2>

                <Zoom>
                    <h1>Proba #1</h1>
                </Zoom>

                <ScrollAnimation animateIn='fadeIn'>
                    <h1>
                        Animacija kao neka...
                    </h1>
                </ScrollAnimation>

                <h1>BlaBlaBla</h1>
                
            </div>

            <div className='main2'>

            <Slide bottom>
                    <h1>Natasaaaa</h1>
                </Slide>

                <ScrollAnimation animateIn='wobble'>
                    
                    <h2 className='animate__backInUp' >BBBBBB</h2>
                
                </ScrollAnimation>


                



                <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
  <h1>
    animateOut
  </h1>
</ScrollAnimation>
                
            </div>
        </>
    )
}

export default Main