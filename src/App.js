
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Blogs from './Pages/Blogs/Blogs'
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import NotFound from './Shared/NotFound/NotFound'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import InventoryDetail from './Pages/InventoryDetail/InventoryDetail';
import AddItems from './Pages/AddItems/AddItems'



function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><InventoryDetail></InventoryDetail></RequireAuth>}></Route>
        <Route path='/addItem' element={<AddItems></AddItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </div>
  );
}

export default App;
