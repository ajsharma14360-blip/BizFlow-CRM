import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>BizFlow CRM</h1>
        <p>Sign in to manage your business</p>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginForm;