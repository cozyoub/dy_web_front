import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getWebzineByIdService } from "@/services/webzine.service";
import { formatIssueLabel } from "@/common/webzineUtils";
import { BASE_API_URL } from "@/common/constants";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const fixImagePaths = (html) => {
  if (!html) return html;
  return html.replace(/src="\/uploads\//g, `src="${BASE_API_URL}/uploads/`);
};

const getDetailLabel = (item) => {
  if (item.category === "초대장") return item.title;
  return item.publishedDate ? formatIssueLabel(item.publishedDate) : item.title;
};

// content가 완전한 HTML 문서(<html ...> 로 시작)인지 판별
// 에디터로 작성한 글은 <p>, <img> 등 조각 HTML/마크다운이라 이 조건에 안 걸림
const isRawHtmlDocument = (html) => {
  if (!html) return false;
  return /^\s*<(!doctype|html)/i.test(html);
};

export default function WebzineDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getWebzineByIdService(id)
      .then((res) => setItem(res.data))
      .catch(() => alert("불러오기 실패"));
  }, [id]);

  if (!item) return <div className="webzine-loading">로딩 중...</div>;

  const rawHtml = isRawHtmlDocument(item.content);

  return (
    <div className="board-detail-wrapper sub-inner">
      <div className="board-detail-header">
        {item.category && (
          <span className="board-detail-category">{item.category}</span>
        )}
        <h2>{getDetailLabel(item)}</h2>
        <div className="board-detail-meta">
          <span>{item.publishedDate ?? item.createdAt?.slice(0, 10)}</span>
          <span>조회 {item.count}</span>
        </div>
      </div>

      <div className="board-detail-content">
        {rawHtml ? (
          // 표 기반 뉴스레터 등 완전한 HTML 문서는 iframe으로 그대로 렌더링
          // (사이트 전역 CSS와 충돌 없이, 원본 레이아웃 그대로 보여줌)
          <iframe
            title={getDetailLabel(item)}
            srcDoc={item.content}
            style={{
              width: "100%",
              minHeight: "1200px",
              border: "none",
              display: "block",
            }}
            onLoad={(e) => {
              try {
                const doc = e.target.contentDocument;
                if (doc) {
                  const h = doc.documentElement.scrollHeight;
                  e.target.style.height = `${h}px`;
                }
              } catch {
                // cross-origin 등으로 접근 안 되면 기본 높이 유지
              }
            }}
          />
        ) : (
          <Viewer initialValue={fixImagePaths(item.content)} />
        )}
      </div>

      {item.ofile && (
        <div className="board-detail-file">
          첨부파일:
          
            <a href={`${BASE_API_URL}/uploads/webzine/${item.sfile}`}
            download={item.ofile}
          >
            {item.ofile}
          </a>
        </div>
      )}

      <div className="board-detail-footer">
        <button
          className="board-back-btn"
          onClick={() => navigate("/about/webzine")}
        >
          목록으로
        </button>
      </div>
    </div>
  );
}