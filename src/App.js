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
import Login from './Componants/Login';

function App() {
  return (
    <div>
      {/* <MyFoem/> */}
      {/* <TopBar/> */}
      {/* <MyStudentList /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/app' element={<MyOffcanvas />} >
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
