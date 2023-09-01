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
    h1ref.current.style.color = selectedColor;
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
        <option value="red">RED</option>
        <option value="green">GREEN</option>
        <option value="blue">BLUE</option>
      </Form.Select>

      <h1 ref={h1ref}>Render</h1>
    </>
  )
}

export default Home