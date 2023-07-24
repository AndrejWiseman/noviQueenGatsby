import React from 'react'
import '../assets/css/main.scss'


import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import config from 'react-reveal/globals';



const Main = () => {
    config({ ssrFadeout: true });
    return (
        <>
            <div className='main'>

                

                <Zoom >
                    <h1>Proba #1</h1>
                </Zoom>

              

                <h1>BlaBlaBla</h1>
                
            </div>

            <div className='main2'>

            <Slide bottom >
                    <h1>Natasaaaa</h1>
                </Slide>

        
                
            </div>
        </>
    )
}

export default Main