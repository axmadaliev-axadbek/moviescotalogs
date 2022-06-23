import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Adminlayout from './componets/Layouts/AdminLayout';
import NoAuthlayout from './componets/Layouts/NoAuthLayout';
import Login from './componets/Login/Login';
import Protectroute from './componets/ProtecRoute/ProtectRoute';
import MoviesStorage from './Providers/MoviesStorage';
import CategoriesPage from './Views/CategoriesPage';
import Home from './Views/Home';
import Searcpage from './Views/Search/SearcPage';
import SingleCategory from './Views/SingleCategory';
import SingleFilmPage from './Views/SingleMovie';

function App(){
  return <div className="App">
    <MoviesStorage>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />        
          <Route path='/home' element={
              <Protectroute>
                  <Home />
              </Protectroute>
          }>            
          </Route>
          
          <Route path='singleMovie' element={
              <Protectroute>
                <SingleFilmPage/>                
              </Protectroute>
          }>            
          </Route>

          <Route path='Categories' element={
              <Protectroute>
                <CategoriesPage />
              </Protectroute>
          }>            
          </Route>

          <Route path='CategoriesOf/:category' element={
              <Protectroute>
                <SingleCategory />
              </Protectroute>
          }>            
          </Route>

          <Route path='search' element={
              <Protectroute>
                <Searcpage />
              </Protectroute>
          }>            
          </Route>
          
          <Route path='/auth' element={<NoAuthlayout/>}>
              <Route path='' element={<Navigate to='/auth/login' replace={true} />} />
              <Route  path='login' index element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MoviesStorage>
        
  </div>
}
export default App

  