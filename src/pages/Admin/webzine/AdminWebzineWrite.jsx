import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { saveWebzineService } from "@/services/webzine.service";
import axiosInstance from "@/common/axiosInstance";
import { WEBZINE_CATEGORIES } from "@/common/webzineCategories";
import { BASE_API_URL } from "@/common/constants";
import { formatIssueLabel } from "@/common/webzineUtils";

export default function AdminWebzineWrite() {
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [form, setForm] = useState({
    title: "",
    writer: "관리자",
    imageUrl: "",
    category: "",
    publishedDate: "",
  });
  const [file, setFile] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [thumbUploading, setThumbUploading] = useState(false);

  const getPreviewUrl = (url) => {
    if (!url) return null;
    return url.startsWith("http") ? url : `${BASE_API_URL}${url}`;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleThumbUpload = async (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setThumbPreview(URL.createObjectURL(selected));

    setThumbUploading(true);
    const formData = new FormData();
    formData.append("image", selected);

    try {
      const res = await axiosInstance.post("/api/webzine/image", formData);
      const fullUrl = res.data.url.startsWith("http")
        ? res.data.url
        : `${BASE_API_URL}${res.data.url}`;
      setForm((prev) => ({ ...prev, imageUrl: fullUrl }));
    } catch {
      alert("썸네일 업로드 실패");
    } finally {
      setThumbUploading(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editorRef.current.getInstance().getHTML();
    const payload = {
      ...form,
      content,
      publishedDate: form.publishedDate || null,
    };
    saveWebzineService(payload, file)
      .then(() => {
        alert("등록되었습니다.");
        navigate("/admin/webzine/list");
      })
      .catch(() => alert("등록 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>웹진 등록</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="admin-form-card">
          <div className="admin-form-group">
            <label>카테고리</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">카테고리 선택</option>
              {WEBZINE_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="admin-form-group">
            <label>제목</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder={
                form.category === "초대장"
                  ? "카드/상세에 표시될 제목을 입력하세요"
                  : "관리용 제목 (카드에는 발행일 기준 이슈명이 표시됩니다)"
              }
              required
            />
            {form.category && form.category !== "초대장" && (
              <p className="admin-form-hint">
                ※ '{form.category}' 카테고리는 카드에 제목 대신{" "}
                <strong>
                  {form.publishedDate
                    ? formatIssueLabel(form.publishedDate)
                    : "발행일 기준 이슈명"}
                </strong>
                이 표시됩니다.
              </p>
            )}
          </div>

          <div className="admin-form-group">
            <label>발행일</label>
            <input
              type="date"
              name="publishedDate"
              value={form.publishedDate}
              onChange={handleChange}
            />
            {form.publishedDate && (
              <p className="admin-form-hint">
                카드에 표시될 타이틀명:{" "}
                <strong>{formatIssueLabel(form.publishedDate)}</strong>
              </p>
            )}
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
                    "/api/webzine/image",
                    formData,
                  );
                  const fullUrl = res.data.url.startsWith("http")
                    ? res.data.url
                    : `${BASE_API_URL}${res.data.url}`;
                  callback(fullUrl, "이미지");
                },
              }}
            />
          </div>

          <div className="admin-form-group">
            <label>썸네일 이미지</label>
            <label className="admin-file-label">
              {thumbUploading ? "업로드 중..." : "파일 선택"}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleThumbUpload}
                disabled={thumbUploading}
              />
            </label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="또는 URL 직접 입력 (https://example.com/image.jpg)"
              style={{ marginTop: 8 }}
            />
            {(thumbPreview || form.imageUrl) && (
              <img
                src={thumbPreview || getPreviewUrl(form.imageUrl)}
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
            <label>첨부파일</label>
            <label className="admin-file-label">
              {file ? file.name : "파일 선택"}
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
          </div>

          <div className="admin-btn-row">
            <button type="submit" className="admin-btn admin-btn-primary">
              등록
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/webzine/list")}
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
