import React from "react"
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import Signup from "../components/Signup";
// import '../components/style/header.css'
const Container=styled.div`
position:static;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
width:100%;
height:100%;
`
const FormContainer = styled.div`
color:black;
    button{
    background-color:green;
    margin-top:5px;
    padding:5px;
    border-radius:10px;
    color:white;
    cursor:pointer;
    &:hover{
        background-color:darkgreen;

    }
    label{
        text-decoration:none;
    }
}
`
const CloseIconContainer=styled.div`
width:50px;
height:50px;
float:right;
padding:0px 10px;
color:red;
 `
const Header = styled.div``
const Body = styled.div``
const Input = styled.div`

`

const Login=(props)=>{

return(
    
    <Container   >
        <FormContainer style={ props.close ? { display:'block'} : {display : 'none'} }>
        <CloseIconContainer> <CloseIcon onClick={props.close}/></CloseIconContainer>
        <form>
            <label><p>Username</p><input type="text" /></label>
            <label><p>Password</p><input type="password" /></label>
            <br/>
                <button type="submit" >Submit</button>
            
            <label><small><a href="">forget password?</a></small></label><br/>
            <label><small >Create an account </small></label>

        </form>
        </FormContainer>
    </Container>
)
}

export default Login;