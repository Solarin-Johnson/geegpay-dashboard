import "./report.scss";

export default function Report() {
  const transactionList = [
    ["#00D400", "Marcus Bergson", "Jan 5, 2024", "$320.00", "Successful"],
    ["#F60000", "Evangeline Rodriguez", "Feb 12, 2024", "$500.00", "Failed"],
    [
      "#00D400",
      "Christopher Harrington",
      "Mar 18, 2024",
      "$120.00",
      "Successful",
    ],
    ["#F60000", "Isabella Montgomery", "Apr 3, 2024", "$250.00", "Failed"],
    ["#00D400", "Nathaniel Wellington", "May 9, 2024", "$400.00", "Successful"],
  ];
  return (
    <div className="report div-container">
      <div className="order-head">
        <span>Last Orders</span>
        <span>View all</span>
      </div>
      <div className="report-table"></div>
    </div>
  );
}
