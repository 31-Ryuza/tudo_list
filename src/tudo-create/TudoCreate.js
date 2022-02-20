import './TudoCreate.css'
import React from 'react'
import { useState } from 'react'

const TudoCreate = (props) => {
    const [getInputTudo, setInputTudo] = useState('')
    const handlesubmit = (event) => {
        event.preventDefault()

        const newTudo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInputTudo
        }

        props.onCreateTudo(newTudo)

        console.log(newTudo)

        setInputTudo('')
    }

    const handleInputTudo = (event) => {
        setInputTudo(event.target.value)
        console.log(getInputTudo)
    }



    return(
        <form className="tudo-form" onSubmit={handlesubmit}>
            <input type="text" value={getInputTudo} onChange={handleInputTudo}></input>
            <button type='submit'>Tambah</button>
        </form>
    );
}

export default TudoCreate