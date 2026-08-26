import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionMokup from "@/components/sub/SolutionMokup";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution01_02";

export default function Solution01_02() {
  const tr = useTr(en);

  const hrFeatures = [
    tr("features.items.0", "임직원/관리자 모두의 시간을 아끼는 똑똑한 셀프서비스"),
    tr("features.items.1", "오차 없이 투명하게 연동되는 스마트한 근태 관리"),
    tr("features.items.2", "종이 없는 전산화로 간편해지는 계약과 서류 관리"),
    tr("features.items.3", "성장의 방향을 짚어내는 공정하고 투명한 인사평가"),
    tr("features.items.4", "더 나은 선택을 돕는 데이터 기반의 인사 통계"),
    tr("features.items.5", "언제 어디서나 손끝에서 시작되는 모바일 HR"),
  ];

  const hrMokups = [
    {
      title: tr("mokup.items.0.title", "증명서 관리"),
      desc: (
        <>
          {tr("mokup.items.0.d1", "재직증명서부터 경력, 퇴직증명서까지.")}
          <br />
          {tr(
            "mokup.items.0.d2",
            "복잡한 결재 라인을 거치지 않아도 사용자가 신청하면 관리자 확인 후 메일로 바로 전달",
          )}
        </>
      ),
      imgSrc: "/images/sub/hr_mokup01.svg",
    },
    {
      title: tr("mokup.items.1.title", "휴가원 관리"),
      desc: (
        <>
          {tr(
            "mokup.items.1.d1",
            "구성원이 원할 때 언제 어디서나 모바일로 편하게 휴가를 신청하고 상신할 수 있습니다.",
          )}{" "}
          <br />
          {tr(
            "mokup.items.1.d2",
            "결재가 완료되면 까다로운 계산 없이 근태 데이터에 자동으로 기록되어, 관리자도 구성원도 온전히 휴식과 업무 본질에만 집중할 수 있는 환경을 제공합니다.",
          )}
        </>
      ),
      imgSrc: "/images/sub/hr_mokup02.svg",
    },
    {
      title: tr("mokup.items.2.title", "인사고과"),
      desc: (
        <>
          {tr(
            "mokup.items.2.d1",
            "1차, 2차 역량 평가 프로세스를 전산화하여 평가의 기준을 투명하고 공정하게 세우고,",
          )}{" "}
          <br />
          {tr(
            "mokup.items.2.d2",
            "구성원이 자신의 강점을 바탕으로 한 단계 더 도약할 수 있도록 종합적인 성장 등급과 리포트를 제공합니다.",
          )}
        </>
      ),
      imgSrc: "/images/sub/hr_mokup03.svg",
    },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution01-02.jpg"
          label={tr("intro.label", "HR")}
          description={
            <>
              {tr("intro.d1", "사용자 중심의 NCore 인사급여 시스템,")}
              <br />
              {tr("intro.d2", "전략적 인적자원관리 솔루션")}
            </>
          }
        />{" "}
        <SolutionFetures
          items={hrFeatures}
          title={
            <>
              {tr("features.title1", "HR, 사람 중심의 업무를")} <br />
              {tr("features.title2", "더 스마트하게")}
            </>
          }
        />
        <div className="solution-mokup-wrapper">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("mokup.title", "구성원과 조직이 함께 성장하는 스마트 HR")}</h3>
            </div>
            <div className="solution-mokup-items">
              {hrMokups.map(({ title, desc, imgSrc }, index) => (
                <SolutionMokup
                  key={index}
                  title={title}
                  desc={desc}
                  imgSrc={imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
        <SolutionNoticeCards />
      </div>
    </>
  );
}
