import Header from '../components/Header';
import Slider from '../components/Slider';
import Catagories from '../components/Catagories';
import About from './About';
import Products from './Products';
import Footer from '../components/Footer';
import { ContactUs } from './ContactUs';
import Login from './Login';
 function Home(){
    return (
        <div className="Home">
             <Header/>
            <Slider/>
            <Catagories/>
            <Products/>
            <Login/>
            <About/>
            <ContactUs/>
            <Footer/>
        </div>
      );
}

export default Home;