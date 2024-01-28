import { useEffect, useRef, useState } from "react";
import { ReactComponent as View } from "./../../images/table/view.svg";
import Profile1 from "./../../images/table/profile1.png";
import Profile2 from "./../../images/table/profile2.png";
import Profile3 from "./../../images/table/profile3.bmp";
import Profile4 from "./../../images/table/profile4.bmp";
import Profile5 from "./../../images/table/profile5.bmp";
import "./table.scss";
export function CustomTable({ type, param, tableLength, tableName, i }) {
  const [paramData, setParamData] = useState([]);
  const arrange = {};
  const arrangeBody = {};

  const tableBody = useRef(null);
  useEffect(() => {
    const status = tableBody.current;
    if (status) {
      status.children[param.length - 1].style.color = [param[0]];
    }
    setParamData(param);
  }, [param]);

  if (type === "head") {
    return (
      <>
        {tableLength < 1 ? (
          <>
            <div className="custom-table-empty">
              <span className="material-symbols-outlined">hourglass</span>
              <span>Sorry No {tableName}</span>
            </div>
          </>
        ) : (
          <>
            <div className="custom-table-head" style={arrange}>
              {paramData.map((data, index) => (
                <div key={index} className="custom-table-head-data">
                  {data}
                </div>
              ))}
            </div>
          </>
        )}
      </>
    );
  } else {
    const imgData = [Profile1, Profile2, Profile3, Profile4, Profile5];
    // console.log(index);
    return (
      <div ref={tableBody} className="custom-table-body" style={arrangeBody}>
        {param.map((data, index) =>
          index !== 1 ? (
            <div key={index} className="custom-table-data">
              {data}
            </div>
          ) : (
            <div
              key={index}
              className="custom-table-data custom-table-data-name"
            >
              <span style={{ backgroundImage: `url(${imgData[i]})` }}></span>
              <div key={index}>{data}</div>
            </div>
          )
        )}
        <div className="custom-table-data">
          <View />
          <span>View</span>
        </div>
      </div>
    );
  }
}
