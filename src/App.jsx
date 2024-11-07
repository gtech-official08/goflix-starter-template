import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
      <Router>
        <main className="w-full min-h-screen bg-neutral-950 text-neutral-500 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Routing */}
          {/* <Routes>
            <Route path="/" element={<Home />} />
          </Routes> */}

          {/* Footer */}
          This is the footer

        </main>
      </Router>
    </>
  )
}


export default App
