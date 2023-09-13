import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DictionaryProvider } from './context/dictionary_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DictionaryProvider>
      <App />
    </DictionaryProvider>
  </React.StrictMode>,
)
