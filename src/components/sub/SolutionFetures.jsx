export default function SolutionFetures({ title, items }) {
  return (
    <>
      <div className="solution-features">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{title}</h3>
          </div>
          <ul>
            {items.map((text, index) => {
              return (
                <li key={index}>
                  <span>{index + 1}</span>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
