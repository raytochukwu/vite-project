// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { observer } from 'mobx-react-lite'
// import counterStore from './store/counterStore'
import Home from './pages/home'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default observer(App)
