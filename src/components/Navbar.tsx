import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-cyan-900 h-16 flex items-center justify-between px-10 text-zinc-100 ">
      <h1 className="font-serif tracking-tight">
        Portal de <span className="text-amber-500">Ferramentas</span>
      </h1>

      <ul className="flex gap-6 font-sans text-sm">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/TaskMaster"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
            }
          >
            TaskMaster
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/ConnectHub"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
            }
          >
            ConnectHub
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/MoneyFlow"
            className={({ isActive }) =>
              isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-white"
            }
          >
            MoneyFlow
          </NavLink>
        </li>
      </ul>
    </nav>
  
  );
}

