import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import List from './components/List/List'
import { bookList } from './data/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <List data={bookList}></List>
      </Provider>
    </>
  )
}

export default App
