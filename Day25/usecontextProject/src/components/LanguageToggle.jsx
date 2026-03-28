import { useContext } from "react"
import LanguageContext from "../context/LanguageContext"

const LanguageToggle = () => {
  const {lang,handleLanguage}=useContext(LanguageContext)

  return (
    <button type="button" onClick={handleLanguage} className="rounded border px-3 py-2 text-sm font-medium hover:bg-current/10 transition">
      {lang?"Tamil":"EN"}
    </button>
  );
};

export default LanguageToggle
