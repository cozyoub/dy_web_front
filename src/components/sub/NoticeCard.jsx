import { useNavigate } from "react-router-dom";
import { BASE_API_URL } from "@/common/constants";
import { getSolutionLabel } from "@/common/solutionMap";

export default function NoticeCard({ item }) {
  const navigate = useNavigate();

  const getThumb = () => {
    if (item.imageUrl) {
      return item.imageUrl.startsWith("http")
        ? item.imageUrl
        : `${BASE_API_URL}${item.imageUrl}`;
    }
    return null;
  };

  return (
    <div
      className="notice-card"
      onClick={() => navigate(`/about/notice/${item.id}`)}
    >
      <div className="notice-card-thumb">
        {getThumb() ? (
          <img src={getThumb()} alt={item.title} />
        ) : (
          <div className="notice-card-thumb-default">
            <img src="/images/common/logo.svg" alt="" />
          </div>
        )}
      </div>
      <div className="notice-card-body">
        <div className="notice-card-tags">
          {item.postType === "NOTICE" ? (
            <span className="notice-card-tag notice-card-tag-notice">
              공지사항
            </span>
          ) : (
            <>
              {item.category && (
                <span className="notice-card-tag notice-card-tag-solution">
                  {getSolutionLabel(item.category)}
                </span>
              )}
              {item.categoryType && (
                <span className="notice-card-tag notice-card-tag-type">
                  {item.categoryType}
                </span>
              )}
            </>
          )}
        </div>
        <p className="notice-card-title">{item.title}</p>
      </div>
    </div>
  );
}