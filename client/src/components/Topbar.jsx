export default function Topbar({ dark, setDark, onMenuClick }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        {/* mobile button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold">AI Admin</h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setDark((v) => !v)}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600" />
      </div>
    </div>
  );
}
