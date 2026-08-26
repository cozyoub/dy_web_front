import { MENU_LIST } from "@/common/menuData";

// { "solution01_01": "통합경영관리 솔루션(ERP)", ... }
export const solutionLabelMap = (
  MENU_LIST
    .find((m) => m.title === "Solution")
    ?.subMenu.flatMap((category) =>
      category.subMenu.map((sol) => [sol.path.split("/").pop(), sol.title]),
    ) ?? []
).reduce((acc, [key, label]) => {
  acc[key] = label;
  return acc;
}, {});

export const getSolutionLabel = (categoryCode) =>
  solutionLabelMap[categoryCode] ?? categoryCode;

// AdminNoticeWrite / AdminNoticeEdit 셀렉트박스용
export const solutionOptions =
  MENU_LIST
    .find((m) => m.title === "Solution")
    ?.subMenu.flatMap((category) =>
      category.subMenu.map((sol) => ({
        value: sol.path.split("/").pop(),
        label: sol.title,
        group: category.title,
      })),
    ) ?? [];