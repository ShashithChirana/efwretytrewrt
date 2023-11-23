import { BrowserRouter, Route, Routes } from "react-router-dom"

import Applhome from "./components/Applipge/Applhome"
import Navigate from "./components/Schomepge/main2"
import Schedhome from "./components/Schedpage/Schedhome"
import Camp from "./components/Campaignpage/Camp"
import Payhome from "./components/Paymentpage/Payhome"
import Exhome from "./components/Exampage/Exhome"
import Conhome from "./components/conexpge/Conhome"
import Statuphome from "./components/statuppge/Statuphome"
import Temphome from "./components/templpage/Temphome"
import Campall from "./components/campallpage/Campall"
import Payall from "./components/payallpage/Payall"
import SignUpForm from "./components/Signupage/SignUpForm"
import Fogpsw from "./components/Forgtpwpge/Forgetpw"
import Exregister from "./components/ExRegist/Exregister"



function App() {
  

  return (
    <div className='App'>


      
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate/>}/>
          <Route path="/appli" element={<Applhome/>}/>
          <Route path="/schedule" element={<Schedhome/>}/>
          <Route path="/Camp" element={<Camp/>}/>
          <Route path="/pay"  element={<Payhome/>}/>
          <Route path="/exm" element={<Exhome/>}/>
          <Route path="/conx" element={<Conhome/>}/>
          <Route path="/statx" element={<Statuphome/>}/>
          <Route path="/exreg" element={<Exregister/>}/>
          <Route path="/campss" element={<Campall/>}/>
          <Route path="/payll" element={<Payall/>}/>              
          <Route path="/Sinup" element={<SignUpForm/>}/>            
          <Route path="/Fogp" element={<Fogpsw/>}/>            
          <Route path="/Remp" element={<SignUpForm/>}/>            
                       
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
