import Order from "../components/orders";
import Sales from "../components/sales";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="content">
      <Sales />
      <Order />
    </div>
  );
}
