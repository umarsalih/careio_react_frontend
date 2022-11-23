import './App.css';
import './styles/care.css';
// import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import MyBookings from './components/pages/MyBookings';
import {store} from './store'
import { Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Nav from './components/templates/Nav';
import LoginModal from './components/login/LoginModal';

function App() {
  return (
    <Provider store={store}>
    
    <div id="CareIoApp" className='App'>
      <Nav/>               
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
        
        </Routes>
        <LoginModal/>
      </div>
    
    </Provider>
  );
}

export default App;
