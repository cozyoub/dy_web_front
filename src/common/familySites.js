/**
 * 푸터 "패밀리사이트" 셀렉트박스에 들어갈 목록.
 * name: 국문 사이트에서 보여줄 이름
 * nameEn: 영문 사이트에서 보여줄 이름 (없으면 name 이 그대로 쓰임)
 * url 이 "#" 인 항목은 선택해도 아무 동작을 하지 않습니다.
 *
 * ⚠️ nameEn 은 회사명을 로마자 표기한 초안입니다. 공식 영문 표기가 있다면 교체해 주세요.
 */
export const FAMILY_SITES = [
  { name: "동국산업", nameEn: "Dongkuk Industries", url: "https://www.dkis.co.kr/" },
  { name: "동국S&C", nameEn: "Dongkuk S&C", url: "http://www.dongkuksnc.co.kr" },
  { name: "동국R&S", nameEn: "Dongkuk R&S", url: "http://www.dkref.co.kr" },
  { name: "디케이동신", nameEn: "DK Dongshin", url: "http://www.dkdongshin.co.kr/" },
  { name: "디케이스틸텍", nameEn: "DK Steeltec", url: "https://www.dksteeltec.com/" },
];
