import React, { useState } from 'react'

const MyFoem = () => {
    const [counter, setcounter] = useState(0)

    var names=["Ashish","Pawn","Dhiraj"]

    function incre() {
        setcounter(counter + 1)
    }
    function decre() {
        setcounter(counter - 1)
    }

    return (
        <div>
            <button onClick={() => decre()}>Prev</button>
            <h3>{names[counter]}</h3>
            <button onClick={() => incre()}>Next</button>
        </div>
    )
}

export default MyFoem