import "./Footer.css"
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="inner tight">
                    <div className="ft-left">
                        <h1>
                            <img src="/images/logo_wh.png" alt="" />
                        </h1>
                        <ul>
                            <li><span>대표 : 김문섭</span><span>사업자등록번호 : 104-81-99352</span><span>본사 : 부산광역시 동래구 온천동 154-68 혜원빌딩 7층</span></li>
                            <li><span>TEL : 051-550-5060</span><span>FAX : 051-550-5060</span></li>
                        </ul>
                        <p>©2026 DONGYEON S&T All Rights Reserved.</p>
                    </div>
                    <div className="ft-right">
                        <ul>
                            <li><a href="#">개인정보 처리방침</a></li>
                            <li><a href="#">오시는길</a></li>  
                        </ul>
                        <a href="#">브로셔 다운로드</a>
                    </div>
                </div>
            </footer>
        </>
    )
}