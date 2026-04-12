import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import ThemeProvider from "./providers/ThemeProvider"
import AuthProvider from "./providers/AuthProvider"
import CartProvider from "./providers/CartProvider"

const Home = lazy(()=> import("./pages/Home"))
const About = lazy(()=> import("./pages/About"))
const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Login = lazy(() =>import("./pages/Login"))

function App() {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <Navbar />

            <Suspense fallback={<h1 className="p-5">Loading...</h1>}>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
