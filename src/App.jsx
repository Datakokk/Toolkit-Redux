import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './store/slices/counter';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const  { counter }  = useSelector(( state ) => state.counter );
  const [amount, setAmount] = useState(2)

  // const onSetAmounKCt = ({ target }) => setAmount( target.value )
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={()=> dispatch( increment() )}>
          Increment
        </button>
      </div>
      <div className="card">
        <button onClick={()=> dispatch( decrement() )}>
          Decrement
        </button>
      </div>
      <div className="card">
        <input
          type="number" 
          value={ amount }
          onChange={ (e) => setAmount(e.target.value)}
        />
        <button onClick={()=> dispatch( incrementByAmount( Number(amount) ))}>
          Increment by { amount }
        </button>
      </div>
      <div className="card">
        <button onClick={()=> dispatch( reset() )}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
