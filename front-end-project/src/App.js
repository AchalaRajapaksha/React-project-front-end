import './App.css';
import TopNavigation from './components/TopNavigation';
import Footer from './components/Footer';
import Frame498 from './components/Frame498';
import Frame499 from "./components/Frame499";
import Herosection from "./components/Herosection";


function App() {
  return ( 
      <div className="responsive-container">
        <div className="content-for-wide-screens">
          <TopNavigation />
          <Herosection />
          <Frame498 />
          <Frame499 />
          <Footer />
        </div>
        <div className="content-for-medium-screens">
          <TopNavigation />
          <Herosection />
          <Frame498 />
          <Frame499 />
          <Footer />
        </div>
        <div className="content-for-small-screens">
          <TopNavigation />
          <Herosection />
          <Frame498 />
          <Frame499 />
          <Footer />
        </div>

        <div className="content-for-mobile-screens">
          <TopNavigation />
          <Herosection />
          <Frame498 />
          <Frame499 />
          <Footer />
        </div>
      </div>
    
  );
}

export default App;
