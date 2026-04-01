import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Hello, Welcome to Sorex!</h1>
      <p className="text-lg">Count: {count}</p>
      
    </div>
  )
}

export default App