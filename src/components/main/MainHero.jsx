import "./MainHero.css";
export default function MainHero() {
  return (
    <>
      <div className="main-hero">
        <div className="hero-background-group">
          <div className="hero-backgroud">
            <video
            src="/images/main/motion3.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-headline-group">
            <h1 className="hero-headline">
              디지털 전환을 완성하는 새로운 방식

            </h1>
            <p className="hero-subheadline">
              현장 데이터 수집부터 ERP·MES·AI까지 연결해 
              제조운영의 디지털 전환을 완성합니다.<br/>
                흩어진 설비와 업무 데이터를 실시간 운영·분석·의사결정에 활용하고,<br/>
자율제조팩토리로 나아갈 탄탄한 기반을 마련합니다
            </p>
          </div>
          <div className="hero-cta-group">
            <a href="/contact" className="hero-cta primary border-gradient">문의하기</a>
             <a href="#" className="hero-cta secondary">구축사례</a>
          </div>
        </div>
      </div>
    </>
  );
}
