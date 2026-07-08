import {
  lazy
} from "react";

const Business01 = lazy(() => import("@/pages/sub/business/Business01"));

const Service01 = lazy(() => import("@/pages/sub/service/Service01"));
const Service02 = lazy(() => import("@/pages/sub/service/Service02"));
const Service03 = lazy(() => import("@/pages/sub/service/Service03"));
const Service04 = lazy(() => import("@/pages/sub/service/Service04"));
const Service05 = lazy(() => import("@/pages/sub/service/Service05"));
const Service06 = lazy(() => import("@/pages/sub/service/Service06"));
const Service07 = lazy(() => import("@/pages/sub/service/Service07"));
const Service08 = lazy(() => import("@/pages/sub/service/Service08"));

const Solution01_01 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_01"));
const Solution01_02 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_02"));
const Solution01_03 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_03"));
const Solution01_04 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_04"));
const Solution01_05 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_05"));
const Solution01_06 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_06"));
const Solution01_07 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_07"));
const Solution01_08 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_08"));
const Solution01_09 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_09"));
const Solution01_10 = lazy(() => import("@/pages/sub/solution/solution01/Solution01_10"));

const Solution02_01 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_01"));
const Solution02_02 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_02"));
const Solution02_03 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_03"));
const Solution02_04 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_04"));
const Solution02_05 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_05"));
const Solution02_06 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_06"));
const Solution02_07 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_07"));
const Solution02_08 = lazy(() => import("@/pages/sub/solution/solution02/Solution02_08"));

const Solution03_01 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_01"));
const Solution03_02 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_02"));
const Solution03_03 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_03"));
const Solution03_04 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_04"));
const Solution03_05 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_05"));
const Solution03_06 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_06"));
const Solution03_07 = lazy(() => import("@/pages/sub/solution/solution03/Solution03_07"));

const Industry01 = lazy(() => import("@/pages/sub/industry/Industry01"))
const Industry02 = lazy(() => import("@/pages/sub/industry/Industry02"))
const Industry03 = lazy(() => import("@/pages/sub/industry/Industry03"))
const Industry04 = lazy(() => import("@/pages/sub/industry/Industry04"))

const Insight01 = lazy(() => import("@/pages/sub/insight/Insight01"))
const Insight02 = lazy(() => import("@/pages/sub/insight/Insight02"))
const Insight03 = lazy(() => import("@/pages/sub/insight/Insight03"))

const About01 = lazy(() => import("@/pages/sub/about/About01"))
const About02 = lazy(() => import("@/pages/sub/about/About02"))
const About03 = lazy(() => import("@/pages/sub/about/About03"))
const About04 = lazy(() => import("@/pages/sub/about/About04"))
const About05 = lazy(() => import("@/pages/sub/about/About05"))
const NoticeList = lazy(() => import("@/pages/sub/about/NoticeList"))
const WebzineList = lazy(() => import("@/pages/sub/about/WebzineList"))

const Contact = lazy(() => import("@/pages/sub/Contact"));

