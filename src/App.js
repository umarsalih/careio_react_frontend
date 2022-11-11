import './App.css';
import './styles/main.css';
import './styles/style.css';
import Main from "./components/Main";
import Home from "./components/pages/Home";
import Signup from './components/Signup';
import { Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div classNameName='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
