import React from 'react'
import { MyButton } from './MyButton'

const About = () => {
  return (
    <div>About
      <MyButton label="Ab OK" onClick={()=>alert("Abouy")}/>
    </div>

  )
}

export default About