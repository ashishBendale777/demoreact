import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect, useRef } from "react";

const Home = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  
  const [selectedColor, setColor] = useState("");

  const count = useRef(0);


  const h1ref = useRef(0);

  useEffect(() => {
    h1ref.current.style.textsize = selectedColor;
  
  }, [selectedColor]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />

      <Form.Select onChange={(e) => setColor(e.target.value)}>
        <option value="20">RED</option>
        <option value="30">GREEN</option>
        <option value="50">BLUE</option>
      </Form.Select>

      <p ref={h1ref}>Render</p>
      <p onClick={()=>alert("hi..")}>jhsd ajshdjhasjdkhajdhjadk</p>
    </>
  )
}

export default Home