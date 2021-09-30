import React from 'react'
import './heading.css'

export default function Heading() {
    return (
        // <div style={{display:"flex",paddingLeft:"5px",paddingRight:"5px",justifyContent:"center"}}>
            // <div style={{position:"absolute",zIndex:"1",marginTop:"150px",padding:"10px"}}>
            <div style={{display:"block",position:"absolute",width:"100vw"}}>
                <div style={{maxWidth:"900px",margin:"auto"}}>
                <h1 id="Heading" >Never get blank in job interviews</h1>
                {/* <br></br> */}
                <h2 id="Subheading" >Remove the nervousness in english speaking,enroll in this 3-day online workshop to handle interviews confidently</h2>
                </div>
                <div className="ExploreButton" style={{maxWidth:"900px",margin:"auto"}}>
                        <p style={{margin:"auto"}}>Explore Programs</p>
                    </div>
            </div>
            // </div>
        // </div>
    )
}
