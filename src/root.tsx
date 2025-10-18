import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App'
import Sha from './Sha'
import Bcrypt from './bcrypt'

function NotFound() {
  return (
    <>
      <script>location.replace('/')</script>
    </>
  )
}

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/hmac-sha-256', element: <Sha /> },
      { path: '/bcrypt', element: <Bcrypt /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
