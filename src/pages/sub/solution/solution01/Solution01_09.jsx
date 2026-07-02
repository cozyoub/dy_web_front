import SolutionEffect from "@/components/sub/SolutionEffect";
import SolutionIntro from "@/components/sub/SolutionIntro";

const itsmEffect = [
  {
    icon: "/images/sub/ico_effect01.svg",
    title: "체계적인 서비스 프로세스 관리",
    desc: (
      <>
        <span>SR 유형별 접수, 할당, 처리절차 구분을 통해 업무 수행 효율화</span>
        <span>
          분석/설계 프로세스의 체계적 수행을 통한 재작업 방지 및 작업 결과 추적
          관리
        </span>
      </>
    ),
  },
  {
    icon: "/images/sub/ico_effect02.svg",
    title: "실시간 서비스 프로세스 관리",
    desc: (
      <>
        <span>시영지뱔 개별화 및 시각화된 업무 대시보드 제공</span>
        <span>운영자 및 요청자 투두리스트 제공을 통한 업무 현황 파악 용이</span>
        <span>
          프로세스 네비게이션 제공을 통한 작업 상태 세분화 및 진행 현황 상세
          확인 가능
        </span>
      </>
    ),
  },
  {
    icon: "/images/sub/ico_effect06.svg",
    title: "데이터 기반 IT 운영 관리",
    desc: (
      <>
        <span>
          업무량 분석을 통해 적정 운영 산정과 불필요한 업무 개선에 활용
        </span>
        <span>SLA 준수율, 사용자 만족도 등 KPI 관리</span>
      </>
    ),
  },
];

export default function Solution01_09() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-04.jpg"
          label="ITSM"
          description={
            <>
              기업내 IT서비스요청, 문제해결, 워크플로우 등<br />
              IT 운영 전반을 자동화하고 효율적으로 관리하는 시스템
            </>
          }
        />
        <div className="itsm-panel itsm-table-wrap">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>
                N·Core ITSM <br />
                주요 프로세스
              </h3>
            </div>
            <table className="itsm-table">
              <tbody>
                <tr>
                  <td>서비스요청 관리</td>
                  <td>
                    현업에서 발생하는 정해진 서비스 요청을 단일 접점(single
                    point of contact)을 통해 신속하고 정확하게 처리
                  </td>
                </tr>
                <tr>
                  <td>변경 관리</td>
                  <td>
                    IT 변경 작업을 통제된 표준 절차를 통해 안정적으로 변경관리
                  </td>
                </tr>
                <tr>
                  <td>인시던트 관리</td>
                  <td>장애의 정확한 분류와 빠른 해결로 서비스 영향을 최소화</td>
                </tr>
                <tr>
                  <td>문제 관리</td>
                  <td>
                    반복 장애의 근본 원인을 분석하여 재발방지 정책 및 대상 설계
                    워크플로우 관리
                  </td>
                </tr>
                <tr>
                  <td>릴리즈 관리</td>
                  <td>
                    IT 서비스상의 변경사항을 배포하고 실시간 위험요소를
                    모니터링하며 업그레이드를 활용하고 이를 충족하기 위한 전략적
                    의사결정에 대한 정확하고 빠른 정보를 제공
                  </td>
                </tr>
                <tr>
                  <td>구성 관리</td>
                  <td>IT 자산 정보 구성요소들의 정보 및 관리상태 종합관리</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="itsm-panel">
          <SolutionEffect
            title="솔루션 도입 기대효과"
            desc="서비스 요청부터 운영 관리까지 표준화하여 안정적인 IT 운영 환경을 제공합니다."
            items={itsmEffect}
          />
        </div>
      </div>
    </>
  );
}
