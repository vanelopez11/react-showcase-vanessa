import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.container}>
          <img
            className={styles.image}
            src="https://s3-alpha-sig.figma.com/img/5f2f/cc9b/ff4319959cc2d700d6754a2d2203780b?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0m6wZ9vz2v6NpX2N4I-3nROe8ajmIBtcTkdU7nDSTqRHlAqLf1zmLtzsR7iOkmmj29M6XnE6BgZHHBY6YSiNdhxUYXPQIihpy92tWtlli6MaSgCmhEDLD7BPA821WncPNzlusLnJkMd8oih~JOdv5PD-Tj1BPgPfXALM2ieEEBbQWmAe9p9fdeW0vlaERoo2TEZaASVHZiWBQ41cc1-QF2ZOMv~qN7wiW2wpd4IhaQZUBUllbkQCtvhLX7LbB2O~d~WM4RMzuUOwTMGT8Njqy97qQbda6-l0BfprYIkjzIQweUOQ6g7kg5xAWgo8A~AuJFC7FSAmGqb8lYpbFlSnQ__"
          ></img>
          <form className={styles.loginForm}>
            <input className={styles.username}></input>
            <button className={styles.loginButton}>Enter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
