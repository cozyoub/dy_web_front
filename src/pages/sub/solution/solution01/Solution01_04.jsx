import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";

const pmsFeatures = [
  "구매요구에서 입고까지 전단계에 걸친 첨부파일 연계를 통한 업무 효율성 향상",
  "다양한 형태의 통계 데이터 표시를 통한 실적관리 편의성 제공",
];


export default function Solution01_04() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-04.jpg"
          label="PMS"
          description={
            <>
              전사 표준 구매 프로세스를 기반으로 구매 업무의 투명성과 공정성을
              확보하고, <br />
              전자입찰·전자계약 연계를 통해 업무 효율성과 편의성을 향상시키는
              솔루션
            </>
          }
        />
        <SolutionFetures items={pmsFeatures} title={<>효율적인 구매 관리의 시작</>}/>
        <div className="pms-right-wrap">
          <div className="sub-inner">
            <h1>
              업무 프로세스 및 개발 기술력을 <br />
              갖춘 안정적인 시스템 공급
            </h1>
            <div className="pms-5right">
              <h2>구매관리 목적 5 Right</h2>
              <ul className="pms-5right-circles">
                {[
                  "공급자\nSupplier",
                  "품질\nQuality",
                  "가격\nPrice",
                  "수량\nQuantity",
                  "시간\nTime",
                ].map((item, i) => (
                  <li key={i}>
                    {item.split("\n").map((t, j) => (
                      <span key={j}>{t}</span>
                    ))}
                  </li>
                ))}
              </ul>
              <ul className="pms-5right-bullets">
                {[
                  "자재/서비스의 원활한 공급",
                  "경쟁력 있는 구매 : 시장분석 및 개선 능력",
                  "현명한 구매 : Total cost of ownership, 기업 전략",
                  "재고비용의 최소화 추구 : 노후, 단종, 멸실",
                  "협력적인 공급선의 발굴 : 공급선의 제품 구매 → 공급선의 능력 구매로의 경향",
                  "공급선과 협력관계 구축 및 유지",
                  "사내 타부서와의 협력활동 활성화",
                  "구매/공급 기능의 proactive and efficient 수행",
                ].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
