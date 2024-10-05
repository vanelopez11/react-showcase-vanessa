import styles from "./LoginPage.module.css";
import { UserContext } from "../UserProvider/UserProvider";
import * as React from "react";

function LoginPage() {
  const userContext = React.useContext(UserContext)!;

  if (!userContext) {
    throw new Error("LoginPage must be used within a UserProvider");
  }

  const [usernameInput, setUsernameInput] = React.useState<string>("");

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!usernameInput.trim()) {
      alert("Username cannot be empty");
      return;
    }

    userContext.setUsername(usernameInput);
  }

  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <img
            className={styles.image}
            alt="PokeAPI Logo"
            src="https://s3-alpha-sig.figma.com/img/5f2f/cc9b/ff4319959cc2d700d6754a2d2203780b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0m6wZ9vz2v6NpX2N4I-3nROe8ajmIBtcTkdU7nDSTqRHlAqLf1zmLtzsR7iOkmmj29M6XnE6BgZHHBY6YSiNdhxUYXPQIihpy92tWtlli6MaSgCmhEDLD7BPA821WncPNzlusLnJkMd8oih~JOdv5PD-Tj1BPgPfXALM2ieEEBbQWmAe9p9fdeW0vlaERoo2TEZaASVHZiWBQ41cc1-QF2ZOMv~qN7wiW2wpd4IhaQZUBUllbkQCtvhLX7LbB2O~d~WM4RMzuUOwTMGT8Njqy97qQbda6-l0BfprYIkjzIQweUOQ6g7kg5xAWgo8A~AuJFC7FSAmGqb8lYpbFlSnQ__"
          ></img>
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <input
              type="text"
              value={usernameInput}
              className={styles.username}
              onChange={(e) => setUsernameInput(e.target.value)}
            ></input>
            <button className={styles.loginButton}>Enter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
