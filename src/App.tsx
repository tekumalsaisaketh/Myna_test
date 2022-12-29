import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import ItemList from './components/ItemList';
import Header from './components/Header';
import Checkout from './components/Checkout';
function App() {
  const queryClient = new QueryClient();
  const url=window.location.href;
  const location=url.split('/').at(-1);
  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
        <div className="App">
            <Header></Header>
            <Routes>  
                  <Route index path='/' element={<ItemList></ItemList>}></Route>
                  <Route path="/checkout" element={<Checkout></Checkout>} />
              </Routes>
  
      
        </div>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
