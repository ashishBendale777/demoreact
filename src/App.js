import logo from './logo.svg';
import './App.css';
import Home from './Componants/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './Componants/MyNavBar';
import About from './Componants/About'
import Contact from './Componants/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyFoem from './Componants/MyFoem';
import MyStudentList from './Componants/MyStudentList';
import { FaAmilia } from 'react-icons/fa'
import TopBar from './Componants/TopBar';
import MyOffcanvas from './Componants/MyOffcanvas';

function App() {
  return (
    <div>
      {/* <MyFoem/> */}
      {/* <TopBar/> */}
      {/* <MyStudentList /> */}

      <BrowserRouter>
        <MyOffcanvas/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myform/:id' element={<MyFoem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
