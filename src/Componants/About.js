import React from 'react'
import { MyButton } from './MyButton'
import { useSelector } from 'react-redux'


const About = () => {
  const { UserData } = useSelector((state) => state)

  return (
    <div>About
      <MyButton label="Ab OK" onClick={() => alert("Abouy")} />
      <h4>{UserData.UserName}</h4>
      <h4>{UserData.UserPass}</h4>
    </div>

  )
}

export default About