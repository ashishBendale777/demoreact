import logo from './logo.svg';
import './App.css';
import Home from './Componants/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Componants/MyNavBar';
import About from './Componants/About'
import Contact from './Componants/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyFoem from './Componants/MyFoem';


function App() {
  return (
    <div>
      <MyFoem/>
      {/* <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
