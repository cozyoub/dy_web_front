import MainSectionTitle from "./MainSectionTitle";
import "./Partner.css";
import MainTitle from "./backup/MainTitle";

const partners = [
  "partner01.png",
  "partner02.png",
  "partner03.png",
  "partner04.png",
  "partner05.png",
  "partner06.png",
  "partner07.png",
  "partner08.png",
  "partner09.png",
  "partner10.png",
  "partner11.png",
  "partner12.png",
  "partner13.png",
  "partner14.png",
  "partner15.png",
  "partner16.png",
  "partner17.png",
  "partner18.png",
  "partner19.png",
];

function IconTrack() {
  return (
    <div className="icon-track">
      {partners.map((img, idx) => (
        <div key={idx}>
          <img src={`/images/main/${img}`} alt="" />
        </div>
      ))}
    </div>
  );
}

export default function Partner() {
  return (
    <div className="Partner-wrap partner">
      <div className="inner">
         <MainSectionTitle
                className="main-process__title"
                title={
                  <>
                    <b>다양한 환경</b>에서 함께하며 <br/>검증된 역량을 보유합니다
                  </>
                }
                eyebrow={
                  <>
                    든든한 협력 파트너사들
                  </>
                }
              />
      </div>

      <div className="icon-wrapper icon-wrapper-left">
        <div className="icon-box icon-box-left">
          <IconTrack />
          <IconTrack />
        </div>
      </div>

      <div className="icon-wrapper icon-wrapper-right">
        <div className="icon-box icon-box-right">
          <IconTrack />
          <IconTrack />
        </div>
      </div>
    </div>
  );
}
