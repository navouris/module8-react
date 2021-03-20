import React, { useContext } from "react";
import { CountryContext } from "./CountryContext";

export default function ShowCountry() {
  const value = useContext(CountryContext);

  if (value.country) {
    return (
      <div>
        <div> {`COUNTRY: ${value.data.name} (${value.data.code})`}</div>
        <div> {"CAPITAL: " + value.data.capital}</div>
        <div style={{ fontSize: "8rem" }}> {value.data.emoji} </div>
      </div>
    );
  } else {
    return <div> no valid code selected </div>;
  }
}
