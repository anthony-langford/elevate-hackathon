import React from 'react'
import { Router } from "@reach/router"

// Import components
import Home from './components/Home'
import Report from './components/Report'

import './styles/normalize.css'

const App = () =>
  <Router id="router">
    <Home path="/" />
    <Report path="/report" />
  </Router>

export default App