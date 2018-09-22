import React from 'react'
import { Router } from "@reach/router"

// Import components
import Home from './components/Home'

import './styles/normalize.css'

const App = () =>
  <Router id="router">
    <Home path="/" />
  </Router>

export default App