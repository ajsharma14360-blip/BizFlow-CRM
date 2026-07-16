import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>BizFlow CRM</h2>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/dashboard">🏠 Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/customers">👥 Customers</NavLink>
        </li>

        <li>
          <NavLink to="/invoices">📄 Invoices</NavLink>
        </li>

        <li>
          <NavLink to="/payments">💳 Payments</NavLink>
        </li>

        <li>
          <NavLink to="/reports">📊 Reports</NavLink>
        </li>

        <li>
          <NavLink to="/settings">⚙️ Settings</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;