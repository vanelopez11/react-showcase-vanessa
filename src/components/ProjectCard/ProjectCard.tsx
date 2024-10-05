import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  image: string;
  onClick: () => void;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <>
      <button value={props.title} className={styles.card} onClick={props.onClick}>
        <img
          className={styles.image}
          src={props.image}>  
        </img>
        <div className={styles.content}>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.resources}>
            <span>useState</span>
            <span>useEffect</span>
            <span>CustomHooks</span>
            <span>localStorage</span>
            <span>CSS Modules</span>
            <span>otherFeature</span>
            <span>otherFeature</span>
          </div>
        </div>
      </button>
    </>
  );
}

export default ProjectCard;
