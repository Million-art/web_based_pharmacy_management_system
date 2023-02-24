import { Facebook, Instagram, Mail,PhoneAndroid, Place, Telegram, Twitter } from '@mui/icons-material'
import React from 'react'
import Styled  from 'styled-components'

const Container =Styled.div`
     
width:100%;
 display: flex;
flex-direction:column;
align-items: center;
justify-content: center;

`
const InnerContainer=Styled.div`
margin:20px;
width:98%;
height:450px;
display: flex;
flex-direction:row;
align-items: center;
justify-content: center;
background-color:rgb(15,15,10);
color: white;
border-radius:10px;
`
const Left =Styled.div`
flex:1;
display: flex;
flex-direction:column;
gap: 20px;
padding-left: 30px;
justify-content: center;
h3{
    color:rgb(55, 93, 219);
}
h6{
    cursor:pointer;
    &: hover{
        color:rgb(55, 93, 219);
        transform: translate(2px);
    transition:0.5s ease-in;
    }
}
`

const Center =Styled.div`
flex:1;
display: flex;
flex-direction:column;
gap: 20px;
padding-left: 30px;
padding-top: 36px; 
justify-content: center;
     

    h4{
        cursor:pointer;
        display: flex;
        align-items: center;
        gap: 20px;
        &: hover{
            color:rgb(55, 93, 219);
            transform: translate(2px);
        transition:0.5s ease-in;
        }

`
const Right =Styled.div`
flex:1;
display: flex;
flex-direction:column;
gap: 20px;

align-items: center;
justify-content: center;
 
`
const Icon=Styled.div`
display: flex;
flex-direction:row;
gap: 20px;
align-items: center;
justify-content: center;
cursor:pointer;
`


const Footer = () => {
  
  return (
    <Container>
        <InnerContainer> 
            <Left>
                <h1>Use-Full-Links</h1> 
                <h4>Home</h4>
                <h4>Products</h4>
                <h4>Catagories</h4>

            </Left>
            <Center>
                <h1>Send-Feedback</h1>
                <h4><Place /> addis abeba lebu </h4>
                <h4> <PhoneAndroid />+251 944-78-91-01 </h4>
                <h4><Mail />betselot123.gmail.com</h4>
                 
            </Center>
            <Right>
                <h1> FOLLOW-US</h1>
                <Icon>
                    <Facebook />
                    <Telegram />
                    <Twitter />
                    <Instagram />
                </Icon>
            </Right>
        </InnerContainer>
        <small>admass c.s student 2023</small>
    </Container>
  )
}
export default Footer