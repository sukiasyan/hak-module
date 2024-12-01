import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HakModuleApp} from './HakModuleApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HakModuleApp />
  </StrictMode>,
)
