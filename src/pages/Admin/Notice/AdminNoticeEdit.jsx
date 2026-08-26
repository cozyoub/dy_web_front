import { useNavigate, useParams } from "react-router-dom";
import { getNotiByIdService, updateNotiService } from "@/services/noti.service";
import { useRef, useState, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axiosInstance from "@/common/axiosInstance";
import { solutionOptions } from "@/common/solutionMap";
import { BASE_API_URL } from "@/common/constants";

export default function AdminNoticeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    writer: "관리자",
    imageUrl: "",
    postType: "NOTICE",
    category: "",
    categoryType: "",
  });
  const [file, setFile] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [thumbUploading, setThumbUploading] = useState(false);
  const editorRef = useRef(null);

  const getPreviewUrl = (url) => {
    if (!url) return null;
    return url.startsWith("http") ? url : `${BASE_API_URL}${url}`;
  };

  useEffect(() => {
    getNotiByIdService(id)
      .then((res) => {
        const {
          title,
          content,
          writer,
          ofile,
          imageUrl,
          postType,
          category,
          categoryType,
        } = res.data;
        setForm({
          title: title ?? "",
          content: content ?? "",
          writer: writer ?? "",
          imageUrl: imageUrl ?? "",
          postType: postType ?? "NOTICE",
          category: category ?? "",
          categoryType: categoryType ?? "",
        });
        setCurrentFile(ofile ?? null);
        editorRef.current?.getInstance().setHTML(content ?? "");
      })
      .catch((err) => {
        console.log(err);
        alert("데이터 불러오기 실패");
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePostTypeChange = (type) => {
    setForm((prev) => ({
      ...prev,
      postType: type,
      category: type === "NOTICE" ? "" : prev.category,
      categoryType: type === "NOTICE" ? "" : prev.categoryType || "구축사례",
    }));
  };

  const handleThumbUpload = async (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setThumbUploading(true);
    const formData = new FormData();
    formData.append("image", selected);

    try {
      const res = await axiosInstance.post("/api/noti/image", formData);
      setForm((prev) => ({ ...prev, imageUrl: res.data.url }));
    } catch {
      alert("썸네일 업로드 실패");
    } finally {
      setThumbUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.postType === "SOLUTION" && !form.category) {
      alert("솔루션을 선택해주세요.");
      return;
    }
    const content = editorRef.current.getInstance().getHTML();
    updateNotiService(id, { ...form, content }, file)
      .then(() => {
        alert("수정되었습니다.");
        navigate("/admin/notice/list");
      })
      .catch(() => alert("수정 실패"));
  };

  return (
    <div>
      <div className="admin-page-header">
        <h2>공지사항 수정</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="admin-form-card">
          <div className="admin-form-group">
            <label>구분</label>
            <div className="admin-radio-group">
              <label>
                <input
                  type="radio"
                  checked={form.postType === "NOTICE"}
                  onChange={() => handlePostTypeChange("NOTICE")}
                />
                공지사항
              </label>
              <label>
                <input
                  type="radio"
                  checked={form.postType === "SOLUTION"}
                  onChange={() => handlePostTypeChange("SOLUTION")}
                />
                솔루션
              </label>
            </div>
          </div>

          {form.postType === "SOLUTION" && (
            <>
              <div className="admin-form-group">
                <label>솔루션 선택</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택하세요</option>
                  {["Management", "Manufacturing", "DX/AX"].map((group) => (
                    <optgroup key={group} label={group}>
                      {solutionOptions
                        .filter((opt) => opt.group === group)
                        .map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div className="admin-form-group">
                <label>글 종류</label>
                <select
                  name="categoryType"
                  value={form.categoryType}
                  onChange={handleChange}
                >
                  <option value="구축사례">구축사례</option>
                  <option value="보도자료">보도자료</option>
                  <option value="솔루션소식">솔루션소식</option>
                  <option value="FAQ">FAQ</option>
                </select>
              </div>
            </>
          )}

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
            {form.imageUrl && (
              <img
                src={getPreviewUrl(form.imageUrl)}
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
