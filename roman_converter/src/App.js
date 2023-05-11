import logo from './logo.svg';
import './App.css';
import LandingView from './Views/LandingView';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import InputText from "./components/InputText/InputText.jsx"


function App() {
  return (
    <div className="App">
      <div className="osg-grid osg-grid--gap">
        <div className="osg-grid__column--12">
          <Header/> 
        </div>
        <div className="osg-grid__column--12 io-grid-theme-standard">
      <h1>Romertall konverterer</h1>
          <InputText/>
        </div>
        <div className="osg-grid__column--12">
          <Footer/>
        </div>
      </div>

      </div>
  );
}

export default App;
