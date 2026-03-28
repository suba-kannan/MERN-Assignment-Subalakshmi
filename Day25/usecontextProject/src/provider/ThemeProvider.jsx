import { useState } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(false);
  const toggleTheme =()=>{
    setTheme(!theme)
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
