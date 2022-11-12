import './App.css';
// import './styles/main.css';
import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import MyBookings from './components/pages/MyBookings';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
    </div>
  );
}

export default App;
