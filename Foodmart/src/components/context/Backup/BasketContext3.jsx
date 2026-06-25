import React, { createContext, useState } from 'react'
export const BASKET = createContext([])

function BasketContext({ children }) {
  const [sebet, setSebet] = useState([])

  function addBasket(id, name, price) {
    setSebet(prev => {
      const existing = prev.find(item => item.id === id)
      if (existing) {
        return prev.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { id, name, price, qty: 1 }]
    })
  }

  function increase(id) {
    setSebet(prev =>
      prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item)
    )
  }

  function decrease(id) {
    setSebet(prev =>
      prev
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    )
  }

  function removeItem(id) {
    setSebet(prev => prev.filter(item => item.id !== id))
  }

  const totalPrice = sebet.reduce((sum, item) => {
    const numeric = parseFloat(String(item.price).replace('$', '')) || 0
    return sum + numeric * item.qty
  }, 0)

  return (
    <BASKET.Provider value={{ sebet, addBasket, increase, decrease, removeItem, totalPrice }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext
