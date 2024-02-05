import "./chart.scss";
export default function BarChart({ data }) {
  const maxData = data.vertRange * data.rangeY;
  const vertData = () => {
    const elements = [];
    for (let i = data.rangeY; i >= 0; i--) {
      elements.push(
        <span>{parseInt(data.vertRange * i).toLocaleString()}</span>
      );
    }
    return elements;
  };
  console.log(maxData);
  return (
    <div className="bar-chart-container">
      <div className="bar-vert">{vertData()}</div>
      <div className="bar-chart">
        <div className="bar-content">
          {data.barData.map(
            (item, i) =>
              item <= maxData && (
                <>
                  <div style={{ height: `${(item / maxData) * 100}%` }}>
                    <span>${item.toLocaleString()}</span>
                  </div>
                </>
              )
          )}
        </div>
        <div className="bar-horiz">
          {data.horizontalData.map((data, i) => (
            <span>{data}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
