import Message from './Message';
import Addcustomers from './components/Addcustomers';
import Containall from './components/Containall';
import DisplayList from './components/ListJson';
import Login from './components/Login';
import Protected from './components/protectedroute';
import { BrowserRouter as Router,Routes,Route, Navigate, } from 'react-router-dom';
import {AuthValue } from './components/Auth';

function App(){
  let data: AuthValue = {isAuth: false};
  if(localStorage.getItem("token")){
    data.isAuth=true;
  }else{
    data.isAuth=false;
  }
  return (<>
  <Router>
    <Routes>
      <Route path='/' element={<Message/>}/>
      <Route path='login' element={<Login/>}/>
     
      <Route
            path='/dash'
            element={
              data.isAuth ?
                <Containall />:
                <Navigate to="/login" replace />
            }
          />        
    </Routes>
  </Router>

  </>
  );
}
export default App;