import { NavLink, Outlet } from 'react-router'

export default function App() {
  return (
    <>
      <nav>
        <h2
          style={{
            padding: '0.5rem',
            maxWidth: '30rem',
            margin: 'auto',
            display: 'flex',
            gap: '1rem',
          }}
        >
          <NavLink to='/hmac-sha-256' style={{ color: 'white' }}>
            HMAC-SHA-256
          </NavLink>
          <NavLink to='/bcrypt' style={{ color: 'white' }}>
            bCrypt
          </NavLink>
        </h2>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}
