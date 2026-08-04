import MainSectionTitle from "./MainSectionTitle";
import "./NcoreConnectDiagram.css";

const PROCESS = [
  {
    no: "01",
    title: "사무업무 자동화",
    desc: "자료를 분류하고 입력하며 보고서 작성과 반복 업무를 자동화합니다.",
  },
  {
    no: "02",
    title: "AI 품질 검사",
    desc: "AI 비전이 제품 상태를 판정하고 품질검사를 자동화합니다.",
  },
  {
    no: "03",
    title: "이상감지·정비권고",
    desc: "AI가 지상 징후를 감지하고 점검과 정비 시점을 권고합니다.",
  },
  {
    no: "04",
    title: "실시간 통합관제",
    desc: "현장 데이터를 자동 수집하여 실시간으로 통합 관제합니다.",
  },
  {
    no: "05",
    title: "데이터 기반 의사결정",
    desc: "AI가 업무 데이터를 분석하고 필요한 정보와 대응 방향을 제안합니다.",
  },
];

export default function NcoreConnectDiagram() {
  return (
    <div className="ncore-connect">
      <article></article>
      <div className="rotate-bg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1230 1230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="1229"
            height="1229"
            rx="614.5"
            stroke="white"
            strokeOpacity="0.3"
            strokeDasharray="10 10"
          />
          <g className="orb orb1">
            <rect
              x="1036"
              y="171"
              width="20"
              height="20"
              rx="10"
              fill="#48CEFF"
            />
            <rect
              x="1031"
              y="166"
              width="30"
              height="30"
              rx="15"
              stroke="#67E8F9"
              strokeDasharray="3 3"
            />
          </g>
          <g className="orb orb2">
            <rect
              x="83"
              y="929"
              width="20"
              height="20"
              rx="10"
              fill="#48CEFF"
            />
            <rect
              x="78"
              y="924"
              width="30"
              height="30"
              rx="15"
              stroke="#67E8F9"
              strokeDasharray="3 3"
            />
          </g>
        </svg>
      </div>

      <div className="ncore-connect-inner">
        <MainSectionTitle
          eyebrow="하나로 연결되는 스마트 팩토리 솔루션"
          title={
            <>
              사무업무부터 실시간 관제, 의사결정까지
              <br />
              <b>N·Core</b>가 하나로 연결합니다
            </>
          }
        />
        <ul className="process-wrap">
          {PROCESS.map((item) => (
            <li className="cir" key={item.no}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="387"
                height="387"
                viewBox="0 0 387 387"
              >
                <g fill="none" stroke="#fff" strokeWidth="1">
                  <circle cx="193.5" cy="193.5" r="193" fill="none" />
                </g>
              </svg>
              <div className="txt">
                <span className="txt-no">{item.no}</span>
                <h3 className="txt-title">{item.title}</h3>
                <p
                  className="txt-desc"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}
