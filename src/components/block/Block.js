import React,{ useEffect,useState } from 'react'
import axios from 'axios';
import './Block.css'

export default function Block() {
    useEffect(()=>{
        axios.get('/task/tutors.json').then( response =>{
            console.log(response.data[0])
            document.getElementsByClassName("Item1")[0].style.backgroundImage="url("+response.data[0]+")";
            document.getElementsByClassName("Item2")[0].style.backgroundImage="url("+response.data[7]+")";
            document.getElementsByClassName("Item3")[0].style.backgroundImage="url("+response.data[1]+")";
            document.getElementsByClassName("Item4")[0].style.backgroundImage="url("+response.data[3]+")";
            document.getElementsByClassName("Item5")[0].style.backgroundImage="url("+response.data[4]+")";
            document.getElementsByClassName("Item6")[0].style.backgroundImage="url("+response.data[5]+")";
        });
    },[])

    return (
        <>
            <div className="Background" >
                <div className="Block Item1 A1 Pic" style={{marginTop: "650px"}}>
                    
                </div>
                <div className="Block Item2 A2 Pic" style={{marginTop: "750px"}}>
                    
                </div>
                <div className="Block Item3 A1 Pic" style={{marginTop: "750px"}}>
                    
                </div>
                <div className="Block Item4 A2 Pic" style={{marginTop: "650px"}}>
                    
                </div>
                <div className="Block Item5 A1 Pic">
                    
                </div>
                <div className="Block Item6 A2 Pic" style={{marginTop: "600px"}}>
                    
                </div>
            </div>
            
        </>
    )
}
