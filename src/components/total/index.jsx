import "./total.scss";

export default function Total() {
  const totalData = [
    {
      icon: "",
      name: "Total Order",
      amount: 200,
      percentage: "23.5%",
      increase: true,
    },
    { icon: "", name: "Total Refund", amount: 200, percentage: "23.5%" },
    {
      icon: "",
      name: "Average Sales",
      amount: 200,
      percentage: "23.5%",
      increase: true,
    },
    { icon: "", name: "Total Income", amount: 200, percentage: "23.5%" },
  ];
  return (
    <div className="total">
      {totalData.map((data, i) => (
        <TotalCard data={data} />
      ))}
    </div>
  );
}

export const TotalCard = ({ data }) => {
  return (
    <div className="total-card">
      <div className="total-card-image">
        <span></span>
        <span></span>
      </div>
      <div className="total-card-name">{data.name}</div>
      <div className="total-card-amount">{data.amount}</div>
      <div className="total-card-details">
        <div>
          <span>{data.percentage}</span>
          <span></span>
        </div>
        <span>vs. previous month</span>
      </div>
    </div>
  );
};
