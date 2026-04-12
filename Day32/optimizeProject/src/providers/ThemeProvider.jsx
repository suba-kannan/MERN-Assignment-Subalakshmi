import { useState, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeProvider = ({children}) =>{
  const [theme,setTheme] = useState("light")

  useEffect(() => {
    const saved =localStorage.getItem("theme")
    if (saved) setTheme(saved)
  },[])

  const toggleTheme = ()=>{
    const newTheme = theme==="light"?"dark":"light"
    setTheme(newTheme)
    localStorage.setItem("theme",newTheme)
  }

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className={theme === "dark"
        ? "dark bg-gray-900 text-white min-h-screen"
        : "bg-white text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
    
    </>
  )
}

export default ThemeProvider