import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return ( 
      <BrowserRouter>
        <Route path='/Login' component={Login}></Route>
        <Route path='/Home' component={Home}></Route>
      </BrowserRouter>
  );
}

export default App;