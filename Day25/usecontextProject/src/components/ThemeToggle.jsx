import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeToggle = () => {
  const {theme,toggleTheme}=useContext(ThemeContext)

  return (
    <button type="button" onClick={toggleTheme} className="rounded border px-3 py-2 text-sm font-medium hover:bg-current/10 transition">
      {theme?"Dark":"Light"}
    </button>
  );
};

export default ThemeToggle
