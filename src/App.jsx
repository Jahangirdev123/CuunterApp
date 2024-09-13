import React from 'react'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from "./Components/Home"

function App() {
  return (
   <>
   <Provider store={store}>
    <Home/>
   </Provider>
   </>
  )
}

export default App