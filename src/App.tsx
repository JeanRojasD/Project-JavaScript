import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Orders from "./pages/Orders/orders"
import Users from "./pages/Users/users"

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Orders />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
    </Router>
  )
}

export default App
