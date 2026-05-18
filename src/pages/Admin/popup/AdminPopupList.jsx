import {
  deletePopupService,
  getAllPopupService,
} from "@/services/popup.service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPopupList() {
  const [popups, setPopups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllPopupService().then((res) => setPopups(res.data));
  }, []);

  const fetchAll = async () => {
    const res = await getAllPopupService();
    setPopups(res.data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    await deletePopupService(id);
    fetchAll();
  };

  return (
    <div className="admin-page-wrapper">
      <div className="admin-page-header">
        <h2>팝업 관리</h2>
        <button
          className="admin-btn admin-btn-primary"
          onClick={() => navigate("/admin/popup/write")}
        >
          팝업 등록
        </button>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>제목</th>
              <th>노출기간</th>
              <th>활성</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {popups.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>
                  {p.startAt?.slice(0, 10)} ~ {p.endAt?.slice(0, 10)}
                </td>
                <td>
                  <span className={`admin-status-badge ${p.isActive ? "done" : "pending"}`}>
                    {p.isActive ? "활성화" : "비활성화"}
                  </span>
                </td>
                <td className="admin-table-btn-cell">
                  <button
                    onClick={() => navigate(`/admin/popup/edit/${p.id}`)}
                    className="admin-btn admin-btn-secondary"
                  >
                    수정
                  </button>
                  <button
                    className="admin-btn admin-btn-sm admin-btn-danger"
                    onClick={() => handleDelete(p.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
