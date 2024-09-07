import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import quotes from './Redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={quotes}>
      <App/>
    </Provider>
)
