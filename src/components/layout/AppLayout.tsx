import { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "../../stores/authStore";
import { ThemeToggle } from "../ui/ThemeToggle";
import { cn } from "../../lib/utils";

const navItems = [
  { to: "/dashboard", icon: "chart-line", label: "Dashboard" },
  { to: "/worklog", icon: "plus", label: "Work Log" },
  { to: "/knowledge", icon: "magnifying-glass", label: "Knowledge" },
  { to: "/timeline", icon: "clock", label: "Timeline" },
  { to: "/insights", icon: "chart-bar", label: "Insights" },
] as const;

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <div className="bg-gray-50 dark:bg-[#0B0B0F] min-h-screen transition-colors duration-200">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#121217]/95 border-r border-gray-200 dark:border-white/5 z-30 transform transition-transform duration-300",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-black rounded-lg flex items-center justify-center">
                <FontAwesomeIcon
                  icon={["fas", "memory"]}
                  className="text-white text-sm"
                />
              </div>
              <h1 className="font-heading font-bold text-xl tracking-tight text-gray-900 dark:text-white">devlog<span className="text-gray-400">.ai</span></h1>
            </Link>
            <button
              type="button"
              className="lg:hidden text-gray-400 hover:text-gray-600"
              onClick={() => setSidebarOpen(false)}
            >
              <FontAwesomeIcon icon={["fas", "xmark"]} className="text-lg" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors",
                    isActive
                      ? " bg-gray-50"
                      : "text-gray-700 dark:text-white",
                  )
                }
              >
                <FontAwesomeIcon
                  icon={["fas", item.icon]}
                  className="w-5 text-center"
                />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* User Profile */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
            <div className="w-8 h-8 rounded-full bg-gray-600 text-white dark:bg-white flex items-center justify-center dark:text-dark text-xs">
              {user?.email?.charAt(0).toUpperCase() ?? "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {user?.email ?? "User"}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="text-gray-400 hover:text-gray-600"
              title="Sign out"
            >
              <FontAwesomeIcon
                icon={["fas", "right-from-bracket"]}
                className="text-sm"
              />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-[#0B0B0F]/80 dark:backdrop-blur-md border-b border-gray-200 dark:border-white/5 px-4 lg:px-8 py-4 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="lg:hidden text-gray-600 hover:text-gray-900"
                onClick={() => setSidebarOpen(true)}
              >
                <FontAwesomeIcon icon={["fas", "bars"]} className="text-xl" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search work logs..."
                  className="w-80 pl-10 pr-4 py-2 border border-gray-300 dark:border-white/10 rounded-lg text-sm bg-white dark:bg-[#121217] dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                />
                <FontAwesomeIcon
                  icon={["fas", "magnifying-glass"]}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                />
              </div>
              <ThemeToggle className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FontAwesomeIcon icon={["fas", "bell"]} className="text-xl" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
