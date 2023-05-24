import Header from './Header';
import Checkout from './Checkout'; 
import Login from './Login';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{},dispatch] = useStateValue();
  useEffect(() => {
 auth.onAuthStateChanged(authUser => {
  console.log('THE USER IS >>>', authUser);
   if(authUser) {
   dispatch({
    type: 'SET_USER',
    user: authUser

   })
   } else {
      
    dispatch({
      type: 'SET_USER',
      user: null
  
     })
   }

})
  }, [])
  
  return (
     
    <Router>
      <div className="app">
        <Routes>
        <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
          <Route path = "/" element={[<Header/>, <Home/>]} />
          <Route path = "/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
