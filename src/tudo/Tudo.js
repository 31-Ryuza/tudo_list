import './Tudo.css'
import React from 'react'
import TudoList from '../tudo-list/TudoList'
import TudoCreate from '../tudo-create/TudoCreate'
import { useState } from 'react'
import swal from 'sweetalert'

const Tudo = () => {
    const [getData, setData] = useState([
    ])

    const eventCreateTudo = (tudo) => {
            setData(getData.concat(tudo))
            console.log(getData)
    }

    return(
        <div className='container'>
            <h3 className='fw-bold'>TUDO</h3>
            <TudoCreate onCreateTudo={eventCreateTudo}/>
            <TudoList isiData={getData}/>
        </div>
    );
}

export default Tudo