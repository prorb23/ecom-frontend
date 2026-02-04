import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-black h-max w-6xl px-9 flex justify-center align-super'>
      <h2 className='text-cyan-400 text-center'>ecom frontend app || RBslayer</h2>
     </div>
    </>
  )
}

export default App
