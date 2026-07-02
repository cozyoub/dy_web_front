export default function SolutionMokup({ imgSrc, title, desc }) {
  return (
    <div className="solution-mokup">
      <div className="text-wrap">
        <h3>{title}</h3>
        <div className="desc-wrap">{desc}</div>
      </div>

      <div className="img-wrap">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}