import { useEffect, useState } from "react";
import { Menu, X, Search, Moon, Sun, User, LogOut } from "lucide-react";
import "./App.css";
import { ModelsChart, RequestsChart } from "./components/Charts";
import SessionsTable from "./components/SessionsTable";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 overflow-y-auto">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <span className="font-bold text-lg">AI Admin</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-2"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-2 space-y-1">
          {["Overview", "Users", "Models", "Billing", "Settings"].map(
            (item) => (
              <button
                key={item}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-left"
              >
                <span>{item}</span>
              </button>
            )
          )}
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2"
            >
              <Menu size={22} />
            </button>
            <h1 className="hidden md:block font-semibold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Search box */}
            <div className="relative hidden md:block">
              <Search
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1 rounded-md border text-sm bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>

            {/* Dark mode toggle */}
            <button onClick={() => setDark(!dark)} className="p-2 rounded-md">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Profile dropdown (placeholder) */}
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
              <User size={18} />
              <span className="hidden md:inline">Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Welcome back 👋</h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm text-gray-500">Active Users</h3>
              <p className="text-2xl font-bold">1,240</p>
            </div>
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm text-gray-500">API Requests</h3>
              <p className="text-2xl font-bold">92,113</p>
            </div>
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <h3 className="text-sm text-gray-500">Error Rate</h3>
              <p className="text-2xl font-bold">0.41%</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 min-h-[40%] lg:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <RequestsChart />
            </div>
            <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
              <ModelsChart />
            </div>
          </div>

          {/* Sessions Table */}
          <div className="p-4 rounded-xl shadow bg-white dark:bg-gray-800">
            <h3 className="text-sm font-semibold mb-3">Recent Sessions</h3>
            <SessionsTable />
          </div>
        </main>

        {/* Footer */}
        <footer className="px-4 py-3 text-xs text-center border-t dark:border-gray-700">
          Built with React + Vite + Tailwind
        </footer>
      </div>
    </div>
  );
}

export default App;
