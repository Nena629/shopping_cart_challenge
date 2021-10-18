import React from 'react'
import "./App.css"
import ShoppingCart from './components/ShoppingCart'

const App = () => {
  return (
    <main className="container border mt-5 p-4">
      <section className="shopping-cart d-flex mx-auto">
        {/* Shopping cart  */}
       <ShoppingCart/>
      </section>
    </main>

  )
}

export default App