import './TudoList.css'
import React from 'react'

const TudoList = (props) =>{
    console.log(props.isiData)
    return(
        <ul>{
            props.isiData.map((data) => {
                return <li key={data.id}>{data.title}</li>
            })
        }</ul>
    );
}

export default TudoList