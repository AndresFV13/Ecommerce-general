import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

//Styles
import './index.css'
import Router from './routes/Router';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router/>
  </BrowserRouter>
)
