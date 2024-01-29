import Order from "../components/orders";
import Sales from "../components/sales";
import Total from "../components/total";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="content">
      <Sales />
      <Total />
      <Order />
    </div>
  );
}
