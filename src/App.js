import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(event) {
    event.preventDefault();

    fetch("какой-то сервер", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Почта"
        value={email}
        type="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Пароль"
        value={password}
        type="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Отправить</button>
    </form>
  );
}

export default App;
