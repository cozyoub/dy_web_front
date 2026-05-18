import { useNavigate, useParams } from "react-router-dom";
import { getNotiByIdService, updateNotiService } from "@/services/noti.service";
import { useRef, useState, useEffect } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axiosInstance from "@/common/axiosInstance";

export default function AdminNoticeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    writer: "관리자",
    imageUrl: "",
  });
  const [file, setFile] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const editorRef = useRef(null);

  useEffect(() => {
    getNotiByIdService(id)
      .then((res) => {
        //console.log(res.data);
        const { title, content, writer, ofile, imageUrl } = res.data;
        setForm({
          title: title ?? "",
          content: content ?? "",
          writer: writer ?? "",
          imageUrl: imageUrl ?? "",
        });
        setCurrentFile(ofile ?? null);
        // 에디터에 내용 설정
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
            {/* <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              required
            /> */}
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
