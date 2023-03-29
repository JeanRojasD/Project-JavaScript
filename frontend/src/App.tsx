import { Suspense, lazy} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Orders = lazy(() => import('./pages/Orders/orders'))
const Users = lazy(() => import('./pages/Users/users'))

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Suspense fallback={<p>Loading...</p>}><Orders /></Suspense>}/>
          <Route path="/users" element={<Suspense fallback={<p>Loading...</p>}><Users /></Suspense>}/>
        </Routes>
    </Router>
  )
}

export default App
