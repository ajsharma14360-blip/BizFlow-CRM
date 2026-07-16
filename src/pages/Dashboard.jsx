import "./Dashboard.css";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import Card from "../components/Dashboard/Card";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">
        <Header />
        <div className="cards">

  <Card title="Total Customers" value="256" />

  <Card title="Revenue" value="₹1,25,000" />

  <Card title="Invoices" value="84" />

  <Card title="Pending Payments" value="12" />

</div>

      </div>

    </div>
  );
}

export default Dashboard;