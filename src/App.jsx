import Home from "./Home.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout.jsx";
import Tickets from "./Tickets.jsx";
import Map from "./Map.jsx";
import Payment from "./Payment.jsx";
import "./App.css"

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="Home" element={<Home/>}></Route>
              <Route path="Tickets" element={<Tickets/>}></Route>
              <Route path="Map" element={<Map/>}></Route>
              <Route path="Payment" element={<Payment/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
