import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "../../stores/authStore";
import { ThemeToggle } from "../ui/ThemeToggle";

export function PublicLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const user = useAuthStore((s) => s.user);

  return (
    <div className="bg-brand-light dark:bg-brand-dark text-brand-black dark:text-gray-100 antialiased overflow-x-hidden min-h-screen flex flex-col transition-colors duration-200">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-brand-light/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-black rounded-lg flex items-center justify-center text-white">
                <FontAwesomeIcon icon={["fas", "memory"]} className="text-sm" />
              </div>
              <Link
                to="/"
                className="font-heading font-bold text-xl tracking-tight"
              >
                devlog<span className="text-gray-400">.ai</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="/#features"
                className="text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                className="text-sm font-medium transition-colors"
              >
                How it works
              </a>
              <a
                href="/#pricing"
                className="text-sm font-medium transition-colors"
              >
                Pricing
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle className="text-gray-600 dark:text-gray-300 dark:hover:text-white" />
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-600" />
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 bg-brand-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-lg"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                    {user?.email?.charAt(0).toUpperCase() ?? "U"}
                  </div>
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="text-sm font-medium text-brand-black hover:text-gray-600 transition-colors"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="bg-brand-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all shadow-lg"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                type="button"
                className="text-gray-600 hover:text-brand-black focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <FontAwesomeIcon icon={["fas", "bars"]} className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            mobileMenuOpen ? "max-h-[100vh]" : "max-h-0"
          } overflow-hidden md:hidden bg-brand-light dark:bg-brand-dark border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="/#features"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              How it works
            </a>
            <a
              href="/#pricing"
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Pricing
            </a>
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-black text-white rounded-lg font-medium"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                    {user?.email?.charAt(0).toUpperCase() ?? "U"}
                  </div>
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="block text-center w-full px-4 py-3 border border-gray-300 rounded-lg text-brand-black font-medium"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="block text-center w-full px-4 py-3 bg-brand-black text-white rounded-lg font-medium"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow relative pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-gray-100 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} devlog AI Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
