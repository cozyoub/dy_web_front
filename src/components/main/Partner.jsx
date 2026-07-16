import "./Partner.css";
import MainTitle from "./MainTitle";

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
        <MainTitle
          title={
            <>
              함께하는 <span>파트너사</span>
            </>
          }
          desc="산업을 선도하는 기업들이 동연에스엔티와 함께합니다."
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
