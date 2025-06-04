import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const anotherUser = " | chai aur React"

const reactElement = React.createElement(
  'a',
  {'href': 'https://google.com', 'target': '_blank'},
  'Click Me to Visit Google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  reactElement
)
