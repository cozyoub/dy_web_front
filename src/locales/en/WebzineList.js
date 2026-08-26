// 탭·필터 UI 라벨만 번역한다. 목록 데이터(DB) 자체는 국문 그대로 노출된다.
// categories 는 WEBZINE_CATEGORIES 원본 값(=DB의 category 값)과 1:1 매칭되는 표시용 라벨이다.
export default {
  all: "All",
  categories: {
    "뉴스레터": "Newsletter",
    "초대장": "Invitation",
  },
  viewAll: "View All",
  empty: "No webzines available.",
  fetchFailed: "Failed to load the list.",
};
