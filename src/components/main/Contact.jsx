import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LangLink from "@/components/LangLink";
import { useLanguage } from "@/contexts/LanguageContext";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/main/Contact";
import "./Contact.css";
import MainSectionTitle from "./MainSectionTitle";

gsap.registerPlugin(ScrollTrigger);

const KO_CONTACTS = [
  {
    href: "/contact",
    number: "홈페이지로 문의",
    desc: [{ text: "담당자가 신속하게 답변드립니다." }],
    icon: "/images/main/ico_call01.svg",
    isMain: true,
  },
  {
    href: "tel:051-550-5060",
    hrefEn: "tel:+82-51-550-5060",
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

function ContactBtn({ item, index, activeIndex, setActiveIndex, number, desc, tr }) {
  const [direction, setDirection] = useState("up");
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const href = lang === "en" && item.hrefEn ? item.hrefEn : item.href;
  const isInternal = href.startsWith("/");

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
    const isTelOrMail = href.startsWith("tel:") || href.startsWith("mailto:");

    if (isTelOrMail && !isMobileDevice()) {
      e.preventDefault();
      const value = href.replace(/^tel:|^mailto:/, "");
      navigator.clipboard.writeText(value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  const isActive = item.isMain
    ? activeIndex === null || activeIndex === index
    : activeIndex === index;

  const content = (
    <>
      <span className="cm-fill" />
      <div className="txt-box">
        <p className="txt01">{number}</p>
        <p className="txt02">
          {desc.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </p>
        {copied && <span className="copied-toast">{tr("copied", "복사되었습니다")}</span>}
      </div>
      <div className="icon-box border-gradient">
        <div className="liquid-effect" />
        <img src={item.icon} alt="" />
      </div>
    </>
  );

  const className = `contact-btn-item border-gradient ${isActive ? "active" : ""} ${direction}`;

  if (isInternal) {
    return (
      <LangLink
        to={href}
        onClick={handleClick}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </LangLink>
    );
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </a>
  );
}

export default function Contact() {
  const tr = useTr(en);
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
            <MainSectionTitle
                      reverse
                      className="main-design__title"
                      eyebrow={<>{tr("eyebrow1", "사무와 현장의 모든 이야기를 들려주시면,")}<br/>
{tr("eyebrow2", "단계별로 채워가는 AI 자동화 솔루션을 제안해 드립니다.")}</>}
                      title={<>{tr("title", "Contact Us")}</>}
                    />

          </div>

          <div className="contact-btn-box">
            {KO_CONTACTS.map((item, idx) => (
              <ContactBtn
                key={item.number}
                item={item}
                number={tr(`contacts.${idx}.number`, item.number)}
                desc={item.desc.map((d, di) => tr(`contacts.${idx}.desc.${di}`, d.text))}
                tr={tr}
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