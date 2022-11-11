import './App.css';
import './styles/care.css';
import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import { Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div id="CareIoApp" className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
