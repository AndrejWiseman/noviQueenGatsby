import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/main.scss'





const Main = () => {
    return (
        <>
            <div className='main'>

                

                    <h1>Proba #1</h1>


              <Link to='/kontakt'><h3>Kontakt strana</h3></Link>

                <h1>BlaBlaBla</h1>
                
            </div>

            <div className='main2'>

                    <div data-sal="slide-right"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    className='ime' >
                        <h2>Natasa!</h2>
                    </div>

        
                
            </div>
        </>
    )
}

export default Main