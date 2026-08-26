import { useNavigate, useParams } from "react-router-dom";
import {
  getWebzineByIdService,
  updateWebzineService,
} from "@/services/webzine.service";
import { useRef, useState, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axiosInstance from "@/common/axiosInstance";
import { WEBZINE_CATEGORIES } from "@/common/webzineCategories";
import { BASE_API_URL } from "@/common/constants";
import { formatIssueLabel } from "@/common/webzineUtils";

// content가 완전한 HTML 문서(<html ...> 로 시작)인지 판별
// 에디터로 작성한 글은 <p>, <img> 등 조각 HTML/마크다운이라 이 조건에 안 걸림
const isRawHtmlDocument = (html) => {
  if (!html) return false;
  return /^\s*<(!doctype|html)/i.test(html);
};

export default function AdminWebzineEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    writer: "관리자",
    imageUrl: "",
    category: "",
    publishedDate: "",
  });
  const [file, setFile] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [thumbPreview, setThumbPreview] = useState(null);
  const [thumbUploading, setThumbUploading] = useState(false);
  const editorRef = useRef(null);

  // 원본 HTML 그대로 저장 모드 (표 기반 뉴스레터 등 복잡한 레이아웃용)
  const [rawHtmlMode, setRawHtmlMode] = useState(false);
  const [rawHtml, setRawHtml] = useState("");

  const getPreviewUrl = (url) => {
    if (!url) return null;
    return url.startsWith("http") ? url : `${BASE_API_URL}${url}`;
  };

  useEffect(() => {
    getWebzineByIdService(id)
      .then((res) => {
        const {
          title,
          content,
          writer,
          ofile,
          imageUrl,
          category,
          publishedDate,
        } = res.data;
        setForm({
          title: title ?? "",
          content: content ?? "",
          writer: writer ?? "",
          imageUrl: imageUrl ?? "",
          category: category ?? "",
          publishedDate: publishedDate ?? "",
        });
        setCurrentFile(ofile ?? null);

        // 기존 글이 원본 HTML 방식으로 저장돼있으면 그 모드로 자동 전환
        if (isRawHtmlDocument(content)) {
          setRawHtmlMode(true);
          setRawHtml(content ?? "");
        } else {
          editorRef.current?.getInstance().setHTML(content ?? "");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("데이터 불러오기 실패");
      });
  }, [id]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rawHtmlMode && !rawHtml.trim()) {
      alert("HTML 내용을 입력해주세요.");
      return;
    }

    const content = rawHtmlMode ? rawHtml : editorRef.current.getInstance().getHTML();
    const payload = {
      ...form,
      content,
      publishedDate: form.publishedDate || null,
    };
    updateWebzineService(id, payload, file)
      .then(() => {
        alert("수정되었습니다.");
        navigate("/admin/webzine/list");
      })
      .catch(() => alert("수정 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>웹진 수정</h2>
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

          <div className="admin-checkform-group">
            <label>
              원본 HTML 그대로 삽입 (표 기반 뉴스레터 등 복잡한 레이아웃)
              <input
                type="checkbox"
                checked={rawHtmlMode}
                onChange={(e) => setRawHtmlMode(e.target.checked)}
              />
            </label>
            <p className="admin-form-hint">
              체크하면 에디터 대신 HTML 코드를 직접 편집합니다.
            </p>
          </div>

          {rawHtmlMode ? (
            <div className="admin-form-group">
              <label>HTML 원본</label>
              <textarea
                className="admin-code-textarea"
                value={rawHtml}
                onChange={(e) => setRawHtml(e.target.value)}
                placeholder="<html>...</html> 전체를 그대로 붙여넣으세요"
              />
            </div>
          ) : (
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
          )}

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
            {currentFile && (
              <p className="admin-current-file">현재 파일: {currentFile}</p>
            )}
            <label className="admin-file-label">
              {file ? file.name : "파일 선택"}
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>

          <div className="admin-btn-row">
            <button type="submit" className="admin-btn admin-btn-primary">
              수정
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