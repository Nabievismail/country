import './App.css';
import React, {useEffect} from 'react';
import { getRequestCountryAll } from './redux/request';
import { useDispatch} from 'react-redux';
import Header from './components/header';
import Country from './components/Country';
import { Routes, Route} from  "react-router-dom"
import Detail from './components/Detail';
import * as Scroll from 'react-scroll'
import { useLocation } from 'react-router-dom';

const App = () => { 
  
  const scroll = Scroll.animateScroll
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(getRequestCountryAll())
  }, [])
  useEffect(() => {
    scroll.scrollTo(0, 0)
  }, [pathname]);

  const up = () => {
    scroll.scrollTo(0,0)
  }
  return (
    <div className="App">
      <Header/>
      <div onClick={up} className='up'>up</div>
      <Routes>
        <Route path='/' element={<Country/>}/>
        <Route path='/detail/:name' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
