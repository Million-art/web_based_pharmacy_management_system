import React from "react"
import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close';
import Login from "../pages/Login";
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
const FormContainer = styled.div``
const CloseIconContainer=styled.div`
width:50px;
height:50px;
float:right;
padding:0px 10px;
 `
const Header = styled.div``
const Body = styled.div``
const Input = styled.div``

const Signup=(props)=>{

return(
    
    <Container   >
        <FormContainer style={ props.close ? { display:'block'} : {display : 'none'} }>
        <CloseIconContainer> <CloseIcon onClick={props.close}/></CloseIconContainer>
        <form>
            <label><p>Username</p><input type="text" /></label>
            <label><p>Password</p><input type="password" /></label>
            <div>
                <button type="submit" >Submit</button>
            </div>
            <label><small><a href="#">forget password?</a></small></label><br/>
            <label><small><a href="#" onClick={<Login/>}>alredy have an account ? </a></small></label>

        </form>
        </FormContainer>
    </Container>
)
}

export default Signup;