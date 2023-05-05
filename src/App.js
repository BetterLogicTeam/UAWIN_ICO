import logo from './logo.svg';
import './App.css';
import Uawin_header from './components/Uawin_header/Uawin_header';
import Home_uwin from './components/Home_uwin/Home_uwin';
import Why_uwin from './components/Why_uwin/Why_uwin';
import Tokenomic from './components/Tokenomic/Tokenomic';
import Roadmap from './components/Roadmap/Roadmap';
import Mainifest from './components/Mainifest/Mainifest';
import How_get from './components/How_get/How_get';
import FAQ from './components/FAQ/FAQ';
import Donate from './components/Donate/Donate';
import Main_footer from './components/Main_footer/Main_footer';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="App">
      <Toaster />
      
      <Uawin_header setModalShow={setModalShow} modalShow={modalShow}/>
      <Home_uwin setModalShow={setModalShow} modalShow={modalShow} />
      <Why_uwin/>
      <Tokenomic/>
      <Roadmap/>
      <Mainifest/>
      <How_get/>
      <FAQ/>
      <Donate/>
      <Main_footer/>
    </div>
  );
}

export default App;
