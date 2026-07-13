import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllWebzineService,
  deleteWebzineService,
} from "@/services/webzine.service";
import { formatIssueLabel } from "@/common/webzineUtils";

export default function AdminWebzineList() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllWebzineService()
      .then((res) => setList(res.data))
      .catch(() => alert("목록 불러오기 실패"));
  }, []);

  const handleDelete = (id) => {
    if (!confirm("삭제하시겠습니까?")) return;
    deleteWebzineService(id)
      .then(() => setList(list.filter((item) => item.id !== id)))
      .catch(() => alert("삭제 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>웹진 목록</h2>
        <button
          onClick={() => navigate("/admin/webzine/write")}
          className="admin-btn admin-btn-primary"
        >
          웹진 등록
        </button>
      </div>
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>발행호</th>
              <th>카테고리</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>발행일</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{formatIssueLabel(item.publishedDate)}</td>
                <td>{item.category}</td>
                <td>{item.title}</td>
                <td>{item.writer}</td>
                <td>{item.count}</td>
                <td>{item.publishedDate ?? item.createdAt?.slice(0, 10)}</td>
                <td className="admin-table-btn-cell">
                  <button
                    onClick={() => navigate(`/admin/webzine/edit/${item.id}`)}
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