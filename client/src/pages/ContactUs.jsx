import React from 'react'
import {Send} from '@mui/icons-material'
import styled from 'styled-components'
const Container =styled.div`
width: 100%;
height: 300px;
 display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
 gap: 20px;
 h1{
    color:rgb(55, 93, 219);
    text-decoration:underline;

  }
`
const InputContiner =styled.div`
display: flex;
gap: 20px;
input{
    width: 500px;

}
button{
    background-color:rgb(55, 93, 219);
    border-radius:8px;
    color: white;
    padding:5px;
    margin-top:10px;
    height: 50px;
    width:60px;
}
`
const Discription =styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:20px;
`
export const ContactUs = () => {
 
  return (
            <Container>
                <Discription>
                <h1>send feedback</h1>
                <h4>tell us what to add and remove for the future</h4>
                </Discription>
                <InputContiner>
                        <textarea cols={65} rows={5}  placeholder='Please Enter Your Email Here....'/>
                        <button>
                            <Send />
                        </button>
                </InputContiner>
            </Container>
   )
}
