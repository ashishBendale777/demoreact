import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const MyFoem = () => {
    const [counter, setcounter] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [gender, setGender] = useState("")

    var names = ["Ashish", "Pawn", "Dhiraj"]

    const { id } = useParams();

    function incre() {
        setcounter(counter + 1)
    }
    function decre() {
        setcounter(counter - 1)
    }

    return (
        <div>
            {/* <button onClick={() => decre()}>Prev</button>
            <h3>{names[counter]}</h3>
            <button onClick={() => incre()}>Next</button> */}

            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='Text' placeholder='Enter Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='Text' placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="radio" label="Male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                    <Form.Check type="radio" label="Female" name="gender" value="FeMale" onChange={(e) => setGender(e.target.value)} />
                </Form.Group>
            </Form>
            <button>Submit</button>
            <p>{firstName + " " + lastName + " " + gender}</p>
            <h1>{id}</h1>
        </div>
    )
}

export default MyFoem