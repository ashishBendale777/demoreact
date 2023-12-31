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
import { useSelector } from 'react-redux';
import ProtectedRoute from './Componants/ProtectedRoute';
import MyOffCan from './Componants/MyOffCan';

function App() {
  const { isLogin } = useSelector((state) => state)
  return (
    <div>

      <MyOffCan/>

      {/* <MyFoem/> */}
      {/* <TopBar/> */}
      {/* <MyStudentList /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/app' element={
            <ProtectedRoute isLogin={isLogin}>
              <MyOffcanvas />
            </ProtectedRoute>
          } >
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
