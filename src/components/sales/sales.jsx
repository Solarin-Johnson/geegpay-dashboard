import { useMemo, useState } from "react";
import "./sales.scss";

export default function Sales() {
  return (
    <div className="sales div-container">
      <div className="sales-head">
        <span>Sales Trend</span>
        <div>
          <span>Sort by:</span>
          <Select />
        </div>
      </div>
      <Chart />
    </div>
  );
}

export const Chart = () => {};

export const Select = () => {
  const [drop, setDrop] = useState(false);
  const [dropValue, setDropValue] = useState("Connect");
  const dropArray = useMemo(
    () => ["Connect", "Inbox", "Capture", "AnonnHubs", "Privacy"],
    []
  );
  return (
    <>
      <div
        className="sales-select"
        onClick={(e) => {
          e.stopPropagation();
          drop ? setDrop(false) : setDrop(true);
        }}
      >
        <span>{dropValue}</span>
        <i className={`fa-solid fa-angle-down ${drop && "rotate"}`}></i>
      </div>
      <div className={`sales-options ${drop && "drop-index"}`}>
        {dropArray.map((data, i) => (
          <div className="sales-options-tab">{data}</div>
        ))}
      </div>
    </>
  );
};
