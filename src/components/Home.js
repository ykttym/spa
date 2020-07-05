import React from 'react'
import { fetchHome } from '../core/api'

const Home = ({staticContext}) => {
  console.log('staticContext', staticContext)
  return (
    <main>
      <h1>Home Page</h1>
      <p>{JSON.stringify(staticContext)}</p>
    </main>
  )
}

Home.getData = fetchHome
export default Home