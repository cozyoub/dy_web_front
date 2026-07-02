export default function SolutionCard({ number, title, imgSrc, bullets }) {
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <span className="feature-card-number">{number}</span>
        <h4>{title}</h4>
      </div>
      <div className="feature-card-img">
        <img src={imgSrc} alt={title} />
      </div>
      <ul className="feature-card-bullets">
        {bullets.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  );
}