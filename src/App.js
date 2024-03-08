
import './App.css';
import HomePageComponent from './components/pages/HomePageComponent';
import SecondPageComponent from './components/pages/SecondPageComponent';
import ThirdPageComponent from './components/pages/ThirdPageComponent';
import FourthPageComponent from './components/pages/FourthPageComponent';
import FifthPageComponent from './components/pages/FifthPageComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComponent from './components/NavbarComponent';



function App() {

  return (
    <BrowserRouter>
<NavbarComponent/>
    <Routes>
      <Route path='/' element = {<HomePageComponent/>} />
      <Route path='/SecondPageComponent' element = {<SecondPageComponent/>} />
      <Route path='/ThirdPageComponent' element = {<ThirdPageComponent/>} />
      <Route path='/FourthPageComponent' element = {<FourthPageComponent/>} />
      <Route path='/FifthPageComponent' element = {<FifthPageComponent/>} />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
