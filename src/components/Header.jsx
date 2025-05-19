import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className="bg-[#2C3A33] p-4 flex justify-center gap-8 shadow-md sticky top-0 z-50">
      {[
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/skills', label: 'Skills' },
        { to: '/contact', label: 'Contact' },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `text-[#F0EDE3] px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${
              isActive ? 'bg-lime-400 text-[#1B1E18]' : 'hover:bg-lime-600'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Header
