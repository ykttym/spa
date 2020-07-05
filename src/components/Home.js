import React from 'react'

const Home = ({staticContext}) => {
  console.log('staticContext', staticContext)
  return (
    <main>
      <h1>Home Page</h1>
      <p>{JSON.stringify(staticContext)}</p>
    </main>
  )
}
export default Home