import { savePopupService } from "@/services/popup.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPopupWrite() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    linkUrl: "",
    startAt: "",
    endAt: "",
    isActive: true,
    positionX: 0,
    positionY: 0,
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleSubmit = async () => {
    await savePopupService(form, file);
    navigate("/admin/popup/list");
  };

  return (
    <div className="admin-page-wrapper">
      <div className="admin-page-header">
        <h2>팝업 등록</h2>
      </div>

      <div className="admin-form-card">
        <div className="admin-form-flex">
          <div className="admin-form-group">
            <label>팝업 제목</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="팝업 제목"
            />
          </div>

          <div className="admin-form-group">
            <label>내용</label>
            <input
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="팝업 내용"
            />
          </div>

          <div className="admin-form-group">
            <label>링크 URL</label>
            <input
              name="linkUrl"
              value={form.linkUrl}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="admin-form-group">
            <label>노출 기간</label>
            <div className="popup-date-row">
              <input
                type="datetime-local"
                name="startAt"
                value={form.startAt}
                onChange={handleChange}
              />
              <span>~</span>
              <input
                type="datetime-local"
                name="endAt"
                value={form.endAt}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label>위치 (px)</label>
            <div className="popup-date-row">
              <span>X</span>
              <input
                type="number"
                name="positionX"
                value={form.positionX}
                onChange={handleChange}
              />
              <span>Y</span>
              <input
                type="number"
                name="positionY"
                value={form.positionY}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="admin-form-group">
            <label>이미지</label>
            <label className="admin-file-label">
              {file ? file.name : "파일 선택"}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFile}
              />
            </label>
          </div>

          {preview && (
            <div className="admin-form-group">
              <label>미리보기</label>
              <div className="preview-box">
                <img src={preview} alt="미리보기" className="popup-preview-img" />
              </div>
            </div>
          )}

          <div className="admin-form-group admin-checkform-group">
            <label>활성화</label>
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="admin-btn-row">
          <button
            className="admin-btn admin-btn-primary"
            onClick={handleSubmit}
          >
            등록
          </button>
          <button
            className="admin-btn admin-btn-danger"
            onClick={() => navigate("/admin/popup")}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
