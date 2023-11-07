import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Details from './pages/details/Details';
import MyLearning from './pages/my-learning/MyLearning';
import Footer from './components/footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from './redux/actions/actions';

export const SearchContext = createContext()





function App() {
  const dispatch = useDispatch()

  const [s_result,setS_result] = useState("")


  useEffect(()=>{
    dispatch(loadUsers())
  },[])

  return (
    <SearchContext.Provider value={[s_result,setS_result]} >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-details/:id' element={<Details/>} />
        <Route path='/my-learning' element={<MyLearning/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>    
    </SearchContext.Provider>
  );
}

export default App;
