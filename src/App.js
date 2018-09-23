import React from 'react'
import { Router } from "@reach/router"

// Import components
import Home from './components/Home'
import Form from './components/Form'

import './styles/normalize.css'

const App = () =>
  <Router id="router">
    <Home path="/" />
    <Home path="/form" />
  </Router>

export default App