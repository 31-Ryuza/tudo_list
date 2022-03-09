import './TudoCreate.css'
import React from 'react'
import { useState } from 'react'
import swal from "sweetalert";
import { Button, Form, FormGroup, InputGroup } from 'react-bootstrap'

const TudoCreate = (props) => {
    const [getInputTudo, setInputTudo] = useState('')
        const handlesubmit = (event) => {
                event.preventDefault()
                const newTudo = {
                    id: Math.floor(Math.random() * 100) + 1,
                    title: getInputTudo
                }

                  if(newTudo.title.length === 0){
                    swal({
                        title: "Gagal",
                        text: "Tidak Ada Catatan Yang Dimasukkan",
                        icon: "error",
                        button: false,
                        timer: 3000
                      });
                  }else{
                    swal({
                        title: "Berhasil",
                        text: "Catatan Berhasil di Tambahkan",
                        icon: "success",
                        button: false,
                        timer: 3000
                      });

                      props.onCreateTudo(newTudo)
        
                      console.log(newTudo)
              
                      setInputTudo('')
                  }
            }
    
        const handleInputTudo = (event) =>{
                setInputTudo(event.target.value)
                console.log(getInputTudo)
        }   
        return(
            <Form className="tudo-form" onSubmit={handlesubmit}>
                <InputGroup>
                <Form.Control type="text" value={getInputTudo} onChange={handleInputTudo} placeholder="Masukkan Catatan"/>
                <Button type='submit' variant="outline-warning">Tambah</Button>
                </InputGroup>
                <h5 className='hasilinput'>" {getInputTudo} "</h5>
            </Form>
        );
}

export default TudoCreate