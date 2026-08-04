// components/common/VideoModal.jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./VideoModal.css";

export default function VideoModal({ videoUrl, onClose }) {
  useEffect(() => {
    if (!videoUrl) return undefined;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoUrl, onClose]);

  if (!videoUrl) return null;

  return createPortal(
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="video-modal-close"
          aria-label="영상 닫기"
          onClick={onClose}
        >
          ✕
        </button>
        <video src={videoUrl} controls autoPlay className="video-modal-video" />
      </div>
    </div>,
    document.body,
  );
}