import './Tudo.css'
import React from 'react'
import TudoList from '../tudo-list/TudoList'
import TudoCreate from '../tudo-create/TudoCreate'
import { useState } from 'react'

const Tudo = () => {
    const [getData, setData] = useState([
    ])

    const eventCreateTudo = (tudo) => {
        setData(getData.concat(tudo))
        console.log(getData)
    }

    return(
        <div>
            <h3>Tudo List</h3>
            <TudoCreate onCreateTudo={eventCreateTudo}/>
            <TudoList isiData={getData}/>
        </div>
    );
}

export default Tudo