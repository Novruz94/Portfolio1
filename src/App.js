import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menyu from './pages/Menu';
import Haqqımızda from './pages/About';
import Əlaqə from './pages/Contact';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Footer from './components/Footer';
import MenyuƏlavələri from './pages/MenuDetails';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/'   element={<Home/>}/>
        <Route path='menyu'  element={<Menyu/>} /> 
        <Route path='menyu/menyuƏlavələri/:id' element={<MenyuƏlavələri/>}/>
        <Route path='haqqimizda' element={<Haqqımızda/>}/>
        <Route path='əlaqə' element={<Əlaqə/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
