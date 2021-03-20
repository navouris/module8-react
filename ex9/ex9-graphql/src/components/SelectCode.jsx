import React, {useContext, useState} from "react";
import {CountryContext} from "./CountryContext"

export default function SelectCode() {
  const value = useContext(CountryContext);
  const [newCountry, setNewCountry] = useState("")

  function changeHandler(e) {
    setNewCountry(e.target.value.toUpperCase());
  }

  function submit(e){
    if (e.keyCode === 13) {
      value.changeCountry(newCountry)
      setNewCountry("")
    }
  }

  return (
    <div>
      <input type="text"  
      onChange = {changeHandler}
      placeholder = "country 2 char code..." 
      onKeyDown = {submit}
      value = {newCountry}/>
    </div>
  )
}