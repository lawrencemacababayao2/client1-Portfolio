import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import './index.css'
import Portfolio from './pages/Portfolio';


const router = createBrowserRouter([
  {
  path: '/', 
  element: <Portfolio/>,
  errorElement: <div>404 Not Found</div>, //this part if mali imong gi type sa localhostname mao ni ang error na mogawas
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
