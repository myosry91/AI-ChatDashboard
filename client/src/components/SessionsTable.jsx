export default function SessionsTable() {
  const sessions = [
    { id: 1, user: "Mahmoud", model: "gpt-4", latency: 231, status: "success" },
    { id: 2, user: "Aisha", model: "gpt-3.5", latency: 412, status: "error" },
    { id: 3, user: "Omar", model: "llama-2", latency: 189, status: "success" },
    { id: 4, user: "Sara", model: "mistral", latency: 356, status: "pending" },
  ];

  const statusColors = {
    success:
      "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    error: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
    pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-200 dark:border-gray-700">
            <th className="px-3 py-2">User</th>
            <th className="px-3 py-2">Model</th>
            <th className="px-3 py-2">Latency (ms)</th>
            <th className="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr
              key={s.id}
              className="border-b border-gray-100 dark:border-gray-700"
            >
              <td className="px-3 py-2">{s.user}</td>
              <td className="px-3 py-2">{s.model}</td>
              <td className="px-3 py-2">{s.latency}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    statusColors[s.status]
                  }`}
                >
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
