import { useState } from "react"
import LanguageContext from "../context/LanguageContext"

const LanguageProvider = ({children}) => {
  const [lang,setLang] = useState(false)

  const handleLanguage=()=>{
    setLang(!lang)
  }

  return (
    <LanguageContext.Provider value={{lang,setLang,handleLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider
