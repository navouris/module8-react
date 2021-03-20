import "../styles.css";
import React from "react";
import { GraphQLClient, ClientContext } from 'graphql-hooks'

import FetchCountry from "./FetchCountry"
import SelectCode from "./SelectCode"
import CountryProvider from "./CountryContext"


const client = new GraphQLClient({
  url: 'https://countries.trevorblades.com/'
})

export default function App() {
  return (
    <ClientContext.Provider value={client}>
    <CountryProvider>
          <div className = "App">
            <SelectCode />
            <FetchCountry />
          </div>
    </CountryProvider>
    </ClientContext.Provider>
  )
}
