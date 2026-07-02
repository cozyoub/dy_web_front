function SolutionEffect({ title, desc, items }) {
  return (
    <div className="solution-effect">
      <div className="sub-inner">
        <div className="solution-title">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <ul className="effect-list">
          {items.map((item, idx) => (
            <li key={idx}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>

              {Array.isArray(item.desc) ? (
                item.desc.map((text, i) => <p key={i}>{text}</p>)
              ) : (
                <p>{item.desc}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SolutionEffect;
