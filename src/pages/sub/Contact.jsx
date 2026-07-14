import { useState } from "react";
import { saveContactService } from "@/services/contact.service";

const TYPE_CATEGORIES = [
  {
    title: "스마트공장",
    items: [
      "스마트공장 지원사업",
      "MES시스템",
      "설비관리시스템",
      "환경안전시스템",
    ],
  },
  {
    title: "공정자동화",
    items: ["X-SCADA", "X-DAS", "공정자동화제어"],
  },
  {
    title: "일반관리",
    items: ["그룹웨어", "재무회계시스템", "인사관리시스템", "고객관리시스템"],
  },
  {
    title: "솔루션",
    items: [
      "넥사크로",
      "전자문서(OZ)",
      "클라우디움(문서중앙화)",
      "X-SCADA",
      "ThinkWise",
      "UbiReport",
      "환경토탈솔루션",
      "AI,딥러닝솔루션",
      "폴라리스 오피스",
      "삼성SDS",
    ],
  },
];

export default function Contact() {
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

  const handleTypeSelect = (category, item) => {
    setForm({ ...form, category, type: item });
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
        <div className="sub-inner">
          <div className="contact-done-box">
            <p className="contact-done-icon">
              <img src="/images/sub/contact-done-icon.svg" alt="" />
            </p>
            <h3>문의가 접수되었습니다</h3>
            <p>빠른 시일 내에 답변 드리겠습니다.</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="contact-wrapper">
      <div className="sub-inner">
        <div className="solution-title">
          <h3>도입문의</h3>
          <p>문의를 남겨주시면 담당자가 빠르게 안내해 드리겠습니다</p>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="contact-form-card">
            {/* 문의유형 */}
            {/* 문의유형 */}
            <div className="contact-form-row">
              <label className="contact-label required">문의유형</label>
              <div className="contact-input-wrap">
                <div
                  className={`contact-type-grid ${submitted && !form.type ? "error" : ""}`}
                >
                  {TYPE_CATEGORIES.map((cat) => (
                    <div
                      key={cat.title}
                      className={`contact-type-card ${form.category === cat.title ? "active" : ""}`}
                    >
                      <div
                        className="contact-type-header"
                        onClick={() =>
                          handleTypeSelect(cat.title, cat.items[0])
                        }
                      >
                        <span
                          className={`contact-radio ${form.category === cat.title ? "checked" : ""}`}
                        ></span>
                        <span>{cat.title}</span>
                      </div>
                      <ul className="contact-type-items">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className={form.type === item ? "selected" : ""}
                            onClick={() => handleTypeSelect(cat.title, item)}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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
                  className={
                    submitted && !privacy ? "contact-privacy-error" : ""
                  }
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
    </div>
  );
}
