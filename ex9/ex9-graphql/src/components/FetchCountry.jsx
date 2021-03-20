import React, {useContext } from "react";
import {CountryContext} from "./CountryContext"
import { useQuery } from 'graphql-hooks'
import ShowCountry from "./ShowCountry"

const COUNTRY_DATA = `
query CountryData ($countryCode: ID!) {
	country(code:$countryCode){
    name
    capital
    emoji
    code
  }
}`

export default function FetchCountry() {
  const value = useContext(CountryContext);

    const { loading, error, data } = useQuery(COUNTRY_DATA, {
      variables: {
        countryCode: value.country
      }
    })
  
    if (loading) return (<div> Loading... </div> )
    if (error) {
      console.log(error)
      value.updateData({})}
    if (data) value.updateData(data.country);

  if (value.data) {
    return (
      <div>
        <ShowCountry />
      </div>
    )}
  else {
      return (<div> no valid code selected </div>)}
  }