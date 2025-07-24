import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <nav className="p-4 bg-gray-100 text-right">
        <Link to="/" className="mr-4 text-blue-600">Board</Link>
        <Link to="/profile" className="text-blue-600">Profile</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
