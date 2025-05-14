import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numeroRandom] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [numeroIntento, setNumeroIntento] = setNumeroIntento();

if(numeroRandom === numeroIntento){
  alert('Has acertado');
}else if(numeroRandom > numeroIntento){
  alert('Tu numero es demasiado bajo');
}else if(numeroRandom < numeroIntento){
  
}

  return (
    <>
      <div>
        
        </div>
    </>
  )
}

export default App
