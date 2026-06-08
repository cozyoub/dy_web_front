import SolutionIntro from "@/components/sub/SolutionIntro";


export default function Solution01_02() {
  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-02.jpg"
          label="HR"
          description={
            <>
              사용자 중심의 NCore 인사급여 시스템,
              <br />
              전략적 인적자원관리 솔루션
            </>
          }
        />{" "}
        <div className="solution-desc">
          <p>N·Core 인사급여 시스템은 여러개 사업장(멀티 사업장)의 인적자원관리를 효율적으로 관리하기 위해 구축된 시스템이며, 업무표준화를 통합 업무 속도 개선, 일반사용자 편의성 증대, 경영자의 빠른 의사결정 지원을 위한 다양한 정보를 제공하는 시스템입니다.</p>
        </div>
        <div className="solution-detail">
          <div className="sub-inner">
            <h2 className="sub-title">상세 솔루션</h2>
            <div>아키텍처</div>
          </div>
        </div>
        <div className="solution-functions">
          <div className="item">
            <div className="img">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
