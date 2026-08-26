import SolutionFetures from "@/components/sub/SolutionFetures";
import SolutionIntro from "@/components/sub/SolutionIntro";
import SolutionNoticeCards from "@/components/sub/SolutionNoticeCards";
import useTr from "@/hooks/useTr";
import en from "@/locales/en/solution02_07";
import {
  Package,
  PackageCheck,
  Boxes,
  Truck,
  Users,
  FileText,
  Monitor,
  Barcode,
  QrCode,
  ScanLine,
  Radio,
  Warehouse,
  ArrowRight,
  ArrowDown,
  ClipboardList,
  Layers,
  LineChart,
} from "lucide-react";

function Arrow({ dir = "right" }) {
  return (
    <span className={`wms-arrow wms-arrow-${dir}`}>
      {dir === "down" ? <ArrowDown size={16} /> : <ArrowRight size={16} />}
    </span>
  );
}

function MiniBox({ icon: Icon, title, sub, tone = "gray" }) {
  return (
    <div className={`wms-minibox wms-minibox-${tone}`}>
      {Icon && <Icon size={18} className="wms-minibox-icon" />}
      <div className="wms-minibox-text">
        <span className="wms-minibox-title">{title}</span>
        {sub && <span className="wms-minibox-sub">{sub}</span>}
      </div>
    </div>
  );
}

function SectionRow({ label, children }) {
  return (
    <div className="wms-section-row">
      <div className="wms-section-label">{label}</div>
      <div className="wms-section-content">{children}</div>
    </div>
  );
}

