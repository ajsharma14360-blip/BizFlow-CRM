import "./Header.css";

function Header() {
  return (
    <div className="header">

      <div>
        <h2>Dashboard</h2>
        <p>Welcome back, Admin 👋</p>
      </div>

      <div className="header-right">

        <input
          type="text"
          placeholder="Search..."
        />

        <button className="notify">
          🔔
        </button>

        <div className="profile">
          AJ
        </div>

      </div>

    </div>
  );
}

export default Header;