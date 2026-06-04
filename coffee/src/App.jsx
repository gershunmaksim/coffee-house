import { useState } from 'react'
import './App.css'
import MainPage from './screens/MainPage'
import SecondPage from './screens/SecondPage'
import ThirdPage from './screens/ThirdPage'
import FourPage from './screens/FourPage'
import './styles/style.scss'

function App() {
  const [isActivePage, setIsActivePage] = useState('main')
  return (
    <>
      {isActivePage === 'main' && <MainPage setIsActivePage={setIsActivePage} /> }
      {isActivePage === 'second' && <SecondPage setIsActivePage={setIsActivePage} /> }
      {isActivePage === 'third' && <ThirdPage setIsActivePage={setIsActivePage} /> }
      {isActivePage === 'four' && <FourPage setIsActivePage={setIsActivePage} /> }
    </>
  )
}

export default App