function AsIsCard({ label, items }) {
  return (
    <div className="wms-asis">
      <span className="wms-badge wms-badge-gray">{label}</span>
      <div className="wms-asis-list">
        {items.map((it, i) => (
          <div className="wms-asis-item" key={i}>
            <div className="wms-asis-icon">
              <it.icon size={22} />
            </div>
            <p className="wms-asis-caption">{it.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToBeFrame({ label, children }) {
  return (
    <div className="wms-tobe">
      <span className="wms-badge wms-badge-teal">{label}</span>
      <div className="wms-tobe-body">{children}</div>
    </div>
  );
}

export default function Solution02_07() {
  const tr = useTr(en);
  const r = (path, ko) => tr(`improvement.${path}`, ko);
  const rfid = (path, ko) => tr(`improvement.rfid.${path}`, ko);
  const inout = (path, ko) => tr(`improvement.inout.${path}`, ko);
  const stocktake = (path, ko) => tr(`improvement.stocktake.${path}`, ko);
  const logi = (path, ko) => tr(`improvement.logistics.${path}`, ko);

  const wmsFeatures = [
    tr("features.items.0", "모바일 기반의 실시간 입·출고 및 재고 정보 처리"),
    tr("features.items.1", "작업자 중심의 모바일 업무 환경으로 현장 생산성 향상"),
    tr("features.items.2", "PDA 및 모바일 기기를 활용한 신속하고 정확한 물류 관리"),
  ];

  const cartLabel = (num) => {
    const word = logi("cartWord", "대차");
    return word === "대차" ? `대차#${num}` : `${word} #${num}`;
  };

  const asisItems = [
    { icon: Users, caption: inout("asis.0", "현장 물류의 비전산화 및 인력기반 관리") },
    { icon: FileText, caption: inout("asis.1", "페이퍼 기반 관리") },
    { icon: Monitor, caption: inout("asis.2", "ERP 기준의 물류 관리 · 실물과 ERP 물류 불일치 발생") },
  ];

  const stocktakeAsisItems = [
    { icon: Users, caption: stocktake("asis.0", "현장 물류의 비전산화 및 인력기반 관리") },
    { icon: FileText, caption: stocktake("asis.1", "페이퍼 기반 관리") },
    { icon: Monitor, caption: stocktake("asis.2", "ERP 기준의 물류 관리 · 실물과 ERP 물류 불일치 발생") },
  ];

  return (
    <>
      <div className="solution-wrap">
        <SolutionIntro
          imageSrc="/images/sub/solution02-07.jpg"
          label={tr("intro.label", "WMS")}
          description={
            <>
              {tr("intro.d1", "물류센터의 모든 운영 과정을 데이터 기반으로")}
              <br />
              {tr("intro.d2", "실시간 관리·통제하는 스마트 창고관리 솔루션")}
            </>
          }
        />
        <SolutionFetures
          items={wmsFeatures}
          title={
            <>
              {tr("features.title1", "작업자 중심의 모바일 업무 환경으로")}
              <br /> {tr("features.title2", "현장 생산성 향상")}
            </>
          }
        />
        <div className="solution-diagram-full">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("diagram.title", "WMS 시스템 구성도")}</h3>
              <p>{tr("diagram.desc", "물류센터의 모든 흐름을 실시간으로 관리하는 WMS 통합 구성도입니다.")}</p>
            </div>
            <div className="diagram-img">
              <img src="/images/sub/wms_flow.jpg" alt={tr("diagram.alt", "WMS 다이어그램")} />
            </div>
          </div>
        </div>
        <div className="wms-improvement">
          <div className="sub-inner">
            <div className="solution-title">
              <h3>{tr("improvement.title", "기능개선(예)")}</h3>
            </div>
            <div className="wms-page">
              <SectionRow label={r("rfid.label", "RFID 도입")}>
                <div className="wms-rfid-box">
                  <p className="wms-desc">
                    {rfid("desc1", "RFID 도입을 통해 실시간 제품재고관리, 출하시간 및 재고실사 시간 단축")}
                  </p>
                  <p className="wms-desc-red">{rfid("desc2", "라벨부착 후 대기장으로 제품이동")}</p>

                  <div className="wms-rfid-flow-top">
                    <MiniBox icon={QrCode} title={rfid("packLabel", "제품포장")} sub={rfid("packSub", "(Barcode)")} />
                    <Arrow dir="right" />
                    <MiniBox icon={FileText} title={rfid("infoLabel", "제품정보")} sub={rfid("infoSub", "전송")} />
                    <Arrow dir="right" />
                    <MiniBox icon={Layers} title={rfid("palletLabel", "팔레트")} sub={rfid("palletSub", "라벨출력")} />
                    <Arrow dir="right" />
                    <MiniBox icon={Boxes} title={rfid("moveLabel", "제품이동")} />
                  </div>

                  <div className="wms-rfid-note">
                    <span className="wms-desc-red">{rfid("packManual", "PACK : 수동발행")}</span>
                    <span className="wms-note-gray">{rfid("packAuto", "그외 : 자동발행")}</span>
                  </div>

                  <div className="wms-rfid-flow-bottom">
                    <MiniBox icon={Boxes} title={rfid("moveLabel", "제품이동")} />
                    <Arrow dir="right" />
                    <MiniBox icon={Boxes} title={rfid("moveLabel", "제품이동")} />
                  </div>

                  <div className="wms-rfid-warehouse-row">
                    <div className="wms-warehouse-panel">
                      <span className="wms-warehouse-pill">{rfid("warehouseLabel", "제품창고")}</span>
                      <div className="wms-pallet-grid">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Package key={i} size={30} className="wms-pallet-icon" />
                        ))}
                      </div>
                      <div className="wms-rfid-scanner">
                        <Radio size={26} />
                        <span>{rfid("rfidTag", "RFID")}</span>
                      </div>
                    </div>

                    <Arrow dir="right" />
                    <MiniBox icon={Truck} title={rfid("dispatchLabel", "상차지시")} />
                    <Arrow dir="right" />
                    <MiniBox icon={ScanLine} title={rfid("scanLabel", "제품스캔")} sub={rfid("scanSub", "(RFID)")} />
                    <Arrow dir="right" />
                    <div className="wms-vertical-chain">
                      <MiniBox icon={PackageCheck} title={rfid("shipLabel", "제품출하")} sub={rfid("shipSubPda", "(PDA)")} />
                      <Arrow dir="down" />
                      <MiniBox icon={PackageCheck} title={rfid("shipLabel", "제품출하")} sub={rfid("shipSubSap", "(SAP)")} />
                    </div>
                  </div>
                </div>
              </SectionRow>

              <SectionRow label={inout("label", "제품 입.출고")}>
                <div className="wms-compare">
                  <AsIsCard label={inout("asisTitle", "As-Is")} items={asisItems} />
                  <ToBeFrame label={inout("tobeTitle", "To-Be")}>
                    <div className="wms-flow-grid">
                      <MiniBox icon={Package} title={inout("rawIn", "원재료 입고")} />
                      <Arrow />
                      <MiniBox icon={Barcode} title={inout("prodBarcode", "제품 생산")} sub={inout("prodBarcodeSub", "Bar-code")} />
                      <Arrow />
                      <MiniBox icon={Boxes} title={inout("prodRfid", "제품 생산")} sub={inout("prodRfidSub", "RFID / Bar-code")} />
                    </div>
                    <div className="wms-flow-grid wms-flow-grid-reverse">
                      <MiniBox icon={Truck} title={inout("outbound", "출고(영업창고, 고객사)")} />
                      <Arrow dir="left" />
                      <MiniBox icon={Boxes} title={inout("loading", "상차")} />
                      <Arrow dir="left" />
                      <MiniBox icon={ScanLine} title={inout("pickInstruction", "품목 및 팔레트 단위 출고/이송지시")} />
                    </div>
                    <p className="wms-flow-note">
                      {inout("note1", "팔레트 패킹 · 소분/혼적 · 제품 이동 추적 및 재고 추적 관리")}
                    </p>
                    <p className="wms-flow-note">{inout("note2", "ERP · MES · 연동 기반 물류 데이터 표준화")}</p>
                  </ToBeFrame>
                </div>
              </SectionRow>

              <SectionRow label={stocktake("label", "재고실사")}>
                <div className="wms-compare">
                  <AsIsCard label={stocktake("asisTitle", "As-Is")} items={stocktakeAsisItems} />
                  <ToBeFrame label={stocktake("tobeTitle", "To-Be")}>
                    <div className="wms-flow-grid">
                      <MiniBox
                        icon={ClipboardList}
                        title={stocktake("general", "일반재고 / 장기재고")}
                        sub={stocktake("generalSub", "할인재고 / 불용재고")}
                      />
                      <Arrow />
                      <MiniBox icon={Boxes} title={stocktake("plan", "재고실사계획")} />
                      <Arrow />
                      <MiniBox
                        icon={ScanLine}
                        title={stocktake("mes", "MES 재고실사 수행")}
                        sub={stocktake("mesSub", "(품목,LOT 단위) · RFID/Bar-code")}
                      />
                    </div>
                    <div className="wms-flow-grid wms-flow-grid-reverse">
                      <MiniBox icon={Users} title={stocktake("reflect", "재고 반영")} />
                      <Arrow dir="left" />
                      <MiniBox icon={FileText} title={stocktake("typeMark", "수불유형 표시")} />
                      <Arrow dir="left" />
                      <MiniBox icon={ClipboardList} title={stocktake("plan", "재고실사계획")} />
                    </div>
                    <p className="wms-flow-note">{stocktake("note", "허용되지 않은 인력의 재고 실사 반영 금지")}</p>
                  </ToBeFrame>
                </div>
              </SectionRow>

              <SectionRow label={logi("label", "물류이동관리")}>
                <div className="wms-compare">
                  <div className="wms-asis wms-asis-logistics">
                    <span className="wms-badge wms-badge-gray">{logi("asisLabel", "As-Is 물류")}</span>
                    <div className="wms-asis-single">
                      <Boxes size={40} />
                      <p className="wms-asis-caption">{logi("asisDesc", "공정흐름 및 현장 물류 흐름의 비표준화")}</p>
                    </div>
                  </div>

                  <ToBeFrame label={logi("tobeLabel", "To-Be 물류")}>
                    <div className="wms-logistics-flow">
                      <div className="wms-logistics-col">
                        <Warehouse size={30} />
                        <p className="wms-flow-note">{logi("standardFlow", "표준 물류 흐름 체계 구축")}</p>
                      </div>

                      <ArrowRight size={18} className="wms-logistics-arrow" />

                      <div className="wms-logistics-icon-row">
                        <div className="wms-logistics-icon-item">
                          <Radio size={26} />
                          <span className="wms-mini-caption">{logi("rfidMonitoring", "RFID기반 물류모니터링")}</span>
                        </div>
                        <div className="wms-logistics-icon-item">
                          <ClipboardList size={26} />
                          <span className="wms-mini-caption">{logi("processSheet", "공정이동표 활용")}</span>
                        </div>
                        <div className="wms-logistics-icon-item">
                          <LineChart size={26} />
                          <span className="wms-mini-caption">{logi("stockControl", "수불 관제")}</span>
                        </div>
                      </div>

                      <ArrowRight size={18} className="wms-logistics-arrow" />

                      <div className="wms-logistics-col">
                        <span className="wms-pill-outline">{logi("processIn", "공정투입")}</span>
                        <span className="wms-pill-outline">{logi("processWait", "공정대기")}</span>
                      </div>

                      <ArrowRight size={18} className="wms-logistics-arrow" />

                      <div className="wms-floorplan-wrap">
                        <div className="wms-floorplan">
                          <span className="wms-floorplan-zone wms-floorplan-press">{logi("press", "Press")}</span>
                          <span className="wms-floorplan-zone wms-floorplan-wash">{logi("wash", "세척")}</span>
                          <Radio className="wms-antenna wms-antenna-1" size={18} />
                          <Radio className="wms-antenna wms-antenna-2" size={18} />
                          <div className="wms-floorplan-block" />
                        </div>
                        <div className="wms-floorplan-callout">
                          {logi("floorplanCallout1", "공정별 종류별 수량")}
                          <br />
                          {logi("floorplanCallout2", "현물 실제 흐름 관제")}
                        </div>
                      </div>
                    </div>

                    <div className="wms-adong-grid">
                      <div className="wms-adong-header">{logi("buildingHeader", "A동")}</div>
                      <div className="wms-adong-quadrants">
                        <div className="wms-adong-quad">
                          <div className="wms-adong-cells">
                            <span className="wms-cell wms-cell-cyan">{cartLabel(1)}</span>
                            <span className="wms-cell wms-cell-green">{cartLabel(2)}</span>
                            <span className="wms-cell wms-cell-green">{cartLabel(3)}</span>
                          </div>
                          <span className="wms-adong-label">{logi("pressLabel", "프레스")}</span>
                        </div>

                        <div className="wms-adong-quad">
                          <div className="wms-adong-cells">
                            <span className="wms-cell wms-cell-cyan">{cartLabel(5)}</span>
                            <span className="wms-cell wms-cell-green">{cartLabel(7)}</span>
                          </div>
                          <span className="wms-adong-label">{logi("washLabel", "세정")}</span>
                        </div>

                        <div className="wms-adong-quad">
                          <div className="wms-adong-cells">
                            <span className="wms-cell wms-cell-cyan">{cartLabel(7)}</span>
                            <span className="wms-cell wms-cell-green">{cartLabel(8)}</span>
                            <span className="wms-cell wms-cell-green">{cartLabel(9)}</span>
                          </div>
                          <span className="wms-adong-label">{logi("capAssyLabel", "Cap assy")}</span>
                        </div>

                        <div className="wms-adong-quad">
                          <div className="wms-adong-cells">
                            <span className="wms-cell wms-cell-green">{cartLabel(6)}</span>
                            <span className="wms-cell wms-cell-red">{cartLabel(0)}</span>
                          </div>
                          <span className="wms-adong-label">{logi("canLabel", "CAN")}</span>
                          <span className="wms-adong-flag">{logi("wrongLocation", "↳ 잘못된 위치")}</span>
                        </div>
                      </div>
                    </div>
                  </ToBeFrame>
                </div>
              </SectionRow>
            </div>
          </div>
        </div>
        <SolutionNoticeCards />
      </div>
    </>
  );
}
