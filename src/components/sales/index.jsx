import { useEffect, useMemo, useState } from "react";
import { ReactComponent as ArrowDown } from "./../../images/header/arrow-down.svg";
import "./sales.scss";
import BarChart from "../chart";

export default function Sales() {
  const horiData = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const chartData = [
    6000, 14000, 9000, 16000, 14000, 27000, 11000, 20000, 15000, 23000, 17000,
    9000,
  ];
  return (
    <div className="sales div-container">
      <div className="sales-head">
        <span>Sales Trend</span>
        <div>
          <span>Sort by:</span>
          {/* <label htmlFor="sort">
            <select name="sort" id="sort">
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </label> */}
          <Select data={["weekly", "monthly", "yearly"]} />
        </div>
      </div>
      {/* <Chart /> */}
      <BarChart
        data={{
          vertRange: 5000,
          rangeY: 6,
          horizontalData: horiData,
          barData: chartData,
        }}
      />
    </div>
  );
}

export const Chart = () => {};

// export const Select = () => {
//   const [drop, setDrop] = useState(false);
//   const [dropValue, setDropValue] = useState("Connect");
//   const dropArray = useMemo(
//     () => ["Connect", "Inbox", "Capture", "AnonnHubs", "Privacy"],
//     []
//   );
//   return (
//     <>
//       <div
//         className="sales-select"
//         onClick={(e) => {
//           e.stopPropagation();
//           drop ? setDrop(false) : setDrop(true);
//         }}
//       >
//         <span>{dropValue}</span>
//         <i className={`fa-solid fa-angle-down ${drop && "rotate"}`}></i>
//       </div>
//       <div className={`sales-options ${drop && "drop-index"}`}>
//         {dropArray.map((data, i) => (
//           <div className="sales-options-tab">{data}</div>
//         ))}
//       </div>
//     </>
//   );
// };

export const Select = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [viewSet, setViewState] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setViewState(false);
    });
  }, []);

  return (
    <div
      className="select-container"
      id={viewSet ? "show-option" : "hide-option"}
      onClick={(e) => {
        e.stopPropagation();
        setViewState(!viewSet);
      }}
    >
      <div className="select">
        <span>{data[index]}</span> <ArrowDown />
      </div>
      {viewSet && (
        <div className="select-option">
          {data.map((item, i) => (
            <span onClick={() => setIndex(i)}>{item}</span>
          ))}
        </div>
      )}
    </div>
  );
};
