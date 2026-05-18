import {
  getDailyVisitorsService,
  getMonthlyVisitorsService,
} from "@/services/admin.service";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Admin() {
  const [tab, setTab] = useState("daily");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchDaily = async () => {
    const res = await getDailyVisitorsService();
    setData(res.data);
  };

  const fetchMonthly = async () => {
    const res = await getMonthlyVisitorsService();
    setData(res.data);
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      if (tab === "daily") await fetchDaily();
      else await fetchMonthly();
      setLoading(false);
    };
    load();
  }, [tab]);

  return (
    <>
      <div className="admin-page-header">
        <h2>방문자 통계</h2>
      </div>

      <div>
        {/* 탭 */}
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setTab("daily")}
            style={{
              marginRight: "8px",
              padding: "8px 20px",
              backgroundColor: tab === "daily" ? "#4F46E5" : "#e5e7eb",
              color: tab === "daily" ? "white" : "black",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "17px",
            }}
          >
            일별
          </button>
          <button
            onClick={() => setTab("monthly")}
            style={{
              padding: "8px 20px",
              backgroundColor: tab === "monthly" ? "#4F46E5" : "#e5e7eb",
              color: tab === "monthly" ? "white" : "black",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "17px",
            }}
          >
            월별
          </button>
        </div>

        {/* 차트 */}
        <div
          style={{ padding: "20px", background: "#fff", borderRadius: "6px" }}
        >
          {loading ? (
            <p>불러오는 중...</p>
          ) : (
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 18, dy: 5, style: { fontSize: "14px" } }}
                />
                <YAxis
                  allowDecimals={false}
                  tick={{ fontSize: 18, dx: -5, style: { fontSize: "14px" } }}
                />
                <Tooltip formatter={(value) => [`${value}명`, "방문자"]} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#4F46E5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </>
  );
}
