import MainSectionTitle from "./MainSectionTitle";
import "./NcoreFactoryAi.css";
export default function NcoreFactoryAi() {
  return (
    <>
      <div className="ncore-factory-ai">
        <MainSectionTitle
          eyebrow={<>현장 데이터 수집부터 자동화까지</>}
          title={
            <>
              자율제조팩토리를 완성하는 <br />
              <span>N·Core Factory AI</span>
            </>
          }
        />
      </div>
    </>
  );
}
