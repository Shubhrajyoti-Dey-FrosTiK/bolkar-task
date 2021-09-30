import React,{ useEffect } from 'react'
import Block from '../components/block/Block.js'
import Heading from '../components/heading/Heading.js'
import Navbar from '../components/navbar/Navbar'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Heading/>
            <Block/>
        </div>
    )
}
