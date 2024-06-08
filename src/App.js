import React, { useEffect, useState } from "react";

import axios from "axios";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./components/Notfound";
import Newcoins from "./components/Newcoins";
import Th2 from "./components/Th2";
import Theory from "./components/Theory";
import Th1 from "./components/Th1";



function App() {
  const [Article, setArticle] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setArticle(response.data)
    }).catch((error)=>{
      console.log("error")
    })
  },[])
  
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      
        <Route path="/bitcoin" element={<Newcoins coins={Article} />}></Route>
        <Route path='/coin/:coinId' element={<Th2 />} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/th1' element={<Th1 />} />
        <Route path='*' element={<Notfound />} />
      </Routes>

    </BrowserRouter>



  );
};

export default App;