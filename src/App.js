import './App.css';
import Main from "./components/Main";
import Signup from './components/Signup';
import { Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
