import { useEffect, useMemo, useState } from "react";
import { ReactComponent as ArrowDown } from "./../../images/header/arrow-down.svg";
import "./sales.scss";
import BarChart from "../chart";

export default function Sales() {
  const [dataIndex, setDataIndex] = useState(1);
  const horiData = [
    ["mon", "tue", "wed", "thur", "fri", "sat", "sun"],
    [
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
    ],
    ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  ];
  const chartData = [
    [6000, 14000, 21000, 11000, 20000, 13000, 20000, 15000],
    [
      6000, 14000, 9000, 16000, 14000, 26000, 11000, 20000, 15000, 23000, 17000,
      9000,
    ],
    [110000, 230000, 170000, 120000, 160000, 90000, 165000, 150000],
  ];
  const range = [5, 6, 4];
  const vRange = [5000, 5000, 50000];
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
          <Select
            data={["weekly", "monthly", "yearly"]}
            setDataIndex={(data) => setDataIndex(data)}
          />
        </div>
      </div>
      {/* <Chart /> */}
      <BarChart
        data={{
          vertRange: vRange[dataIndex],
          rangeY: range[dataIndex],
          horizontalData: horiData[dataIndex],
          barData: chartData[dataIndex],
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

export const Select = ({ data, setDataIndex }) => {
  const [index, setIndex] = useState(1);
  const [viewSet, setViewState] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      setViewState(false);
    });
  }, []);
  useEffect(() => {
    setDataIndex(index);
  }, [index, setDataIndex]);

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
