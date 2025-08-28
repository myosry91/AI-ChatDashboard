import { Home, BarChart, Users, Settings } from "lucide-react";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", icon: <Home size={18} />, href: "#" },
    { name: "Analytics", icon: <BarChart size={18} />, href: "#" },
    { name: "Users", icon: <Users size={18} />, href: "#" },
    { name: "Settings", icon: <Settings size={18} />, href: "#" },
  ];

  return (
    <div className="h-full flex flex-col p-4">
      <div className="text-xl font-bold mb-6">AI Admin</div>
      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </nav>
    </div>
  );
}
