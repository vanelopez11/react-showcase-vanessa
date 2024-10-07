
import styles from "./Message.module.css";


interface MessageProps {
  win: boolean;
  attemp: number;
  answer: string;
  restart: () => void;
}

function Message({ win,  answer, restart }: MessageProps) {
  let info = { title: "", details: <></>, state: "" };


  if (win) {
    info = {
      title: ("You Win"),
      details: <>{("Congratulations you win !")} </>,
      state: "win"
    };
  }
  else {
    info = {
      title: ("You Lose"),
      details: <>{("Try again you word was: ")} <span className={styles.bold}>{answer}</span></>,
      state: "fail"
    };
  }
  return (
    <div className={`${styles.background} ${styles[`background--${info.state}`]}`}>
      <p className={styles.title}>{info.title}</p>
      <p className={styles.detail}>{info.details}</p>
      <button className={`${styles.button} ${styles[`button--${info.state}`]}`} onClick={restart}>{("restart")}</button>
    </div>
  );
}

export default Message;