import './App.css';
import './styles/care.css';
import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import MyBookings from './components/pages/MyBookings';
import ApiTester  from './components/pages/ApiTester';
import {store} from './store'
import { Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div id="CareIoApp" className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
        <Route path='/api-tests' element={<ApiTester/>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
