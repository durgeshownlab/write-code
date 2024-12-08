import { BrowserRouter, Route, Routes } from 'react-router'
import VanishMode from './components/Shared/VanishMode/VanishMode.component'
import FourNotFour from './components/Shared/FourNotFour/FourNotFour.component'
import Home from './components/Shared/Home/Home.component'
import Dashboard from './components/PostLogin/Dashboard/Dashboard.component'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vanish-mode/:filename?" element={<VanishMode />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/404" element={<FourNotFour />} />
          <Route path="/*" element={<FourNotFour />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
