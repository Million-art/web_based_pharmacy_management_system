 import styled from "styled-components";  
import Search from '@mui/icons-material/Search';
import { useState } from "react";
import Login from "../pages/Login";
  const Left=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
h1{
    color:red; 
    text-align: center;
    cursor:pointer;
    font-size:40px;
}
.searchBox{
    display: flex;
    align-items: center;
    margin-right:10px;
    font-size:30px;
    input{
        margin-left:3px;
        border-radius:15px;
        padding-left:3px;
        width:300px;
        height:30px;
     }
}
`
const Container=styled.div`
position:relative;
display: flex;
justify-content: space-between;
align-items: center;
color:red;
border:1px solid white;

`
const Center=styled.div`
position:sticky;
display:flex;
align-items: center;
justify-content: center;
ul{
display:flex;
flex-direction:row;
li{
    cursor:pointer;

    list-style-type:none;
    margin-left:20px;
    font-size:20px;
    font-weight:bold;
}
}

`
const Right=styled.div`
display:flex;
align-items: center;
justify-content: space-around;
 h3{
    cursor:pointer;
    margin-right:20px;
 }
 img{
    margin-right:20px;
    cursor:pointer;
    margin-left:10px;
 }
`

  const Header=()=>{
    const[open,setOpen]=useState(false)
    function onClose(){
    setOpen(!open)
    console.log('close')
    }
    return(
        <div>
            <Left>
                <h1>Betselot Pharmacy</h1>
                <div className='searchBox'>
                <input type='text' placeholder='search....'/>
                    <Search/>
                </div>
            </Left>
            <Container>
                <Center>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </Center>
                <Right>
                <h3 onClick={onClose} >Login</h3>

                      <img src="https://img.icons8.com/color/48/null/google-maps-new.png"/>
                     { open &&<Login close={onClose} />}
                </Right>
            </Container>
       </div>
    )
  }
 export default Header;