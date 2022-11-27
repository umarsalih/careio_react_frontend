import './App.css';
import './styles/care.css';
// import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import MyBookings from './components/pages/MyBookings';
// import ApiTester  from './components/pages/ApiTester';
import Checkout from './components/pages/Checkout';
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
          <Route path='/checkout' element={<Checkout/>} />
          {/* <Route path='/api-tests' element={<ApiTester/>} /> */}
        </Routes>
        <LoginModal/>
      </div>
    </Provider>
  );
}

export default App;
