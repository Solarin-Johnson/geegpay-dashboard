import Order from "../components/orders";
import Report from "../components/report";
import Sales from "../components/sales";
import Total from "../components/total";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="content">
      <Sales />
      <Total />
      <Order />
      <Report />
    </div>
  );
}
