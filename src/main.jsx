import { createRoot } from 'react-dom/client'
// import './index.css'
// import  'src/index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById("root"))

root.render(
  <App />
)