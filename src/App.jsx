import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        
      </Provider>
    </>
  )
}

export default App
