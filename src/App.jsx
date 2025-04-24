import { useState } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import List from './components/List/List'
import { bookList } from './data/data'
import { useSelector } from 'react-redux'
import FavoriteList from './components/FavoriteList/FavoriteList'

function App() { 

  return (
    <>
      <Provider store={store}>
        <List data={bookList}></List>
        <FavoriteList></FavoriteList>
      </Provider>
    </>
  )
}

export default App
