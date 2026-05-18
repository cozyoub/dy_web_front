import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { saveNotiService } from "@/services/noti.service";
import axiosInstance from '@/common/axiosInstance';

export default function AdminNoticeWrite() {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [form, setForm] = useState({
    title: "",
    writer: "관리자",
    imageUrl: "",
  });
  const [file, setFile] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleThumbChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
    if (selected) {
      setThumbPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editorRef.current.getInstance().getHTML();
    saveNotiService({ ...form, content }, file)
      .then(() => {
        alert("등록되었습니다.");
        navigate("/admin/notice/list");
      })
      .catch(() => alert("등록 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>공지사항 등록</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="admin-form-card">
          {/* 제목 */}
          <div className="admin-form-group">
            <label>제목</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="admin-form-group">
            <label>내용</label>
            <Editor
              ref={editorRef}
              initialValue=" "
              previewStyle="vertical"
              height="400px"
              initialEditType="wysiwyg"
              useCommandShortcut={true}
              hooks={{
                addImageBlobHook: async (blob, callback) => {
                  const formData = new FormData();
                  formData.append("image", blob);
                  const res = await axiosInstance.post(
                    "/api/noti/image",
                    formData,
                  ); 
                  callback(res.data.url, "이미지");
                },
              }}
            />
          </div>
          <div className="admin-form-group">
            <label>썸네일 이미지</label>
            <label className="admin-file-label">
              {file ? file.name : "파일 선택"}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleThumbChange}
              />
            </label>
            {thumbPreview && (
              <img
                src={thumbPreview}
                alt="썸네일 미리보기"
                style={{
                  marginTop: 8,
                  maxHeight: 160,
                  borderRadius: 6,
                  objectFit: "cover",
                }}
              />
            )}
          </div>
          <div className="admin-form-group">
            <label>이미지 URL</label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            {form.imageUrl && (
              <img
                src={form.imageUrl}
                alt="미리보기"
                style={{
                  marginTop: 8,
                  maxHeight: 160,
                  borderRadius: 6,
                  objectFit: "cover",
                }}
              />
            )}
          </div>

          <div className="admin-btn-row">
            <button type="submit" className="admin-btn admin-btn-primary">
              등록
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/notice/list")}
              className="admin-btn admin-btn-danger"
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
