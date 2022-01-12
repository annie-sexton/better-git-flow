import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'
import Nav from './components/Nav/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
      <h1>Hello World</h1>
      <p>asdfasdfasdfadfasdfadsf </p>
      <p>Hello</p>
    </div>
  )
}

export default App
