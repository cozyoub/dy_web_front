import { useState } from "react";
import { saveContactService } from "@/services/contact.service";

const TYPE_LIST = [
  "제품 문의",
  "파트너십 문의",
  "인사 채용 문의",
  "IR 문의",
  "기타 문의",
];

export default function QnA() {
  const [form, setForm] = useState({
    type: "",
    company: "",
    name: "",
    emailFront: "",
    emailBack: "",
    phone: "",
    content: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [done, setDone] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDomainSelect = (e) => {
    if (e.target.value) setForm({ ...form, emailBack: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      !form.type ||
      !form.company ||
      !form.name ||
      !form.emailFront ||
      !form.emailBack ||
      !form.content
    )
      return;

    if (
      !form.type ||
      !form.company ||
      !form.name ||
      !form.emailFront ||
      !form.emailBack ||
      !form.content ||
      !privacy
    )
      return;

    const email = `${form.emailFront}@${form.emailBack}`;
    saveContactService({ ...form, email })
      .then(() => setDone(true))
      .catch(() => alert("제출 실패. 다시 시도해주세요."));
  };

  if (done)
    return (
      <div className="contact-done">
        <div className="contact-done-box">
          <p className="contact-done-icon">✓</p>
          <h3>문의가 접수되었습니다</h3>
          <p>빠른 시일 내에 답변 드리겠습니다.</p>
        </div>
      </div>
    );

  return (
    <div className="contact-wrapper">
      <form onSubmit={handleSubmit} noValidate>
        <div className="contact-form-card">
          {/* 문의유형 */}
          <div className="contact-form-row">
            <label className="contact-label required">문의유형</label>
            <div className="contact-input-wrap">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className={`contact-select ${submitted && !form.type ? "error" : ""}`}
              >
                <option value="">문의유형을 선택해주세요</option>
                {TYPE_LIST.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {submitted && !form.type && (
                <span className="contact-error">문의유형을 선택해주세요</span>
              )}
            </div>
          </div>

          {/* 회사명 */}
          <div className="contact-form-row">
            <label className="contact-label required">회사명</label>
            <div className="contact-input-wrap">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="회사명을 입력해주세요"
                className={submitted && !form.company ? "error" : ""}
              />
              {submitted && !form.company && (
                <span className="contact-error">회사명을 입력해주세요</span>
              )}
            </div>
          </div>

          {/* 이름 */}
          <div className="contact-form-row">
            <label className="contact-label required">이름</label>
            <div className="contact-input-wrap">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                className={submitted && !form.name ? "error" : ""}
              />
              {submitted && !form.name && (
                <span className="contact-error">이름을 입력해주세요</span>
              )}
            </div>
          </div>

          {/* 이메일 */}
          <div className="contact-form-row">
            <label className="contact-label required">이메일</label>
            <div className="contact-input-wrap">
              <div className="contact-email-row">
                <input
                  name="emailFront"
                  value={form.emailFront}
                  onChange={handleChange}
                  placeholder="이메일"
                  className={submitted && !form.emailFront ? "error" : ""}
                />
                <span className="contact-at">@</span>
                <input
                  name="emailBack"
                  value={form.emailBack}
                  onChange={handleChange}
                  placeholder="도메인"
                  className={submitted && !form.emailBack ? "error" : ""}
                />
                <select onChange={handleDomainSelect} defaultValue="">
                  <option value="">직접입력</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="naver.com">naver.com</option>
                  <option value="daum.net">daum.net</option>
                  <option value="kakao.com">kakao.com</option>
                </select>
              </div>
              {submitted && (!form.emailFront || !form.emailBack) && (
                <span className="contact-error">이메일을 입력해주세요</span>
              )}
            </div>
          </div>

          {/* 전화번호 */}
          <div className="contact-form-row">
            <label className="contact-label">전화번호</label>
            <div className="contact-input-wrap">
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="전화번호를 입력해주세요"
                type="tel"
              />
            </div>
          </div>

          {/* 문의내용 */}
          <div className="contact-form-row">
            <label className="contact-label required">문의내용</label>
            <div className="contact-input-wrap">
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="문의 내용을 입력해주세요"
                className={submitted && !form.content ? "error" : ""}
              />
              {submitted && !form.content && (
                <span className="contact-error">문의내용을 입력해주세요</span>
              )}
            </div>
          </div>

          {/* 개인정보 동의 */}
          <div className="contact-privacy">
            <strong>개인정보 수집 및 이용동의</strong>
            <div className="contact-privacy-content">
              수집항목: 회사명, 이름, 이메일, 전화번호, 문의내용{"\n"}
              수집목적: 문의에 대한 답변 및 처리{"\n"}
              보유기간: 문의 처리 완료 후 즉시 파기
            </div>
            <div className="contact-privacy-check">
              <input
                type="checkbox"
                id="privacy"
                checked={privacy}
                onChange={(e) => setPrivacy(e.target.checked)}
              />
              <label
                htmlFor="privacy"
                className={submitted && !privacy ? "contact-privacy-error" : ""}
              >
                개인정보 수집 및 이용에 동의합니다 (필수)
              </label>
            </div>
            {submitted && !privacy && (
              <span className="contact-error">
                개인정보 수집 및 이용에 동의해주세요
              </span>
            )}
          </div>

          <div className="contact-submit-wrap">
            <button type="submit" className="contact-submit-btn">
              문의하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
