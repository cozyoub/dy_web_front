import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllWebzineService } from "@/services/webzine.service";
import { BASE_API_URL } from "@/common/constants";
import { WEBZINE_CATEGORIES } from "@/common/webzineCategories";
import Pagination from "@/components/sub/Pagination";
import { formatIssueLabel } from "@/common/webzineUtils";

const PAGE_SIZE = 9;

export default function WebzineList() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");
  const [issue, setIssue] = useState("all");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const getThumb = (item) => {
    if (item.sfile) return `${BASE_API_URL}/uploads/webzine/${item.sfile}`;
    if (item.imageUrl) return item.imageUrl;
    return null;
  };

  useEffect(() => {
    getAllWebzineService()
      .then((res) => {
        // 최신순 정렬: 발행일(publishedDate) 우선, 없으면 등록일(createdAt) 기준
        const sorted = [...res.data].sort((a, b) => {
          const dateA = new Date(a.publishedDate ?? a.createdAt);
          const dateB = new Date(b.publishedDate ?? b.createdAt);
          return dateB - dateA;
        });
        setList(sorted);
        setFiltered(sorted);
      })
      .catch(() => alert("목록 불러오기 실패"));
  }, []);

  const categories = ["all", ...WEBZINE_CATEGORIES];
  const issues = [...list]
    .filter((item) => item.publishedDate)
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (v) =>
            formatIssueLabel(v.publishedDate) ===
            formatIssueLabel(item.publishedDate),
        ),
    );

  const applyFilter = (cat, issueValue) => {
    let result = list;

    if (cat !== "all") {
      result = result.filter((item) => item.category === cat);
    }

    if (issueValue !== "all") {
      result = result.filter(
        (item) => formatIssueLabel(item.publishedDate) === issueValue,
      );
    }

    setFiltered(result);
    setPage(1);
  };

  const handleCategoryFilter = (cat) => {
    setCategory(cat);
    applyFilter(cat, issue);
  };

  const handleIssueFilter = (value) => {
    setIssue(value);
    applyFilter(category, value);
  };

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="webzine-list-wrapper sub-inner">
      <div className="webzine-filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              "webzine-filter-btn" + (category === cat ? " is-active" : "")
            }
            onClick={() => handleCategoryFilter(cat)}
          >
            {cat === "all" ? "전체" : cat}
          </button>
        ))}
      </div>

      <div className="webzine-filter-issue">
        <span className="webzine-total">Total {filtered.length}</span>
        <select
          value={issue}
          onChange={(e) => handleIssueFilter(e.target.value)}
        >
          <option value="all">전체보기</option>

          {issues.map((item) => (
            <option
              key={item.publishedDate}
              value={formatIssueLabel(item.publishedDate)}
            >
              {formatIssueLabel(item.publishedDate)}
            </option>
          ))}
        </select>
      </div>

      <div className="webzine-card-grid">
        {pageItems.length === 0 && (
          <p className="webzine-empty">등록된 웹진이 없습니다.</p>
        )}
        {pageItems.map((item) => (
          <div
            key={item.id}
            className="webzine-card"
            onClick={() => navigate(`/about/webzine/${item.id}`)}
          >
            <div className="webzine-card-thumb">
              {getThumb(item) ? (
                <img src={getThumb(item)} alt={formatIssueLabel(item.publishedDate)} />
              ) : (
                <div className="webzine-card-thumb-default">
                  <img src="/images/common/logo.svg" alt="" />
                </div>
              )}
            </div>
            <div className="webzine-card-body">
              <span className="webzine-card-issue">
                {formatIssueLabel(item.publishedDate)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        page={page}
        totalItems={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />
    </div>
  );
}