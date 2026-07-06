function SolutionFlow({ imgSrc, title }) {
  return (
    <>
      <div className="solution-flow">
        <div className="sub-inner">
          <div className="solution-title">
            <h3>{title}</h3>
          </div>
          <div className="flow-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default SolutionFlow