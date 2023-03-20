import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Items from './components/Items';
import Facts from './components/Facts';
import Works from './components/Works';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Reviewsupdate from './components/Reviewsupdate';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Items></Items>
      <Facts></Facts>
      <Works></Works>
      {/* <Reviews></Reviews> */}
      <Reviewsupdate></Reviewsupdate>
      <Newsletter></Newsletter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
