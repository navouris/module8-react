import React, {useState, createContext} from "react";

export const CountryContext = createContext();

export default function CountryProvider( {children}) {
  const [country, setCountry] = useState(""); // country code
  const [data, setData] = useState({}); // country data
  
  function changeCountry(newCode){
    setCountry(newCode);
  }

  function updateData(newCountry){
    setData(newCountry)
  }

  return (
    <CountryContext.Provider value = { {country, changeCountry, data, updateData} } >
        { children }
    </CountryContext.Provider>
  )
}