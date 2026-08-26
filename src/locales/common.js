/**
 * 전 페이지 공통 텍스트 (GNB / 푸터 / 반복되는 UI 라벨).
 *
 * ⚠️ CONFIRM 주석이 붙은 항목은 초벌 번역/로마자 표기입니다.
 *    회사 공식 영문 표기가 확정되면 교체해 주세요.
 */
const common = {
  ko: {
    company: {
      name: "동연에스엔티",
      ceo: "김문섭",
      bizNo: "104-81-99352",
      tel: "051-550-5060",
      email: "dysnt@dkpia.com",
    },
    footer: {
      directions: "오시는길",
      sitemap: "사이트맵",
      labelCompany: "상호명",
      labelCeo: "대표자",
      labelBizNo: "사업자 등록번호",
      labelTel: "전화번호",
      labelEmail: "대표메일",
      offices: [
        { label: "본사(지사)", address: "부산광역시 동래구 온천장로 107번길 10" },
        { label: "지사(서울)", address: "서울특별시 중구 다동길 46" },
        { label: "지사(포항)", address: "경상북도 포항시 남구 대송로 62" },
        { label: "지사(창원)", address: "경상남도 창원시 의창구 차룡로 48번길 44" },
      ],
      familySite: "패밀리사이트",
    },
    ui: {
      more: "더보기",
      viewDetail: "자세히 보기",
      prev: "이전",
      next: "다음",
      list: "목록",
      search: "검색",
      noData: "등록된 데이터가 없습니다.",
      openMenu: "메뉴 열기",
      closeMenu: "메뉴 닫기",
      selectLanguage: "언어 선택",
      goToSitemap: "사이트맵 바로가기",
      logoAlt: "로고",
    },
    // GNB/사이트맵 메뉴 제목: menuData 의 path 를 키로 덮어쓴다.
    // 국문은 menuData 원본을 그대로 쓰므로 비워 둔다.
    menu: {},
  },

  en: {
    company: {
      name: "DONGYEON S&T", // CONFIRM: 공식 영문 사명
      ceo: "KIM MUN SUB", // CONFIRM: 대표자 영문 표기
      bizNo: "104-81-99352",
      tel: "+82-51-550-5060",
      email: "dysnt@dkpia.com",
    },
    footer: {
      directions: "Directions",
      sitemap: "Sitemap",
      labelCompany: "Company",
      labelCeo: "CEO",
      labelBizNo: "Business Reg. No.",
      labelTel: "Phone",
      labelEmail: "Email",
      // CONFIRM: 영문 주소 표기 (도로명주소 영문 표기 기준 초벌)
      offices: [
        {
          label: "Headquarters",
          address: "10, Oncheonjang-ro 107beon-gil, Dongnae-gu, Busan, Korea",
        },
        {
          label: "Seoul Office",
          address: "46, Dadong-gil, Jung-gu, Seoul, Korea",
        },
        {
          label: "Pohang Office",
          address: "62, Daesong-ro, Nam-gu, Pohang-si, Gyeongsangbuk-do, Korea",
        },
        {
          label: "Changwon Office",
          address:
            "44, Charyong-ro 48beon-gil, Uichang-gu, Changwon-si, Gyeongsangnam-do, Korea",
        },
      ],
      familySite: "Family Sites",
    },
    ui: {
      more: "More",
      viewDetail: "View Details",
      prev: "Prev",
      next: "Next",
      list: "List",
      search: "Search",
      noData: "No data available.",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      selectLanguage: "Select language",
      goToSitemap: "Go to sitemap",
      logoAlt: "Logo",
    },
    // menuData 의 한글 제목을 path 기준으로 덮어쓴다.
    // path 가 없는 항목(외부링크 등)은 국문 제목을 키로 쓴다.
    menu: {
      "/solution/solution01": "Management",
      "/solution/solution01_01": "Integrated Management (ERP)",
      "/solution/solution01_02": "Human Resources (HR)",
      "/solution/solution01_03": "Finance & Accounting (FA)",
      "/solution/solution01_04": "Procurement Management (PMS)",
      "/solution/solution01_05": "Customer Relationship (CRM)",
      "/solution/solution01_06": "Actual Costing (AC)",
      "/solution/solution01_07": "Internal Accounting Control (ICMS)",
      "/solution/solution01_08": "Rental Solution (RS)",
      "/solution/solution01_09": "IT Service Management (ITSM)",
      "/solution/solution01_10": "Groupware (EKP) & Messenger",

      "/solution/solution02": "Manufacturing",
      "/solution/solution02_01": "Manufacturing Execution (MES)",
      "/solution/solution02_02": "Advanced Planning & Scheduling (APS)",
      "/solution/solution02_03": "Maintenance Management (CMMS)",
      "/solution/solution02_04": "Integrated Control System (ICS)",
      "/solution/solution02_05": "Transportation Management (TMS)",
      "/solution/solution02_06": "Environment, Safety & Health (ESH)",
      "/solution/solution02_07": "Warehouse Management (WMS)",
      "/solution/solution02_08": "Factory Energy Management (FEMS)",

      "/solution/solution03": "DX/AX",
      "/solution/solution03_01": "Integrated Facility Control AI",
      "/solution/solution03_02": "Predictive Maintenance AI",
      "/solution/solution03_03": "Process Optimization AI",
      "/solution/solution03_04": "Integrated Quality Management AI",
      "/solution/solution03_05": "Environment & Safety AI",
      "/solution/solution03_06": "Logistics & Transportation AI",
      "/solution/solution03_07": "Enterprise Management AI",

      "/about/about02": "Location",
      "/about/about03": "Career",
      "/about/notice": "News",
      "/about/webzine": "Webzine",

      // path 가 없는 외부링크 항목 — 국문 제목을 키로 사용
      "Customer Center": "Customer Center",
    },
  },
};

export default common;
