 
import Slides from './SlideData.jsx';
import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components'

const Div=styled.div`
width:100%;
height:600px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
background-repeat: no-repeat;
background-position:center;
background-size: cover;
filter: brightness(70%);
transition:0.6s ease-in;
&:hover{
    filter: brightness(100%);
    
}

.title{
     
    color:black;
 
}
.txt{
    margin-top:40px;

}
.btn{
    margin-top:100px;
    width:200px;
    height:70px;
    background-color:lightBlue;
    border-radius:15px;
    border:none;
    font-size:20px;
    cursor:pointer;
    font-weight:bold;

    &:hover{
        background-color:#96ded1;
        color:red;
        transition:0.2s ease-in;

    }

}

 `
const Center=styled.div`
word-spacing:5px;
letter-spacing:3px;
display:flex:
flex-direction:row;
align-items:center;
color:red;
`
const Left=styled.div`
.leftIcone{
    cursor:pointer;
    font-size:60px;
        &:hover{
            color:gray;
            transition:0.2s ease-in;
        }
}
`;
const Right=styled.div` 
.rightIcon{
    cursor:pointer;
    font-size:60px;
        &:hover{
            color:gray;
        transition:0.2s ease-in;
    }
}  
`;
 
const Slider=()=>{
    const [Image,setImage]=useState(0)
    
        let slideLeft=()=>{Image >0 ? setImage(Image-1) : setImage(Slides.length-1)}  
            
        let  slideRight=()=>{Image < Slides.length-1 ? setImage(Image+1) : setImage(0)} 
  
    return (
    <Div style={{backgroundImage:`url(${Slides[Image].img})`}}>
      
        <Left><ArrowBackIosIcon onClick={slideLeft} className='leftIcone' /></Left>
            <Center >
              <div className='title'>
                   <h1>{Slides[Image].title}</h1>
                </div>
               <div className='txt'>
                  <h3>{Slides[Image].text} </h3>
                </div>
                <button className='btn'>Explore Now</button>
            </Center>
        <Right ><ArrowForwardIosIcon onClick={slideRight} className='rightIcon'/></Right>
    </Div>
      
      )
}
 export default Slider