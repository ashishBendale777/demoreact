import React from 'react'
import MyFoem from './MyFoem'
import { MyButton } from './MyButton'

const Contact = () => {
  
  return (
    <div>
      <MyFoem />
      <MyButton label="Contact OK" onClick={() => alert("Contact Clik")} />
    </div>

  )
}

export default Contact