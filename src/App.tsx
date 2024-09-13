import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Wallet from './pages/Wallet'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Login />} />
          <Route path='/wallet' element={ <Wallet /> }/>
        </Route>
      </Routes>
    </>
  )
}

export default App
