import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getAllContactService, deleteContactService, updateContactStatusService } from '@/services/contact.service';

export default function AdminContactList() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);
//   const navigate = useNavigate();

  useEffect(() => {
    getAllContactService()
      .then(res => setList(res.data))
      .catch(() => alert('목록 불러오기 실패'));
  }, []);

  const handleDelete = (id) => {
    if (!confirm('삭제하시겠습니까?')) return;
    deleteContactService(id)
      .then(() => setList(list.filter(item => item.id !== id)))
      .catch(() => alert('삭제 실패'));
  };

  const handleStatus = (id, status) => {
    updateContactStatusService(id, status)
      .then(res => {
        setList(list.map(item => item.id === id ? res.data : item));
        if (selected?.id === id) setSelected(res.data);
      })
      .catch(() => alert('상태 변경 실패'));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>문의 목록</h2>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>문의유형</th>
              <th>회사명</th>
              <th>이름</th>
              <th>이메일</th>
              <th>전화번호</th>
              <th>접수일</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {list.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.company}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone ?? '-'}</td>
                <td>{item.createdAt?.slice(0, 10)}</td>
                <td>
                  <span className={`admin-status-badge ${item.status === '완료' ? 'done' : 'pending'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="admin-table-btn-cell">
                  <button
                    className="admin-btn admin-btn-secondary"
                    onClick={() => setSelected(item)}
                  >
                    상세
                  </button>
                  <button
                    className="admin-btn admin-btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 상세 모달 */}
      {selected && (
        <div className="admin-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>문의 상세</h3>
              <button className="admin-modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="admin-modal-body">
              <div className="admin-modal-row">
                <span>문의유형</span><p>{selected.type}</p>
              </div>
              <div className="admin-modal-row">
                <span>회사명</span><p>{selected.company}</p>
              </div>
              <div className="admin-modal-row">
                <span>이름</span><p>{selected.name}</p>
              </div>
              <div className="admin-modal-row">
                <span>이메일</span><p>{selected.email}</p>
              </div>
              <div className="admin-modal-row">
                <span>전화번호</span><p>{selected.phone ?? '-'}</p>
              </div>
              <div className="admin-modal-row">
                <span>접수일</span><p>{selected.createdAt?.slice(0, 10)}</p>
              </div>
              <div className="admin-modal-row">
                <span>문의내용</span><p className="admin-modal-content">{selected.content}</p>
              </div>
            </div>
            <div className="admin-modal-footer">
              <span>처리상태</span>
              <button
                className={`admin-btn ${selected.status === '대기' ? 'admin-btn-primary' : 'admin-btn-secondary'}`}
                onClick={() => handleStatus(selected.id, selected.status === '대기' ? '완료' : '대기')}
              >
                {selected.status === '대기' ? '완료로 변경' : '대기로 변경'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}