import MainSectionTitle from "./MainSectionTitle";
import "./NcoreFactoryAi.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const nodeCards = [
  {
    id: "ics",
    title: "현장 데이터 연결",
    tags: [
      { label: "ICS", href: "/solution/solution02_04" },
      { label: "FA", href: "/solution/solution01_03" },
    ],
    active: true,
    icon: (
      <svg
        width="100%"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_366_290)">
          <g opacity="0.9">
            <path
              d="M201.5 130L165.75 61.9453H94.25L58.5 130L94.25 198.055H165.75L201.5 130Z"
              stroke="white"
              stroke-opacity="0.3"
              stroke-width="3"
            />
            <path d="M130 130H201.5" stroke="#48CEFF" stroke-width="3" />
            <path
              d="M130 130L165.75 61.9453"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path
              d="M130 130L94.25 61.9453"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path d="M130 130H58.5" stroke="#48CEFF" stroke-width="3" />
            <path
              d="M130 130L94.25 198.055"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path
              d="M130 130L165.75 198.055"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path d="M201.5 130H223.6" stroke="#48CEFF" stroke-width="3" />
            <path
              d="M165.75 61.9451L176.8 41.6001"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path
              d="M94.25 61.9451L83.2 41.6001"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path d="M58.5 130H36.4" stroke="#48CEFF" stroke-width="3" />
            <path
              d="M94.25 198.055L83.2 218.4"
              stroke="#48CEFF"
              stroke-width="3"
            />
            <path
              d="M165.75 198.055L176.8 218.4"
              stroke="#48CEFF"
              stroke-width="3"
            />
          </g>
          <path
            d="M130 135.2C132.872 135.2 135.2 132.872 135.2 130C135.2 127.128 132.872 124.8 130 124.8C127.128 124.8 124.8 127.128 124.8 130C124.8 132.872 127.128 135.2 130 135.2Z"
            fill="#48CEFF"
          />
          <path
            d="M201.5 134.16C203.797 134.16 205.66 132.298 205.66 130C205.66 127.703 203.797 125.84 201.5 125.84C199.202 125.84 197.34 127.703 197.34 130C197.34 132.298 199.202 134.16 201.5 134.16Z"
            fill="#48CEFF"
          />
          <path
            d="M165.75 66.1052C168.047 66.1052 169.91 64.2427 169.91 61.9452C169.91 59.6477 168.047 57.7852 165.75 57.7852C163.452 57.7852 161.59 59.6477 161.59 61.9452C161.59 64.2427 163.452 66.1052 165.75 66.1052Z"
            fill="#48CEFF"
          />
          <path
            d="M94.25 66.1052C96.5475 66.1052 98.41 64.2427 98.41 61.9452C98.41 59.6477 96.5475 57.7852 94.25 57.7852C91.9525 57.7852 90.09 59.6477 90.09 61.9452C90.09 64.2427 91.9525 66.1052 94.25 66.1052Z"
            fill="#48CEFF"
          />
          <path
            d="M58.5 134.16C60.7975 134.16 62.66 132.298 62.66 130C62.66 127.703 60.7975 125.84 58.5 125.84C56.2025 125.84 54.34 127.703 54.34 130C54.34 132.298 56.2025 134.16 58.5 134.16Z"
            fill="#48CEFF"
          />
          <path
            d="M94.25 202.215C96.5475 202.215 98.41 200.353 98.41 198.055C98.41 195.758 96.5475 193.895 94.25 193.895C91.9525 193.895 90.09 195.758 90.09 198.055C90.09 200.353 91.9525 202.215 94.25 202.215Z"
            fill="#48CEFF"
          />
          <path
            d="M165.75 202.215C168.047 202.215 169.91 200.353 169.91 198.055C169.91 195.758 168.047 193.895 165.75 193.895C163.452 193.895 161.59 195.758 161.59 198.055C161.59 200.353 163.452 202.215 165.75 202.215Z"
            fill="#48CEFF"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_366_290"
            x="-4"
            y="0"
            width="268"
            height="268"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_366_290"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_366_290"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  {
    id: "mes",
    title: "생산 및 설비 운영",
    tags: [
      { label: "MES", href: "/solution/solution02_01" },
      { label: "CMMS", href: "/solution/solution02_03" },
    ],
    icon: (
      <svg
        width="100%"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <path
            d="M130 39L214.5 84.5L130 130L45.5 84.5L130 39Z"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            d="M130 130L214.5 175.5L130 221L45.5 175.5L130 130Z"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            d="M130 39V130"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
          <path d="M214.5 84.5V175.5" stroke="#48CEFF" stroke-width="3" />
          <path d="M45.5 84.5V175.5" stroke="#48CEFF" stroke-width="3" />
          <path
            d="M130 130V221"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
        </g>
        <path
          d="M130 43.6798C132.585 43.6798 134.68 41.5845 134.68 38.9998C134.68 36.4151 132.585 34.3198 130 34.3198C127.415 34.3198 125.32 36.4151 125.32 38.9998C125.32 41.5845 127.415 43.6798 130 43.6798Z"
          fill="#48CEFF"
        />
        <path
          d="M214.5 89.1798C217.085 89.1798 219.18 87.0845 219.18 84.4998C219.18 81.9151 217.085 79.8198 214.5 79.8198C211.915 79.8198 209.82 81.9151 209.82 84.4998C209.82 87.0845 211.915 89.1798 214.5 89.1798Z"
          fill="#48CEFF"
        />
        <path
          d="M45.5 89.1798C48.0847 89.1798 50.18 87.0845 50.18 84.4998C50.18 81.9151 48.0847 79.8198 45.5 79.8198C42.9153 79.8198 40.82 81.9151 40.82 84.4998C40.82 87.0845 42.9153 89.1798 45.5 89.1798Z"
          fill="#48CEFF"
        />
        <path
          d="M130 135.2C132.872 135.2 135.2 132.872 135.2 130C135.2 127.128 132.872 124.8 130 124.8C127.128 124.8 124.8 127.128 124.8 130C124.8 132.872 127.128 135.2 130 135.2Z"
          fill="#48CEFF"
        />
        <path
          d="M214.5 180.18C217.085 180.18 219.18 178.085 219.18 175.5C219.18 172.915 217.085 170.82 214.5 170.82C211.915 170.82 209.82 172.915 209.82 175.5C209.82 178.085 211.915 180.18 214.5 180.18Z"
          fill="#48CEFF"
        />
        <path
          d="M45.5 180.18C48.0847 180.18 50.18 178.085 50.18 175.5C50.18 172.915 48.0847 170.82 45.5 170.82C42.9153 170.82 40.82 172.915 40.82 175.5C40.82 178.085 42.9153 180.18 45.5 180.18Z"
          fill="#48CEFF"
        />
        <path
          d="M130 225.68C132.585 225.68 134.68 223.585 134.68 221C134.68 218.415 132.585 216.32 130 216.32C127.415 216.32 125.32 218.415 125.32 221C125.32 223.585 127.415 225.68 130 225.68Z"
          fill="#48CEFF"
        />
      </svg>
    ),
  },
  {
    id: "erp",
    title: "기업 경영",
    tags: [
      { label: "ERP", href: "/solution/solution01_01" },
      { label: "HR", href: "/solution/solution01_02" },
      { label: "GW", href: "/solution/solution01_10" },
      { label: "PMS", href: "/solution/solution01_04" },
    ],
    icon: (
      <svg
        width="100%"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <path
            d="M130 45.5L71.5 117"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
          <path
            d="M130 45.5L188.5 117"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
          <path d="M71.5 117L39 195" stroke="#48CEFF" stroke-width="3" />
          <path d="M71.5 117L104 195" stroke="#48CEFF" stroke-width="3" />
          <path d="M188.5 117L156 195" stroke="#48CEFF" stroke-width="3" />
          <path d="M188.5 117L221 195" stroke="#48CEFF" stroke-width="3" />
        </g>
        <path
          d="M130 51.3499C133.231 51.3499 135.85 48.7308 135.85 45.4999C135.85 42.269 133.231 39.6499 130 39.6499C126.769 39.6499 124.15 42.269 124.15 45.4999C124.15 48.7308 126.769 51.3499 130 51.3499Z"
          fill="#48CEFF"
        />
        <path
          d="M71.5 121.68C74.0847 121.68 76.18 119.585 76.18 117C76.18 114.415 74.0847 112.32 71.5 112.32C68.9153 112.32 66.82 114.415 66.82 117C66.82 119.585 68.9153 121.68 71.5 121.68Z"
          fill="#48CEFF"
        />
        <path
          d="M188.5 121.68C191.085 121.68 193.18 119.585 193.18 117C193.18 114.415 191.085 112.32 188.5 112.32C185.915 112.32 183.82 114.415 183.82 117C183.82 119.585 185.915 121.68 188.5 121.68Z"
          fill="#48CEFF"
        />
        <path
          d="M39 198.9C41.1539 198.9 42.9 197.154 42.9 195C42.9 192.846 41.1539 191.1 39 191.1C36.8461 191.1 35.1 192.846 35.1 195C35.1 197.154 36.8461 198.9 39 198.9Z"
          fill="#48CEFF"
        />
        <path
          d="M104 198.9C106.154 198.9 107.9 197.154 107.9 195C107.9 192.846 106.154 191.1 104 191.1C101.846 191.1 100.1 192.846 100.1 195C100.1 197.154 101.846 198.9 104 198.9Z"
          fill="#48CEFF"
        />
        <path
          d="M156 198.9C158.154 198.9 159.9 197.154 159.9 195C159.9 192.846 158.154 191.1 156 191.1C153.846 191.1 152.1 192.846 152.1 195C152.1 197.154 153.846 198.9 156 198.9Z"
          fill="#48CEFF"
        />
        <path
          d="M221 198.9C223.154 198.9 224.9 197.154 224.9 195C224.9 192.846 223.154 191.1 221 191.1C218.846 191.1 217.1 192.846 217.1 195C217.1 197.154 218.846 198.9 221 198.9Z"
          fill="#48CEFF"
        />
      </svg>
    ),
  },
  {
    id: "ai",
    title: "AI 및 품질",
    tags: [
      { label: "AI", href: "/solution/solution03_03" },
      { label: "Qeye", href: "/solution/solution03_04" },
    ],
    icon: (
      <svg
        width="100%"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <path
            d="M201.5 130L165.75 61.9448H94.25L58.5 130L94.25 198.055H165.75L201.5 130Z"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            d="M97.5 130L119.6 153.4L166.4 101.4"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
        </g>
        <path
          d="M165.75 66.1052C168.047 66.1052 169.91 64.2427 169.91 61.9452C169.91 59.6477 168.047 57.7852 165.75 57.7852C163.452 57.7852 161.59 59.6477 161.59 61.9452C161.59 64.2427 163.452 66.1052 165.75 66.1052Z"
          fill="#48CEFF"
        />
        <path
          d="M94.25 66.1052C96.5475 66.1052 98.41 64.2427 98.41 61.9452C98.41 59.6477 96.5475 57.7852 94.25 57.7852C91.9525 57.7852 90.09 59.6477 90.09 61.9452C90.09 64.2427 91.9525 66.1052 94.25 66.1052Z"
          fill="#48CEFF"
        />
        <path
          d="M58.5 134.16C60.7975 134.16 62.66 132.298 62.66 130C62.66 127.703 60.7975 125.84 58.5 125.84C56.2025 125.84 54.34 127.703 54.34 130C54.34 132.298 56.2025 134.16 58.5 134.16Z"
          fill="#48CEFF"
        />
        <path
          d="M201.5 134.16C203.797 134.16 205.66 132.298 205.66 130C205.66 127.703 203.797 125.84 201.5 125.84C199.202 125.84 197.34 127.703 197.34 130C197.34 132.298 199.202 134.16 201.5 134.16Z"
          fill="#48CEFF"
        />
        <path
          d="M94.25 202.215C96.5475 202.215 98.41 200.353 98.41 198.055C98.41 195.758 96.5475 193.895 94.25 193.895C91.9525 193.895 90.09 195.758 90.09 198.055C90.09 200.353 91.9525 202.215 94.25 202.215Z"
          fill="#48CEFF"
        />
        <path
          d="M165.75 202.215C168.047 202.215 169.91 200.353 169.91 198.055C169.91 195.758 168.047 193.895 165.75 193.895C163.452 193.895 161.59 195.758 161.59 198.055C161.59 200.353 163.452 202.215 165.75 202.215Z"
          fill="#48CEFF"
        />
        <path
          d="M97.5 133.9C99.6539 133.9 101.4 132.154 101.4 130C101.4 127.846 99.6539 126.1 97.5 126.1C95.3461 126.1 93.6 127.846 93.6 130C93.6 132.154 95.3461 133.9 97.5 133.9Z"
          fill="#48CEFF"
        />
        <path
          d="M119.6 157.3C121.754 157.3 123.5 155.554 123.5 153.4C123.5 151.246 121.754 149.5 119.6 149.5C117.446 149.5 115.7 151.246 115.7 153.4C115.7 155.554 117.446 157.3 119.6 157.3Z"
          fill="#48CEFF"
        />
        <path
          d="M166.4 105.3C168.554 105.3 170.3 103.554 170.3 101.4C170.3 99.2461 168.554 97.5 166.4 97.5C164.246 97.5 162.5 99.2461 162.5 101.4C162.5 103.554 164.246 105.3 166.4 105.3Z"
          fill="#48CEFF"
        />
      </svg>
    ),
  },
  {
    id: "esh",
    title: "환경 및 물류",
    tags: [
      { label: "ESH", href: "/solution/solution03_05" },
      { label: "TMS", href: "/solution/solution03_06" },
    ],
    icon: (
      <svg
        width="100%"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.9">
          <path
            d="M130 208C173.078 208 208 173.078 208 130C208 86.9218 173.078 52 130 52C86.9218 52 52 86.9218 52 130C52 173.078 86.9218 208 130 208Z"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            d="M130 208C147.949 208 162.5 173.078 162.5 130C162.5 86.9218 147.949 52 130 52C112.051 52 97.5 86.9218 97.5 130C97.5 173.078 112.051 208 130 208Z"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            d="M130 158.6C173.078 158.6 208 145.795 208 130C208 114.205 173.078 101.4 130 101.4C86.9218 101.4 52 114.205 52 130C52 145.795 86.9218 158.6 130 158.6Z"
            stroke="white"
            stroke-opacity="0.3"
            stroke-width="3"
          />
          <path d="M52 130H208" stroke="#48CEFF" stroke-width="3" />
          <path
            opacity="0.7"
            d="M39 78C99.6667 43.3333 160.333 43.3333 221 78"
            stroke="#48CEFF"
            stroke-width="3"
          />
          <path
            opacity="0.7"
            d="M39 182C99.6667 216.667 160.333 216.667 221 182"
            stroke="#48CEFF"
            stroke-width="3"
          />
        </g>
        <path
          d="M130 56.1598C132.297 56.1598 134.16 54.2973 134.16 51.9998C134.16 49.7023 132.297 47.8398 130 47.8398C127.702 47.8398 125.84 49.7023 125.84 51.9998C125.84 54.2973 127.702 56.1598 130 56.1598Z"
          fill="#48CEFF"
        />
        <path
          d="M130 212.16C132.297 212.16 134.16 210.297 134.16 208C134.16 205.702 132.297 203.84 130 203.84C127.702 203.84 125.84 205.702 125.84 208C125.84 210.297 127.702 212.16 130 212.16Z"
          fill="#48CEFF"
        />
        <path
          d="M52 134.16C54.2975 134.16 56.16 132.297 56.16 130C56.16 127.702 54.2975 125.84 52 125.84C49.7025 125.84 47.84 127.702 47.84 130C47.84 132.297 49.7025 134.16 52 134.16Z"
          fill="#48CEFF"
        />
        <path
          d="M208 134.16C210.297 134.16 212.16 132.297 212.16 130C212.16 127.702 210.297 125.84 208 125.84C205.702 125.84 203.84 127.702 203.84 130C203.84 132.297 205.702 134.16 208 134.16Z"
          fill="#48CEFF"
        />
        <path
          d="M130 134.94C132.728 134.94 134.94 132.728 134.94 130C134.94 127.272 132.728 125.06 130 125.06C127.272 125.06 125.06 127.272 125.06 130C125.06 132.728 127.272 134.94 130 134.94Z"
          fill="#48CEFF"
        />
        <path
          d="M39 81.6399C41.0103 81.6399 42.64 80.0102 42.64 77.9999C42.64 75.9895 41.0103 74.3599 39 74.3599C36.9897 74.3599 35.36 75.9895 35.36 77.9999C35.36 80.0102 36.9897 81.6399 39 81.6399Z"
          fill="#48CEFF"
        />
        <path
          d="M221 81.6399C223.01 81.6399 224.64 80.0102 224.64 77.9999C224.64 75.9895 223.01 74.3599 221 74.3599C218.99 74.3599 217.36 75.9895 217.36 77.9999C217.36 80.0102 218.99 81.6399 221 81.6399Z"
          fill="#48CEFF"
        />
        <path
          d="M39 185.64C41.0103 185.64 42.64 184.01 42.64 182C42.64 179.99 41.0103 178.36 39 178.36C36.9897 178.36 35.36 179.99 35.36 182C35.36 184.01 36.9897 185.64 39 185.64Z"
          fill="#48CEFF"
        />
        <path
          d="M221 185.64C223.01 185.64 224.64 184.01 224.64 182C224.64 179.99 223.01 178.36 221 178.36C218.99 178.36 217.36 179.99 217.36 182C217.36 184.01 218.99 185.64 221 185.64Z"
          fill="#48CEFF"
        />
      </svg>
    ),
  },
];

