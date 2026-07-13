import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="inner">
          <div className="ft-top">
            <h1>
              <img src="/images/common/footer_logo.svg" />
            </h1>
            <ul>
              <li>
                <a href="/about/about02">오시는길</a>
              </li>
              <li>
                <a href="/sitemap">사이트맵</a>
              </li>
            </ul>
          </div>
          <div className="ft-bottom">
            <ul>
              <li>
                <ul>
                  <li>
                    <span>상호명</span>
                    <p>동연에스엔티</p>
                  </li>
                  <li>
                    <span>대표자</span>
                    <p>김문섭</p>
                  </li>
                  <li>
                    <span>사업자 등록번호</span>
                    <p>104-81-99352</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <span>전화번호</span>
                    <p>051-550-5060</p>
                  </li>
                  <li>
                    <span>대표메일</span>
                    <p>dysnt@dkpia.com</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <span>본사(지사)</span>
                    <p>부산광역시 동래구 온천장로 107번길 10</p>
                  </li>
                  <li>
                    <span>지사(서울)</span>
                    <p>서울특별시 중구 다동길 46</p>
                  </li>
                  <li>
                    <span>지사(포항)</span>
                    <p>경상북도 포항시 남구 대송로 62</p>
                  </li>
                  <li>
                    <span>지사(창원)</span>
                    <p>경상남도 창원시 의창구 차룡로 48번길 44</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
