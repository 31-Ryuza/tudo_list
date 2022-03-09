import './TudoList.css'
import React from 'react'
import { ListGroup } from 'react-bootstrap';
import swal from 'sweetalert';

const TudoList = (props) =>{
    return(
        <div className='list'>
        <ListGroup numbered as="ol" variant="flush">
            {
             props.isiData.map((data) => {
                 if(data.title.length < 0){
                    swal({
                        title: "Berhasil",
                        text: "Catatan Berhasil di Tambahkan",
                        icon: "error",
                        button: false,
                        timer: 3000
                      });
                 }else{
                    return <ListGroup.Item action as="li" variant="warning" className='item' key={data.id}>{data.title}</ListGroup.Item>
                 }
            })
            }
            </ListGroup>
        </div>
    );
}

export default TudoList