/* 공통 메뉴들 .. */
export const MENU_LIST = [{
    title: "Business",
    path: "/business",
    component: Business01
  },
  // {
  //   title: "Service",
  //   path: "/service",
  //   defaultPath:"/service/service01",
  //   subMenu: [{
  //     title: "DX/AX 컨설팅",
  //     path: "/service/service01",
  //     component:Service01
  //   }, {
  //     title: "AI Platform 구축",
  //     path: "/service/service02",
  //     component:Service02
  //   }, {
  //     title: "통합 생산시스템 구축",
  //     path: "/service/service03",
  //     component:Service03
  //   }, {
  //     title: "전사 업무시스템 구축",
  //     path: "/service/service04",
  //     component:Service04
  //   }, {
  //     title: "통합 설비관제시스템 구축",
  //     path: "/service/service05",
  //     component:Service05
  //   }, {
  //     title: "통합 물류운송관리시스템 구축",
  //     path: "/service/service06",
  //     component:Service06
  //   }, {
  //     title: "전사 ESG&ESH 시스템 구축",
  //     path: "/service/service07",
  //     component:Service07
  //   }, {
  //     title: "IT 서비스 관리시스템 구축",
  //     path: "/service/service08",
  //     component:Service08
  //   }]
  // },
  {
    title: "Soulution",
    path: "/solution",
    defaultPath: "/solution/solution01_01",
    subMenu: [{
      title: "Management",
      path: "/solution/solution01",
      defaultPath: "/solution/solution01_01",
      subMenu: [{
        title: "전사경영정보 솔루션(ERP)",
        path: "/solution/solution01_01",
        component: Solution01_01
      }, {
        title: "인사관리 솔루션(HR)",
        path: "/solution/solution01_02",
        component: Solution01_02
      }, {
        title: "재무회계 솔루션(FA)",
        path: "/solution/solution01_03",
        component: Solution01_03
      }, {
        title: "구매관리 솔루션(PMS)",
        path: "/solution/solution01_04",
        component: Solution01_04
      }, {
        title: "고객관리 솔루션(CRM)",
        path: "/solution/solution01_05",
        component: Solution01_05
      }, {
        title: "실제 원가관리 솔루션(AC)",
        path: "/solution/solution01_06",
        component: Solution01_06
      }, {
        title: "내부회계 솔루션(ICMS)",
        path: "/solution/solution01_07",
        component: Solution01_07
      }, {
        title: "렌탈 솔루션(RS)",
        path: "/solution/solution01_08",
        component: Solution01_08
      }, {
        title: "IT 서비스관리 솔루션(ITSM)",
        path: "/solution/solution01_09",
        component: Solution01_09
      }, {
        title: "그룹웨어(EKP)&메신저",
        path: "/solution/solution01_10",
        component: Solution01_10
      }]
    }, {
      title: "Manufacturing",
      path: "/solution/solution02",
      defaultPath: "/solution/solution02_01",
      subMenu: [{
        title: "통합 생산 솔루션(MES)",
        path: "/solution/solution02_01",
        component: Solution02_01
      }, {
        title: "생산스케쥴 최적화 솔루션(APS)",
        path: "/solution/solution02_02",
        component: Solution02_02
      }, {
        title: "설비관리 솔루션(CMMS)",
        path: "/solution/solution02_03",
        component: Solution02_03
      }, {
        title: "통합 설비관제 솔루션(ICS)",
        path: "/solution/solution02_04",
        component: Solution02_04
      }, {
        title: "운송관리 솔루션(TMS)",
        path: "/solution/solution02_05",
        component: Solution02_05
      }, {
        title: "환경안전 솔루션(ESH)",
        path: "/solution/solution02_06",
        component: Solution02_06
      }, {
        title: "창고관리 솔루션(WMS)",
        path: "/solution/solution02_07",
        component: Solution02_07
      }, {
        title: "에너지관리 솔루션(FEMS)",
        path: "/solution/solution02_08",
        component: Solution02_08
      }]
    }, {
      title: "DX/AX",
      path: "/solution/solution03",
      defaultPath: "/solution/solution03_01",
      subMenu: [{
        title: "통합 설비관제 AI",
        path: "/solution/solution03_01",
        component: Solution03_01
      }, {
        title: "통합 설비보전 AI",
        path: "/solution/solution03_02",
        component: Solution03_02
      }, {
        title: "생산공정 최적화 AI",
        path: "/solution/solution03_03",
        component: Solution03_03
      }, {
        title: "통합 품질관리 AI",
        path: "/solution/solution03_04",
        component: Solution03_04
      }, {
        title: "환경안전경영 AI",
        path: "/solution/solution03_05",
        component: Solution03_05
      }, {
        title: "통합 물류운송 AI",
        path: "/solution/solution03_06",
        component: Solution03_06
      }, {
        title: "기업 경영관리 AI",
        path: "/solution/solution03_07",
        component: Solution03_07
      }]
    }]
  },
  // {
  //   title: "Industry",
  //   path: "/industry",
  //   defaultPath: "/industry/industry01",
  //   subMenu:[{
  //     title:"철강",
  //     path:"/industry/industry01",
  //     component:Industry01
  //   },{
  //     title:"자동차",
  //     path:"/industry/industry02",
  //     component:Industry02
  //   },{
  //     title:"조선/플랜트",
  //     path:"/industry/industry03",
  //     component:Industry03
  //   },{
  //     title:"이차전지",
  //     path:"/industry/industry04",
  //     component:Industry04
  //   }]
  // },
  // {
  //   title:"DX/AX Insight",
  //   path:"/insight",
  //   defaultPath: "insight/insight01",
  //   subMenu:[{
  //     title:"USE CASE",
  //     path:"/insight/insight01",
  //     component:Insight01
  //   },{
  //     title:"Trend Report",
  //     path:"/insight/insight02",
  //     component:Insight02
  //   },{
  //     title:"Brochure",
  //     path:"/insight/insight03",
  //     component:Insight03
  //   }]
  // },
  {
    title: "About US",
    path: "/about",
    defaultPath: "/about/about02",
    subMenu: [
      // {
      //   title: "WHo We Are",
      //   path: "/about/about01",
      //   component: About01
      // }, 
      {
        title: "Location",
        path: "/about/about02",
        component: About02
      }, {
        title: "Career",
        path: "/about/about03",
        component: About03
      },
      //{
      //   title:"Contact Us",
      //   path:"/about/about04",
      //   component:About04
      // }
      // {
      //   title:"Help",
      //   // path:"/about/about05",
      //   // component:About05
      //   externalLink: "https://support.dkpia.com/login"
      // },
       {
        title: "Customer Center",
        externalLink: "https://support.dkpia.com/login"
      }, {
        title: "공지사항",
        path: "/about/notice",
        component: NoticeList
      },
      {
        title: "웹진",
        path: "/about/webzine",
        component: WebzineList
      }
    ]
  },
  // {
  //   title: "회사소개",
  //   path: "/about/notice",
  //   subMenu: [{
  //       title: "CEO 인사말",
  //       path: "/about/ceo"
  //     },
  //     {
  //       title: "오시는 길",
  //       path: "/about/location"
  //     },
  //     {
  //       title: "공지사항",
  //       path: "/about/notice"
  //     },
  //   ],
  // },
  // {
  //   title: "고객지원",
  //   path: "/customer/qna",
  //   subMenu: [{
  //       title: "1:1 문의",
  //       path: "/customer/qna"
  //     },
  //     {
  //       title: "데모 스크롤",
  //       path: "/customer/animation"
  //     },
  //   ],
  // },
  {
    title: "Contact",
    path: "/contact",
    component: Contact
  },
];

/* 관리자 메뉴*/
export const ADMIN_MENU_LIST = [{
    title: '공지사항 관리',
    path: '/admin/notice',
    icon: 'NoticeIcon',
    subMenu: [{
        title: '공지 목록',
        path: '/admin/notice/list'
      },
      {
        title: '공지 등록',
        path: '/admin/notice/write'
      },
    ]
  },
  {
    title: 'Contact 관리',
    path: '/admin/contact',
    icon: 'ContactIcon',
    subMenu: [{
      title: '문의 목록',
      path: '/admin/contact/list'
    }, ]
  },
  {
    title: '팝업 관리',
    path: '/admin/popup',
    icon: 'NoticeIcon',
    subMenu: [{
        title: '팝업 목록',
        path: '/admin/popup/list'
      },
      {
        title: '팝업 등록',
        path: '/admin/popup/write'
      }
    ]
  },
  {
    title: '웹진 관리',
    path: '/admin/webzine',
    icon: 'NoticeIcon',
    subMenu: [{
        title: '웹진 목록',
        path: '/admin/webzine/list'
      },
      {
        title: '웹진 등록',
        path: '/admin/webzine/write'
      }
    ]
  },
];