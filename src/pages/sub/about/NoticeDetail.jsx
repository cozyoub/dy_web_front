import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNotiByIdService } from '@/services/noti.service';
import { BASE_API_URL } from '@/common/constants';
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

export default function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getNotiByIdService(id)
      .then(res => setItem(res.data))
      .catch(() => alert('불러오기 실패'));
  }, [id]);

  if (!item) return <div className="board-loading">로딩 중...</div>;

  return (
    <div className="board-detail-wrapper sub-inner">
      <div className="board-detail-header">
        <h2>{item.title}</h2>
        <div className="board-detail-meta">
          <span>{item.writer}</span>
          <span>{item.createdAt?.slice(0, 10)}</span>
          <span>조회 {item.count}</span>
        </div>
      </div>

      {/* {item.sfile && (
        <div className="board-detail-thumb">
          <img src={`${BASE_API_URL}/uploads/${item.sfile}`} alt={item.title} />
        </div>
      )} */}

      <div className="board-detail-content">
        {/* {item.content} */}
        <Viewer initialValue={item.content} />
      </div>

      {item.ofile && (
        <div className="board-detail-file">
          첨부파일:
          <a href={`${BASE_API_URL}/uploads/${item.sfile}`} download={item.ofile}>
            {item.ofile}
          </a>
        </div>
      )}

      <div className="board-detail-footer">
        <button className="board-back-btn" onClick={() => navigate('/about/notice')}>
          목록으로
        </button>
      </div>
    </div>
  );
}