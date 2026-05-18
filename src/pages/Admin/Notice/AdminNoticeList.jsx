import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllNotiService, deleteNotiService } from "@/services/noti.service";

export default function AdminNoticeList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotiService()
      .then((res) => setList(res.data))
      .catch(() => alert("목록 불러오기 실패"));
  }, []);

  const handleDelete = (id) => {
    if (!confirm("삭제하시겠습니까?")) return;
    deleteNotiService(id)
      .then(() => setList(list.filter((item) => item.id !== id)))
      .catch(() => alert("삭제 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>공지사항 목록</h2>
        <button
          onClick={() => navigate("/admin/notice/write")}
          className="admin-btn admin-btn-primary"
        >
          공지사항 등록
        </button>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>등록일</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.writer}</td>
                <td>{item.count}</td>
                <td>{item.createdAt?.slice(0, 10)}</td>
                <td className="admin-table-btn-cell">
                  <button
                    onClick={() => navigate(`/admin/notice/edit/${item.id}`)}
                    className="admin-btn admin-btn-secondary"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="admin-btn admin-btn-danger"
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
