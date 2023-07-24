import React from 'react'
import '../assets/css/main.scss'


import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import config from 'react-reveal/globals';
config({ ssrFadeout: true });


const Main = () => {
    return (
        <>
            <div className='main'>

                

                <Zoom ssrFadeout>
                    <h1>Proba #1</h1>
                </Zoom>

              

                <h1>BlaBlaBla</h1>
                
            </div>

            <div className='main2'>

            <Slide bottom ssrFadeout>
                    <h1>Natasaaaa</h1>
                </Slide>

        
                
            </div>
        </>
    )
}

export default Main