import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navpar from './Components/Navpar'
import Card from './Components/Card'
import Poori from "./img/Poori3.jpg"
import Dhosa from "./img/Dhosa1.jpg"
import Pongal from "./img/Pongal2.jpg"

function App() {
 
  let [cart,setCart]=useState(0);
  let Product=[
    {
      name:"Poori",
      price:2,
      img:Poori,
    },
    {
      name:"Pongal",
      price:3,
      img:Pongal,
    },
    {
      name:"Dhosa",
      price:4,
      img:Dhosa,

    },

  ]
  return <>
    <Navpar  cart={cart} setCart={setCart}/>
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  
                  {
                    Product.map((e,i)=>{
                      return <Card cart={cart} setCart={setCart} Product={e} key={i}/>
                    })
                  }
                </div>
            </div>
    </section>
  </>
}

export default App
