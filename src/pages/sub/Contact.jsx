import { useState } from "react";
import { saveContactService } from "@/services/contact.service";

const TYPE_CATEGORIES = [
  {
    title: "스마트공장",
    items: [
      {
        name: "스마트공장 지원사업",
        subItems: ["정부형", "자율형공장", "제조AI특화", "대중소상생형"],
      },
      "제조DX 멘토단 활용지원사업",
      "설비관리 시스템",
      "환경안전 시스템",
    ],
  },
  {
    title: "Manufacturing",
    items: ["DX/AX AI 솔루션", "통합생산 솔루션", "생산스케쥴 최적화 솔루션", 
      "설비관리 솔루션","통합 설비관제 솔루션","운송관리 솔루션", "환경안전 솔루션",
      "창고관리 솔루션", "에너지관리 솔루션","공정자동화 제어", "X-SCADA", "X-DAS"
    ],
  },
  {
    title: "Management",
    items: ["통합경영관리 솔루션", "인사관리 솔루션", "재무회계 솔루션", "구매관리 솔루션",
      "고객관리 솔루션", "실제원과관리 솔루션", "내부회계 솔루션", "렌탈 솔루션",
      "IT서비스관리 솔루션","그룹웨어&메신저"
    ],
  },
  {
    title: "파트너 솔루션",
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
  const [expandedItem, setExpandedItem] = useState(null); // 펼쳐진 상위 item 이름

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 하위 항목이 없는 item 클릭
  const handleTypeSelect = (category, item) => {
    setForm({ ...form, category, type: item });
    setExpandedItem(null);
  };

  // 하위 항목이 있는 item(부모) 클릭 -> 펼치기/접기만
  const handleParentClick = (category, itemName) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  // 하위 항목(leaf) 선택
  const handleSubItemSelect = (category, parentName, subItem) => {
    setForm({
      ...form,
      category,
      type: `${parentName} - ${subItem}`,
    });
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
                        onClick={() => {
                          const first = cat.items[0];
                          const firstIsObj = typeof first === "object";
                          if (firstIsObj) {
                            handleParentClick(cat.title, first.name);
                          } else {
                            handleTypeSelect(cat.title, first);
                          }
                        }}
                      >
                        <span
                          className={`contact-radio ${form.category === cat.title ? "checked" : ""}`}
                        ></span>
                        <span>{cat.title}</span>
                      </div>
                      <ul className="contact-type-items">
                        {cat.items.map((item) => {
                          const isObj = typeof item === "object";
                          const name = isObj ? item.name : item;
                          const isExpanded = expandedItem === name;

                          if (!isObj) {
                            return (
                              <li
                                key={name}
                                className={form.type === name ? "selected" : ""}
                                onClick={() => handleTypeSelect(cat.title, name)}
                              >
                                {name}
                              </li>
                            );
                          }

                          return (
                            <li
                              key={name}
                              className={`has-sub ${isExpanded ? "expanded" : ""} ${
                                form.type?.startsWith(name) ? "selected" : ""
                              }`}
                            >
                              <div
                                className="contact-type-parent"
                                onClick={() => handleParentClick(cat.title, name)}
                              >
                                <span>{name}</span>
                                <span className="contact-sub-arrow"></span>
                              </div>
                              {isExpanded && (
                                <ul className="contact-type-subitems">
                                  {item.subItems.map((sub) => (
                                    <li
                                      key={sub}
                                      className={
                                        form.type === `${name} - ${sub}`
                                          ? "selected"
                                          : ""
                                      }
                                      onClick={() =>
                                        handleSubItemSelect(cat.title, name, sub)
                                      }
                                    >
                                      {sub}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
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