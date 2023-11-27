import { Carousel } from "./components/Carousel";
import './App.css';
import {slides} from "./data/carouselData.json";


function App() {
  

  return (
   <div className="App">
      
      <Carousel data={slides}/>
    </div>
  );
}

export default App
