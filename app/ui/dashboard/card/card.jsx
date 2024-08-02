import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const item = {
    title: "Any Title",
    number: 1234,
    change: 10,
}

const Card = ({ item }) => {



  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.237</span>
        <span className={styles.detail}>12% more than previous week</span>
        {/* <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week 
        </span> */}
      </div>
    </div>
  );
};

export default Card;