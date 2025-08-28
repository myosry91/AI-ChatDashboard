import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

// fake data
const requestsData = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (13 - i));
  return {
    date: d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit" }),
    requests: Math.floor(6000 + Math.random() * 4000),
    latency: Math.round(200 + Math.random() * 100),
  };
});

const modelsData = [
  { model: "gpt-4", tokens: 1200000 },
  { model: "gpt-3.5", tokens: 820000 },
  { model: "llama-2", tokens: 510000 },
  { model: "mistral", tokens: 320000 },
];

export function RequestsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={requestsData} margin={{ left: 0, right: 10 }}>
        <defs>
          <linearGradient id="reqColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="date" fontSize={12} />
        <YAxis yAxisId="left" fontSize={12} />
        <YAxis yAxisId="right" orientation="right" fontSize={12} />
        <Tooltip />
        <Legend />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="requests"
          name="Requests"
          stroke="#6366f1"
          fillOpacity={1}
          fill="url(#reqColor)"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="latency"
          name="Latency (ms)"
          stroke="#10b981"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function ModelsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={modelsData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey="model" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar dataKey="tokens" name="Tokens" fill="#22c55e" />
      </BarChart>
    </ResponsiveContainer>
  );
}
