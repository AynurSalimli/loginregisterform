import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import {Routes,Route} from "react-router-dom"
import Register from './components/Register';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </>
  );
}

export default App;
