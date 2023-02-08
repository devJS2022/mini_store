import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Products } from './components/Products';
import { Basket } from './components/Basket';
import { IProduct } from './interface/IProduct';
import { listenerCount } from 'process';



function App() {
  const [basket, setBasket] = useState<IProduct[]>([])
  let [sumNumBasket, setSumNumBasket] = useState<number>(0)
  let num = 0;


  const addBasket = (id: number, products: IProduct[]) => {
    products.map(item => {
        if (item.id === id) {
            setBasket(prev => [...prev, {...item, id: Date.now()}])
        }
    })
  }

  useEffect(() => {
    basket.map(item => {
      num += item.price
    })
    setSumNumBasket(num)
  }, [basket])

  console.log(sumNumBasket)
  
  const delBasket = (id: number) => {
    setBasket(basket.filter(item => item.id !== id))
    basket.map(item => {
      num -= item.price
    })
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header length={basket.length}/>
        <main>
          <Routes>
            <Route path='/' element={<Products addBasket={addBasket}/>} />
            <Route path='/basket' element={<Basket basket={basket} delBasket={delBasket} sum={sumNumBasket}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
