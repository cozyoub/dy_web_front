import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllNotiService } from "@/services/noti.service";
import { BASE_API_URL } from "@/common/constants";

export default function NoticeList() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sfl, setSfl] = useState("title");
  const [stx, setStx] = useState("");
  const navigate = useNavigate();
  const getThumb = (item) => {
    if (item.sfile) return `${BASE_API_URL}/uploads/${item.sfile}`;
    if (item.imageUrl) return item.imageUrl;
    return null;
  };

  useEffect(() => {
    getAllNotiService()
      .then((res) => {
        setList(res.data);
        setFiltered(res.data);
      })
      .catch(() => alert("목록 불러오기 실패"));
  }, []);

  const handleSearch = () => {
    if (!stx.trim()) {
      setFiltered(list);
      return;
    }
    const result = list.filter((item) => {
      if (sfl === "title") return item.title.includes(stx);
      if (sfl === "content") return item.content.includes(stx);
      if (sfl === "both")
        return item.title.includes(stx) || item.content.includes(stx);
    });
    setFiltered(result);
  };

  const handleReset = () => {
    setStx("");
    setFiltered(list);
  };

  return (
    <div className="notice-list-wrapper sub-inner">
      {/* <div className="notice-list-header">
        <h2>공지사항</h2>
      </div> */}

      {/* 검색 */}
      <div className="notice-search-bar">
        <span className="notice-total">Total {filtered.length}</span>
        <div className="notice-search-inner">
          <select value={sfl} onChange={(e) => setSfl(e.target.value)}>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="both">제목+내용</option>
          </select>
          <input
            type="text"
            value={stx}
            onChange={(e) => setStx(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="검색어"
          />
          <button className="notice-sch-btn" onClick={handleSearch}>
            검색
          </button>
          <button className="notice-sch-reset" onClick={handleReset}>
            ✕
          </button>
        </div>
      </div>

      <div className="notice-card-grid">
        {filtered.length === 0 && (
          <p className="notice-empty">검색 결과가 없습니다.</p>
        )}
        {filtered.map((item) => (
          <div
            key={item.id}
            className="notice-card"
            onClick={() => navigate(`/about/notice/${item.id}`)}
          >
            <div className="notice-card-thumb">
              {getThumb(item) ? (
                <img src={getThumb(item)} alt={item.title} />
              ) : (
                <div className="notice-card-thumb-default">
                    <img src="/images/logo.png" alt="" />
                </div>
              )}
            </div>
            <div className="notice-card-body">
              <p className="notice-card-title">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
