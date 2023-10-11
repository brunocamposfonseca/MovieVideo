import './App.css';
import Navbar from './models/objects/Navbar.tsx';
import SliderMovie from './models/objects/SliderMovie.tsx';
import CardSlider from './models/objects/CardSlider.tsx';
import Footer from './models/objects/Footer.tsx';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <SliderMovie></SliderMovie>
      <CardSlider></CardSlider>
      <Footer></Footer>
    </>
  )
}

export default App
