import { useState, useEffect } from "react";
import axios from "axios";
import { getActivePopupService } from "@/services/popup.service";
import './PopupViewer.css';

export default function PopupViewer() {
  const [popups, setPopups] = useState([]);
  const [closed, setClosed] = useState({});

  useEffect(() => {
    getActivePopupService().then((res) => {
      const hidden = JSON.parse(localStorage.getItem("hiddenPopups") || "{}");
      const today = new Date().toDateString();
      const visible = res.data.filter((p) => hidden[p.id] !== today);
      setPopups(visible);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/popup/active").then((res) => {
      // 오늘 하루 안보기 팝업
      const hidden = JSON.parse(localStorage.getItem("hiddenPopups") || "{}");
      const today = new Date().toDateString();
      const visible = res.data.filter((p) => hidden[p.id] !== today);
      setPopups(visible);
    });
  }, []);

  const handleClose = (id) => {
    setClosed((prev) => ({ ...prev, [id]: true }));
  };

  const handleHideToday = (id) => {
    const hidden = JSON.parse(localStorage.getItem("hiddenPopups") || "{}");
    hidden[id] = new Date().toDateString();
    localStorage.setItem("hiddenPopups", JSON.stringify(hidden));
    handleClose(id);
  };

  return (
    <>
      {popups.map((popup) =>
        closed[popup.id] ? null : (
          <div
            key={popup.id}
            className="layer-popup-overlay"
            style={{
              left: `${popup.positionX}px`,
              top: `${popup.positionY}px`,
            }}
          >
            <div className="layer-popup-box">
              {popup.linkUrl ? (
                // 링크 있으면
                <a href={popup.linkUrl} target="_blank" rel="noreferrer">
                  {popup.imageUrl && (
                    <img src={popup.imageUrl} alt={popup.title} />
                  )}
                  {/* {popup.content && (
                    <div dangerouslySetInnerHTML={{ __html: popup.content }} />
                  )} */}
                </a>
              ) : (
                // 링크 없으면 이미지만 보여줌 
                <>
                  {popup.imageUrl && (
                    <img src={popup.imageUrl} alt={popup.title} />
                  )}
                  {popup.content && (
                    <div dangerouslySetInnerHTML={{ __html: popup.content }} />
                  )}
                </>
              )}

              <div className="layer-popup-footer">
                <button onClick={() => handleHideToday(popup.id)}>
                  오늘 하루 안보기
                </button>
                <button onClick={() => handleClose(popup.id)}>닫기</button>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  );
}