const platformItems = [
  "표준 연동 커넥터",
  "데이터 수집 및 정제",
  "데이터 모델 및 저장소",
  "보안 및 권한 관리",
  "모니터링 및 알람",
  "API 및 확장 연동",
];

export default function NcoreFactoryAi() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 851px)", () => {
        gsap.set(".nf-card", { opacity: 0, y: 60 });
        gsap.to(".nf-card", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".nf-card-row",
            start: "top 80%",
            once: true,
          },
        });

        const cardEls = gsap.utils.toArray(".nf-card");
        const allLines = [];
        const allDots = [];

        cardEls.forEach((card, i) => {
          const iconWrap = card.querySelector(".nf-card-icon-wrap");
          const lines = iconWrap.querySelectorAll("path[stroke]");
          const dots = iconWrap.querySelectorAll("path[fill]:not([stroke])");

          allLines.push(...lines);
          allDots.push(...dots);

          lines.forEach((path) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
          });
          gsap.set(dots, { opacity: 0, scale: 0, transformOrigin: "center" });

          ScrollTrigger.create({
            trigger: card,
            start: "top 80%",
            once: true,
            onEnter: () => {
              const tl = gsap.timeline({ delay: 0.15 + i * 0.1 });

              tl.to(lines, {
                strokeDashoffset: 0,
                duration: 1.1,
                ease: "power2.inOut",
                stagger: 0.025,
              }).to(
                dots,
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.35,
                  ease: "back.out(2)",
                  stagger: 0.02,
                },
                "-=0.3",
              );
            },
          });
        });

        gsap.set([".nf-platform-bar", ".nf-pill"], { opacity: 0, y: 40 });
        gsap.to(".nf-platform-bar", {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".ncore-factory-diagram",
            start: "top 60%",
            once: true,
          },
        });
        gsap.to(".nf-pill", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".ncore-factory-diagram",
            start: "top 55%",
            once: true,
          },
        });
        gsap.to(".ncore-factory-diagram", {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: ".ncore-factory-diagram",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.set(".nf-card-bg-wrap", { xPercent: -50 });
        gsap.to(".nf-card-bg-wrap", {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: ".ncore-factory-diagram",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        return () => {
          gsap.set(".nf-card", { clearProps: "opacity,transform" });
          gsap.set([".nf-platform-bar", ".nf-pill"], {
            clearProps: "opacity,transform",
          });
          gsap.set(allDots, { clearProps: "opacity,transform" });

          allLines.forEach((path) => {
            path.style.strokeDasharray = "";
            path.style.strokeDashoffset = "";
          });
        };
      });

      gsap.utils.toArray(".nf-card-icon-wrap").forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? 8 : -8,
          duration: 2.5 + (i % 3) * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="ncore-factory-ai" ref={rootRef}>
      <MainSectionTitle
        eyebrow={<>현장 데이터 수집부터 자동화까지</>}
        title={
          <>
            자율제조팩토리를 완성하는 <br />
            <b>N·Core Factory AI</b>
          </>
        }
      />
      <div className="ncore-factory-diagram-wrap">
        <div className="ncore-factory-diagram ">
          <div className="nf-card-bg-wrap">
            <img src="/images/main/ncore_factory_bg.svg" />
          </div>
          <div className="nf-card-row ">
            {nodeCards.map((card) => (
              <div key={card.id} className={`glass-effect nf-card`}>
                <p className="nf-card-title">{card.title}</p>
                <div className="nf-card-icon-wrap">{card.icon}</div>
                <div className="nf-card-tags">
                  {card.tags.map((tag) => (
                    <Link key={tag.label} to={tag.href} className="nf-tag">
                      {tag.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                      >
                        <path
                          d="M1.66667 15C1.20833 15 0.815972 14.8368 0.489583 14.5104C0.163194 14.184 0 13.7917 0 13.3333V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H7.5V1.66667H1.66667V13.3333H13.3333V7.5H15V13.3333C15 13.7917 14.8368 14.184 14.5104 14.5104C14.184 14.8368 13.7917 15 13.3333 15H1.66667ZM5.58333 10.5833L4.41667 9.41667L12.1667 1.66667H9.16667V0H15V5.83333H13.3333V2.83333L5.58333 10.5833Z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="nf-platform-bar glass-effect">
            <span className="nf-platform-logo">
              <img src="/images/common/ncore_wh.svg" />
            </span>
            <span className="nf-platform-text">통합 데이터 플랫폼</span>
          </div>

          <div className="nf-platform-pills glass-effect">
            {platformItems.map((item) => (
              <span key={item} className="nf-pill glass-effect">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
