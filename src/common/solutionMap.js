import { MENU_LIST } from "@/common/menuData";

const solutionCategories =
  MENU_LIST.find((m) => m.title === "Solution")?.subMenu ?? [];

// 카테고리에 subMenu가 있으면 그 하위 항목들을, 없으면(예: CADMira처럼 리프 항목) 자기 자신을 솔루션 1개로 취급
const flattenSolutions = (category) =>
  category.subMenu
    ? category.subMenu.map((sol) => ({ ...sol, group: category.title }))
    : [{ ...category, group: category.title }];

// { "solution01_01": "통합경영관리 솔루션(ERP)", ..., "cadmira": "CADMira" }
export const solutionLabelMap = solutionCategories
  .flatMap(flattenSolutions)
  .reduce((acc, sol) => {
    acc[sol.path.split("/").pop()] = sol.title;
    return acc;
  }, {});

export const getSolutionLabel = (categoryCode) =>
  solutionLabelMap[categoryCode] ?? categoryCode;

// AdminNoticeWrite / AdminNoticeEdit 셀렉트박스용
export const solutionOptions = solutionCategories.flatMap(flattenSolutions).map((sol) => ({
  value: sol.path.split("/").pop(),
  label: sol.title,
  group: sol.group,
}));