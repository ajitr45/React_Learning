import { useState } from 'react'

function App() {


  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={ () => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={ () => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={ () => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={ () => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={ () => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Orange"}}>Orange</button>
        <button onClick={ () => setColor("Gray")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Gray"}}>Gray</button>
        <button onClick={ () => setColor("Pink")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Pink"}}>Pink</button>
        <button onClick={ () => setColor("White")} clasPinkme='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"White"}}>White</button>
        <button onClick={ () => setColor("Black")} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Black"}}>Black</button>
        
      </div>
      </div>
    </div>
  )
}

export default App;
