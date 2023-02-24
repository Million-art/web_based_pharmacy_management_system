import styled from "styled-components";
import ProductsList from '../components/ProductsList'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;
        text-align:center;
    }
    .wrapper{
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content:center;
       overflow: hidden;
       width: 100%;
           .item-container{
            display: flex;
            flex-direction:column;
            justify-content:center;
            margin:0px 10px;
            width:25%;
            height:400px;
            border-radius:15px;
            &:hover{
                transform: scale(1.1, 1.1);
                transition:0.5s ease-in;
              } 
            img{
                height:300px;
                border-radius:15px;

                &:hover{
                    height:65%;
                    transition:ease-in-out;
                 }
            }
            .info{
                p{
                    display:none;
                }
                button{
                    width:95%;
                    height:40px;
                    border:none;
                    border-radius:15px;
                    padding:5px;
                    margin:5px;
                    background-color:rgb(30, 100, 139);
                    color:white;
                    font-size:22px;
                    font-weight:bold;
                    cursor:pointer;
                    &:hover{
                        background-color:rgb(55, 93, 219);

                    }
                }
                
            }
        }
    }

`

 
const Products=()=>{
    let ViewItem=(id)=>{
        alert(id);
    }
    return(
        <Container>
            <h1>Avilable Products</h1>
           <div   className='wrapper'>
            {ProductsList.map((item,id)=>(
              <div  className='item-container'key={id} >
                <img src={item.img} alt='product' />
                <div className='info'>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                    <button onClick={ViewItem}>View</button>
                </div>
              </div>

          ))}
         </div>

        </Container>
    )
}

export default Products;