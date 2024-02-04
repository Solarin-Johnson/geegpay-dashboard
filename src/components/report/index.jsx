import "./report.scss";

export default function Report() {
  const reportData = [
    { name: "Book Bazaar", amount: 2500000, rate: 15, percent: 65 },
    { name: "Artisan Aisle", amount: 1800000, rate: 10, percent: 50 },
    { name: "Toy Troop", amount: 1200000, rate: 8, percent: 30 },
    { name: "X Store", amount: 600000, rate: 6, percent: 30 },
  ];
  return (
    <div className="report div-container">
      <div className="order-head">
        <span>Top Platform</span>
        <span>View all</span>
      </div>
      <div className="report-container">
        {reportData.map((data, i) => (
          <ReportCard data={data} />
        ))}
      </div>
    </div>
  );
}

export const ReportCard = ({ data }) => {
  let formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(data.amount);
  return (
    <div className="report-card">
      <div className="card-name">{data.name}</div>
      <div className="card-progress">
        <span style={{ width: `${data.percent}%` }}></span>
      </div>
      <div className="card-details">
        <span>{formattedAmount}</span>
        <span>{data.rate}%</span>
      </div>
    </div>
  );
};
