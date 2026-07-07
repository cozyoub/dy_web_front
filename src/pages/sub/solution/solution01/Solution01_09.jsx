import SolutionFlow from "@/components/sub/SoluitionFlow";
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
        <div className="itsm-process">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>ITSM 주요 프로세스</h3>
            </div>
            <ul className="pr-list">
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico01.svg" alt="" />
                </i>
                <div className="text">
                  <h3>서비스 요청 관리</h3>
                  <ul>
                    <li>
                      현업에서 발생하는 장애와 서비스 요청을 단일 접점을 통해
                      신속하고 정화하게 처리
                    </li>
                    <li>반복 업무의 자동화 및 효율화</li>
                    <li>처리 경과에 대해 사용자에게 실시간 모니터링 제공</li>
                  </ul>
                </div>
              </li>
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico02.svg" alt="" />
                </i>
                <div className="text">
                  <h3>변경 관리</h3>
                  <ul>
                    <li>
                      IT 변경 작업을 통제된 표준 방법과 절차를 통해 안전하게
                      수행
                    </li>
                    <li>변경에 관련된 장애 예방과 실패 최소화</li>
                  </ul>
                </div>
              </li>
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico03.svg" alt="" />
                </i>
                <div className="text">
                  <h3>인시던트 관리</h3>
                  <ul>
                    <li>예기치 않은 장애에 최대한 빠르게 서비스 운영 정상화</li>
                    <li>장애에 의한 비즈니스 영향을 최소화</li>
                  </ul>
                </div>
              </li>
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico04.svg" alt="" />
                </i>
                <div className="text">
                  <h3>문제 관리</h3>
                  <ul>
                    <li>
                      반복 장애에 대한 근본적은 원인을 해결하여 장애 재 발생
                      방지
                    </li>
                    <li>비즈니스 가용성 최대화</li>
                  </ul>
                </div>
              </li>
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico05.svg" alt="" />
                </i>
                <div className="text">
                  <h3>릴리즈 관리</h3>
                  <ul>
                    <li>변경에 대한 추적가능성</li>
                    <li>적법한 권한에 의해 테스트를 거쳐 배포가 이행</li>
                  </ul>
                </div>
              </li>
              <li className="pr-itm">
                <i>
                  <img src="/images/sub/itsm-ico06.svg" alt="" />
                </i>
                <div className="text">
                  <h3>구성 관리</h3>
                  <ul>
                    <li>IT 자산 및 구성 정보의 정확성 유지</li>
                    <li>변경, 장애, 문제 관리의 기반 데이터 제공</li>
                    <li>서비스 안정성과 통제력 강화</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="itsm-panel">
          <SolutionEffect
            title="솔루션 주요기능"
            desc="서비스 요청부터 운영 관리까지 표준화하여 안정적인 IT 운영 환경을 제공합니다."
            items={itsmEffect}
          />
        </div>

        <div className="itsm-support">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>ITSM Support</h3>
            </div>
            <div className="itsm-sp-top">
              <div className="sp-top-itm">
                <h3>인시던트 관리</h3>
                <ul>
                  <li>OA 장애 및 문의</li>
                  <li>시스템, 서비스 장애 및 문의</li>
                </ul>
              </div>
              <div className="sp-top-itm">
                <h3>이전설치 관리</h3>
                <ul>
                  <li>OA 이전 설치</li>
                  <li>Networs 이전 설치</li>
                  <li>전산공사</li>
                </ul>
              </div>
            </div>
            <div className="itsm-sp-middle">
              <h3>Business 전략</h3>
              <ul>
                <li>서비스 요청</li>
                <li>자체 업무 등록</li>
              </ul>
            </div>
            <div className="itsm-sp-middle">
              <h3>전문화된 IT 서비스 조직</h3>
              <ul>
                <li>
                  <h3>변경 / 릴리즈 관리</h3>
                  <div>
                    <p>APP 변경 / 릴리즈</p>
                    <p>데이터 변경</p>
                    <p>Infra 변경 </p>
                  </div>
                </li>
                <li>
                  {" "}
                  <h3>장애 / 문제 관리</h3>
                </li>
                <li>
                  <h3>기타 업무 관리</h3>
                  <div>
                    <p>자료 출력</p>
                    <p>기획 조사</p>
                    <p>신청 관리</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="itsm-delivery">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>ITSM Service Delivery</h3>
            </div>
            <ul className="dl-list">
              <li className="dl-itm">
                <h3>일상점검</h3>
                <div>
                  <p>정기 점검</p>
                  <p>아침 / 퇴근 점검</p>
                </div>
              </li>
               <li className="dl-itm">
                <h3>Job 스케쥴 관리</h3>
                <div>
                  <p>배치 작업</p>
                  <p>정기 작업</p>
                  <p>이벤트 업무</p>
                </div>
              </li>
               <li className="dl-itm">
                <h3>재해복구 시스템 운영</h3>
                <div>
                  <p>평상시 운영(정합성 점검)</p>
                </div>
              </li>
               <li className="dl-itm">
                <h3>전산센터 운영</h3>
                <div>
                  <p>시설 점검</p>
                </div>
              </li>
               <li className="dl-itm">
                <h3>데이터 백업</h3>
                <div>
                  <p>백업 및 소산</p>
                </div>
              </li>
               <li className="dl-itm">
                <h3>모니터링</h3>
                <div>
                  <p>서버, 네트워크</p>
                  <p>Application</p>
                  <p>데이터</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="itsm-cooperation">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>IT 협업 환경</h3>
            </div>
            <div className="capture-img">
              <img src="/images/sub/itsm-cooperation.png" alt="" />
            </div>
          </div>
        </div>
        <div className="itsm-result">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>IT 성과측정</h3>
            </div>
            <div className="capture-img">
              <img src="/images/sub/itsm-result.png" alt=""/>
            </div>
          </div>
        </div>
        <SolutionFlow title="N·Core ITSM 구성도" imgSrc="/images/sub/itsm-flow01.png"/>
        <SolutionFlow title="N·Core ITSM SW 변경(개발) 프로세스" imgSrc="/images/sub/itsm-flow02.png"/>
      </div>
    </>
  );
}
