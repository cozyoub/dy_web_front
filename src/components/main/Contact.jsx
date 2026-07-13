import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Contact.css";

gsap.registerPlugin(ScrollTrigger);

const CONTACTS = [
  {
    href: "/contact",
    number: "홈페이지로 문의",
    desc: [{ text: "담당자가 신속하게 답변드립니다." }],
    icon: "/images/main/ico_call01.svg",
    isMain: true,
  },
  {
    href: "tel:051-550-5060",
    number: "051-550-5060",
    desc: [{ text: "대표 번호로 문의하기" }, { text: "평일 09:00 ~ 18:00" }],
    icon: "/images/main/ico_call02.svg",
  },
  {
    href: "mailto:dysnt@dkpia.com",
    number: "dysnt@dkpia.com",
    desc: [{ text: "프로젝트 및 견적 문의 이메일로 편하게 상담하세요." }],
    icon: "/images/main/ico_call03.svg",
  },
];

// 터치 기기(모바일/태블릿) 여부 판별
const isMobileDevice = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

function ContactBtn({ item, index, activeIndex, setActiveIndex }) {
  const [direction, setDirection] = useState("up");
  const [copied, setCopied] = useState(false);

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isTopHalf = e.clientY - rect.top < rect.height / 2;
    setDirection(isTopHalf ? "up" : "down");
    setActiveIndex(index);
  };

  const handleMouseLeave = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const isTopHalf = e.clientY - rect.top < rect.height / 2;
    setDirection(isTopHalf ? "up" : "down");
    if (!item.isMain) setActiveIndex(null);
  };

  const handleClick = (e) => {
    const isTelOrMail =
      item.href.startsWith("tel:") || item.href.startsWith("mailto:");

    if (isTelOrMail && !isMobileDevice()) {
      e.preventDefault();
      const value = item.href.replace(/^tel:|^mailto:/, "");
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  const isActive = item.isMain
    ? activeIndex === null || activeIndex === index
    : activeIndex === index;

  return (
    
      <a href={item.href}
      onClick={handleClick}
      className={`contact-btn-item border-gradient ${isActive ? "active" : ""} ${direction}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="cm-fill" />
      <div className="txt-box">
        <p className="txt01">{item.number}</p>
        <p className="txt02">
          {item.desc.map((d, i) => (
            <span key={i}>{d.text}</span>
          ))}
        </p>
        {copied && <span className="copied-toast">복사되었습니다</span>}
      </div>
      <div className="icon-box border-gradient">
        <div className="liquid-effect" />
        <img src={item.icon} alt="" />
      </div>
    </a>
  );
}

export default function Contact() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const txtBox = section.querySelector(".contact-inquiry-txt-box");
      const btns = gsap.utils.toArray(".contact-btn-item");

      gsap.set(txtBox, { y: 30, opacity: 0 });
      gsap.set(btns, { y: 40, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-inquiry",
          start: "top 80%",
        },
      });

      tl.to(txtBox, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }).to(
        btns,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.4"
      );

      return () => tl.scrollTrigger?.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-contact" ref={sectionRef}>
      <div className="inner">
        <div className="contact-inquiry">
          <div className="contact-inquiry-txt-box">
            <h4 className="inquiry-tit">
              산업에 맞는 솔루션 제안부터<br />도입 컨설팅까지
            </h4>
            <p className="inquiry-txt">
              기업의 업무 환경을 분석하여<br />
              도입부터 구축, 운영까지 최적의 서비스를 제공합니다.
            </p>
          </div>

          <div className="contact-btn-box">
            {CONTACTS.map((item, idx) => (
              <ContactBtn
                key={item.number}
                item={item}
                index={idx}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}