import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../api.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("texro_token", token);
      setAuthToken(token);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="container-pad max-w-md mx-auto py-16">
      <div className="card p-8">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="text-sm text-[#1F6FA5] mt-1">Use admin credentials to manage products.</p>
        <form className="mt-6 space-y-4" onSubmit={submit}>
          <input
            className="w-full rounded-xl border border-slate-200 px-3 py-2"
            placeholder="Admin email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            className="w-full rounded-xl border border-slate-200 px-3 py-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && <p className="text-sm text-[#d4c300]">{error}</p>}
          <button className="btn-primary w-full" type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}
