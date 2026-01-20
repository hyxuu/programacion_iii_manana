import { useState } from 'react'
import './App.css'
import Counter from './ejercicios_prueba/ejercicios3/Counter'
import History from './ejercicios_prueba/ejercicios3/History'

function App() {
  const [count, setCount] = useState(0)
  

  const HandleNotify = (val: number) => {
    setCount(val);
  };


  return (
    <>
      <div>
        <Counter onNotify={HandleNotify}/>
        <hr />
        <History signal={count}/>
      </div>
    </>
  )
}

export default App
