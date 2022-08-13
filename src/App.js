import React from "react";
import { Route, Routes } from "react-router-dom";
import {Header} from "./components/Header";
import { Cart } from "./pages/Cart";
import {Home} from './pages/Home';
import { NotFound } from "./pages/NotFound";
import './scss/app.scss'
import { useSelector, useDispatch } from 'react-redux'

export const SearchContext = React.createContext('');

const  App = () => {

  const[searchValue, setSearchValue] = React.useState('');
  //const dispatch = useDispatch()

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{searchValue,setSearchValue}}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path = "/" element ={<Home/>}/>
              <Route path = "/cart" element = {<Cart/>}/>
              <Route path = "*" element = {<NotFound/>} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
