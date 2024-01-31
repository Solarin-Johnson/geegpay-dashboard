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
    { icon: "", name: "Total Income", amount: 200, percentage: "23.5%" },
    {
      icon: "",
      name: "Average Sales",
      amount: 200,
      percentage: "23.5%",
      increase: true,
    },
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
        <div className={data.increase ? "increase" : "decrease"}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
              //   stroke="#ED544E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 5.5H9.5V2"
              //   stroke="#ED544E"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>{data.percentage}</span>
        </div>
        <span>vs. previous month</span>
      </div>
    </div>
  );
};
