import styled from 'styled-components'
 import Map from '../components/Map'
const Container=styled.div`

 
h1{
    text-align:center;
    text-decoration:underline;
    color:rgb(55, 93, 219);
}
.wrapper{
display:flex;
flex-direction:row;
margin:5px;
padding:5px;

img{
    border-radius:15px;
    margin:5px;
    width:50%;
    height:100%;
    margin:5px;
}
.info{
    display:flex;
    flex-direction:column;
    margin:55px 5px;
    width:50%;
    height:100%;
    justify-content:space-around;
    align-items:center;

    h2{
        letter-spacing:2px;
        margin-bottom:35px;
    }

    p{
        color:gray;
        margin:12px 20px;
    }



}
}
`

const About=()=>{
    let img=require('../images/aboutUs/pharmacy.jpg')
    return(
        <Container>
            <h1>About Us</h1>
            <div className='wrapper'>
                <img src= {img}alt='betselot image'/>
                <div className='info'>
                    <h2>Precise and Dependeble Pharmacy with 1 year expriance in the Market</h2>
                    <p>Betselot Pharmacy prides itself on being a reliable and welcoming provider of the highest quality pharmaceutical products and services. We strive to serve our customers and communities with kindness, respect, and understanding, offering personalized service to meet your needs. Our friendly staff will always be available to provide helpful advice and assistance with all prescription-related needs. Our staff works diligently to ensure accurate information on all aspects of medication therapy, including dosage adjustments and drug interactions.</p>
                </div>
            </div>
            <div className='map'>
                <h1> google map</h1>
                
            </div>
        </Container>
    )
}
export default About