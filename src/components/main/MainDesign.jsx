import "./MainDesign.css";
import MainSectionTitle from "./MainSectionTitle";
export default function MainDesign() {
  return (
    <>
      <div className="main-design">
        <div className="inner">
          <MainSectionTitle
          reverse
            className="main-design__title"
            eyebrow={
              <>
                현장 진단부터 운영고도화까지,
                <br />
                자율제조로 가는 전과정을 함께
              </>
            }
            title={
              <>
                시스템 구축을 넘어
                <br />
                자율제조 운영의 변화를 설계합니다.
              </>
            }
          />
          <div className="main-design__content">
            <article></article>
            <div className="main-design__itm">
              <h3 className="main-design__itm-title">현장진단</h3>
              <i className="main-design__itm-ico">
                <img src="/images/main/design_ico01.svg" />
              </i>
              <p>자동화가 필요한 사무와 현장 업무를 정의하고 우선순위를 제안합니다.</p>
            </div>
            <div className="main-design__itm">
              <h3 className="main-design__itm-title">통합 구축</h3>
              <i className="main-design__itm-ico">
                <img src="/images/main/design_ico02.svg" />
              </i>
              <p>설비, 생산, 경영, AI시스템을 하나의 데이터 흐름으로 연결합니다.</p>
            </div>
            <div className="main-design__itm">
              <h3 className="main-design__itm-title">운영 고도화</h3>
              <i className="main-design__itm-ico">
                <img src="/images/main/design_ico03.svg" />
              </i>
              <p>AI 분석 결과를 권고와 제어에 활용해 자율 운영 수준을 높입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
