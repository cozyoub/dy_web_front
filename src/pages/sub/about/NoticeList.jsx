import { useEffect, useState } from "react";
import { getAllNotiService } from "@/services/noti.service";
import Pagination from "@/components/sub/Pagination";
import NoticeCard from "@/components/sub/NoticeCard";
import { solutionOptions } from "@/common/solutionMap";
import useTr from "@/hooks/useTr";
import { useTranslation } from "@/hooks/useTranslation";
import en from "@/locales/en/NoticeList";

const POST_TYPE_TABS = [
  { value: "all", labelKey: "tabs.all", label: "전체" },
  { value: "NOTICE", labelKey: "tabs.notice", label: "공지사항" },
  { value: "SOLUTION", labelKey: "tabs.solution", label: "솔루션" },
];

const PAGE_SIZE = 9;

export default function NoticeList() {
  const tr = useTr(en);
  const { menuTitle } = useTranslation();
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [sfl, setSfl] = useState("title");
  const [stx, setStx] = useState("");
  const [postType, setPostType] = useState("all");
  const [solutionFilter, setSolutionFilter] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllNotiService()
      .then((res) => {
        const sorted = [...res.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setList(sorted);
        setFiltered(sorted);
      })
      .catch(() => alert(tr("fetchFailed", "목록 불러오기 실패")));
  }, []);

  const applyFilter = (type, solution, keyword = stx, field = sfl) => {
    let result = list;

    if (type === "NOTICE") {
      result = result.filter((item) => item.postType === "NOTICE");
    } else if (type === "SOLUTION") {
      result = result.filter((item) => item.postType === "SOLUTION");
      if (solution !== "all") {
        result = result.filter((item) => item.category === solution);
      }
    }

    if (keyword.trim()) {
      result = result.filter((item) => {
        if (field === "title") return item.title.includes(keyword);
        if (field === "content") return item.content.includes(keyword);
        if (field === "both")
          return (
            item.title.includes(keyword) || item.content.includes(keyword)
          );
      });
    }

    setFiltered(result);
    setPage(1);
  };

  const handlePostTypeTab = (type) => {
    setPostType(type);
    setSolutionFilter("all");
    applyFilter(type, "all");
  };

  const handleSolutionFilter = (value) => {
    setSolutionFilter(value);
    applyFilter(postType, value);
  };

  const handleSearch = () => {
    applyFilter(postType, solutionFilter);
  };

  const handleReset = () => {
    setStx("");
    setPostType("all");
    setSolutionFilter("all");
    setPage(1);
    setFiltered(list);
  };

  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="notice-list-wrapper sub-inner">
      <div className="board-filter-bar">
        {POST_TYPE_TABS.map((tab) => (
          <button
            key={tab.value}
            className={
              "notice-filter-btn" +
              (postType === tab.value ? " is-active" : "")
            }
            onClick={() => handlePostTypeTab(tab.value)}
          >
            {tr(tab.labelKey, tab.label)}
          </button>
        ))}
      </div>

      <div className="notice-search-bar">
        <span className="notice-total">Total {filtered.length}</span>
        <div className="notice-search-inner">
          {postType === "SOLUTION" && (
            <select
              value={solutionFilter}
              onChange={(e) => handleSolutionFilter(e.target.value)}
            >
              <option value="all">{tr("allSolutions", "전체 솔루션")}</option>
              {["Management", "Manufacturing", "DX/AX"].map((group) => (
                <optgroup key={group} label={group}>
                  {solutionOptions
                    .filter((opt) => opt.group === group)
                    .map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {menuTitle({ path: `/solution/${opt.value}`, title: opt.label })}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          )}

          <select value={sfl} onChange={(e) => setSfl(e.target.value)}>
            <option value="title">{tr("sortField.title", "제목")}</option>
            <option value="content">{tr("sortField.content", "내용")}</option>
            <option value="both">{tr("sortField.both", "제목+내용")}</option>
          </select>
          <input
            type="text"
            value={stx}
            onChange={(e) => setStx(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder={tr("searchPlaceholder", "검색어")}
          />
          <button className="notice-sch-btn" onClick={handleSearch}>
            {tr("searchBtn", "검색")}
          </button>
          <button className="notice-sch-reset" onClick={handleReset}>
            ✕
          </button>
        </div>
      </div>

      <div className="notice-card-grid">
        {pageItems.length === 0 && (
          <p className="notice-empty">{tr("empty", "검색 결과가 없습니다.")}</p>
        )}
        {pageItems.map((item) => (
          <NoticeCard key={item.id} item={item} />
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