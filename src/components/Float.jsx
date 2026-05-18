export default function Float() {
  return (
    <>
      <div className="fixed-util">
        <div className="go-inquiry">
          <a href="/customer/qna" title="">
            <img src="/images/ico-inquiry.png" alt="" />
          </a>
          <span className="deco" aria-hidden="true"></span>
        </div>
        <div className="go-top">
          <img src="/images/ico-up.png" alt="" />
        </div>
      </div>
      <style>{`
                .fixed-util{
                    position:fixed; bottom:2%; right:2%; z-index: 3; display:flex; align-items:center; justify-content:center; flex-direction:column; gap:30px;
                }   
                .go-top {
                    background-color: #fff; width:60px; height:60px;
                    padding: 20px; border:1px solid #ddd;
                    font-weight: bold; display:flex; aligh-items:center; justify-content:center; border-radius:50px;
                }
                .go-inquiry {position:relative;}
                .go-inquiry > a{display:block; width:60px; height:60px;  border-radius:50%;  background: linear-gradient( 45deg, #0cd4bc, #1550e6 );  display: flex; flex-wrap: wrap; flex-direction: column; align-items: center;justify-content: center; position: absolute; top:50%; left:50%; transform:translate(-50%, -50%); transition: all .3s; z-index: 1;}
                .go-inquiry > a img{max-width:24px;}
                .go-inquiry > a:focus{border: 3px dashed #14FF00 !important;}
                .go-inquiry > a > span{color:#fff; font-size:14px; line-height:1.375; font-family:'Gmarket';}
                .go-inquiry .deco{content:""; display:block; width:107px; height:107px; background:url(/images/inquiry-deco.png) no-repeat; animation: rotate 10s infinite;}
                .go-inquiry > a:hover + .deco, .go-inquiry > a:focus + .deco {animation-play-state: running;}
                @keyframes rotate {
                    from {
                        -webkit-transform: rotate(0deg) ;
                        -o-transform: rotate(0deg) ;
                        transform: rotate(0deg) ;
                    }
                    to {
                        -webkit-transform: rotate(360deg) ;
                        -o-transform: rotate(360deg) ;
                        transform: rotate(360deg) ;
                    }
                    
                    }
            `}</style>
    </>
  );
}
