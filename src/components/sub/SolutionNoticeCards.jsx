import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getNotiByCategoryService } from "@/services/noti.service";
import NoticeCard from "@/components/sub/NoticeCard";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionNoticeCards() {
  const location = useLocation();
  const category = location.pathname.split("/").filter(Boolean).pop();

  const [list, setList] = useState([]);
  const wrapRef = useRef(null);

  useEffect(() => {
    getNotiByCategoryService(category)
      .then((res) => setList(res.data))
      .catch(() => console.error("솔루션 관련 게시글 불러오기 실패"));
  }, [category]);

  useEffect(() => {
    if (list.length === 0) return;

    const ctx = gsap.context(() => {
      const titles = gsap.utils.toArray(".solution-notice-group .solution-title");

      titles.forEach((el) => {
        const heading = el.querySelector("h3");
        const desc = el.querySelector("p");
        const targets = [heading, desc].filter(Boolean);
        if (targets.length === 0) return;

        gsap.set(targets, { y: 30, opacity: 0 });
        gsap.to(targets, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      ScrollTrigger.refresh();
    }, wrapRef);

    return () => ctx.revert();
  }, [list]); 

  if (list.length === 0) return null;

  const grouped = list.reduce((acc, item) => {
    const type = item.categoryType || "기타";
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  return (
    <div className="solution-notice-section" ref={wrapRef}>
      <div className="sub-inner">
        {Object.entries(grouped).map(([type, items]) => (
          <div key={type} className="solution-notice-group">
            <div className="solution-title">
              <h3>{type}</h3>
            </div>
            <div className="notice-card-grid solution-notice-cards">
              {items.map((item) => (
                <NoticeCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}