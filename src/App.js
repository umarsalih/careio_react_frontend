import './App.css';
import './styles/care.css';
import './styles/style.css';
import Home from "./components/pages/Home";
import Signup from './components/pages/Signup';
import {store} from './store'
import { Routes,Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <div id="CareIoApp" className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
