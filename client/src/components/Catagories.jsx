import Products from "./CatagoriesData"
import styled from "styled-components";

const Container = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 margin:30px 20px;
      h1{
        color:rgb(55, 93, 219);
        text-decoration:underline;

      }
      .wrapper{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        width:100%;
        overflow:hidden;
        margin-top:10px;
        gap:10px;
            .item-container{
              
              height: 400px;
              position: relative;
              display:flex;
              flex-direction:column;
              align-items:center;
              justify-content:center;
              &:hover{
                transform: scale(1.1, 1.1);
                filter:brightness(70%);
                transition:0.5s ease-in;
                overflow:hidden;

              } 
                  img{
                    border-radius:20px;
                      width:100%;
                      display:flex;
                      flex-direction:column;
                      height:90%;
                      margin :10px;
                      
                       
                  }
                  .info{
                        position: absolute;
                        display:flex;
                        flex-direction:column;
                        gap: 10px;
                   
                        h2{
                          color: red;
                         }
                      button{
                        background-color:rgb(30, 100, 139);
                        border:none;
                        padding:15px 25px;
                        border-radius:10px;
                        color:white;
                        &: hover{
                          background-color:rgb(55, 93, 219);
                        }
                      }
                  }

             }
    }
`
 const Product = () => {
    return (
  <Container>
        <h1>catagories</h1>
        <div   className='wrapper'>
            {Products.map((item,id)=>(
              <div  className='item-container'key={id} >
                <img src={item.img} alt='product' />
                <div className='info'>
                    <h2>{item.title}</h2>
                    <button>Explore NOW</button>
                </div>
              </div>

          ))}
         </div>

  </Container>
      )
}
export default Product