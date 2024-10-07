import styles from "./Letter.module.css";

import { status } from "../WordleLogic";

interface Letter {
  value: string;
  status: status;
}

function Letter({ value, status }: Letter) {
  return <div className={`${styles.cell} ${styles[status]}`}>{value}</div>;
}

export default Letter;