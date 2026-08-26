import { useEffect } from "react";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/About02";

export default function About02() {
  const tr = useTr(en);
  useEffect(() => {
    const executeScript = () => {
      const scriptTag = document.createElement("script");
      const inlineScript = document.createTextNode(`
        new daum.roughmap.Lander({
  "timestamp": "1780647298677",
  "key": "2qfrew7e3tcd",
  "mapWidth": "100%",   
  "mapHeight": "300",
   "hideTitleAddress": true    
}).render();
      `);
      scriptTag.appendChild(inlineScript);
      document.body.appendChild(scriptTag);
    };

    const installScript = () => {
      var c = location.protocol == "https:" ? "https:" : "http:";
      var a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn)
        return;

      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };

      var b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.appendChild(scriptTag);
      scriptTag.onload = () => executeScript();
    };

    installScript();
  }, []);
  return (
    <>
      <div className="location-wrap">
        <div className="sub-inner">
          <div className="location-info">
            <p>{tr("address", "부산광역시 동래구 온천동 154-68 혜원빌딩 7층")}</p>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  tr("address", "부산광역시 동래구 온천동 154-68 혜원빌딩 7층"),
                )
              }
            >
              {tr("copyBtn", "주소복사")}
            </button>
          </div>
          <div className="location-btn">
            <a
              href="https://naver.me/x8DM3vYM"
              target="_blank"
              className="lc-btn01"
            >
              {tr("naver", "네이버지도")}
            </a>
            <a
              href="https://kko.to/4ayaboaCnB"
              target="_blank"
              className="lc-btn02"
            >
              {tr("kakao", "카카오맵")}
            </a>
            <a
              href="https://maps.app.goo.gl/Hg1eLAsKMbKfaxnC7"
              target="_blank"
              className="lc-btn03"
            >
              {tr("google", "구글지도")}
            </a>
          </div>
          <div className="location-map">
            <div
              id="daumRoughmapContainer1780647298677"
              className="root_daum_roughmap root_daum_roughmap_landing"
            />
          </div>
          <div className="location-trans">
            <h1 className="sub-title">{tr("transTitle", "주차 및 대중교통 안내")}</h1>
            <ul className="trans-list">
              <li>
                <i>
                  <img src="/images/sub/ico_park.png" alt="" />
                </i>
                <h5>{tr("parkingTitle", "주차장 이용안내")}</h5>
                <ul>
                  <li>{tr("parking1", "건물 주차장 이용이 가능합니다.")}</li>
                  <li>{tr("parking2", "주차 공간이 협소하므로 가급적 대중교통을 이용해 주세요.")}</li>
                </ul>
              </li>
              <li>
                <i>
                  <img src="/images/sub/ico_sub.png" alt="" />
                </i>
                <h5>{tr("subwayTitle", "지하철 이용 시")}</h5>
                <p>
                  <span className="tag tag01">{tr("subwayLine", "1호선")}</span>{" "}
                  {tr("subwayDesc", "온천장역 5번 출구에서 도보 10분")}
                </p>
              </li>
              <li>
                <i>
                  <img src="/images/sub/ico_bus.png" alt="" />
                </i>
                <h5>{tr("busTitle", "버스 이용 시")}</h5>
                <ul>
                  <li>{tr("busStop", "온천장, SK허브 스카이 하차")}</li>
                </ul>
                <p>
                  <span className="tag tag02">{tr("busLocal", "일반")}</span>
                  {tr("busLocalNumbers", "131,51,80")}
                </p>
                <p>
                  <span className="tag tag03">{tr("busExpress", "급행")}</span>
                  {tr("busExpressNumbers", "1002")}
                </p>
              </li>
            </ul>
          </div>
          <div className="location-contact">
            <div className="time-info">
              <h3>{tr("hoursTitle", "운영시간")}</h3>
              <div>
                <p>
                  <span>{tr("weekday", "평일")}</span>
                  {tr("weekdayHours", "09:00 ~ 18:00")}
                </p>
                <span>{tr("weekendNote", "주말 공휴일은 법정 공휴일입니다.")}</span>
              </div>
            </div>
            <div className="contact-info">
              <h3>{tr("contactTitle", "Contact")}</h3>
              <div>
                <p>
                  <i>
                    {" "}
                    <img src="/images/sub/ico_call.png" alt="" />
                  </i>
                  051-550-5060
                </p>
                <span>
                  <span>{tr("emailLabel", "Email")}</span>dysnt@dkpia.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
