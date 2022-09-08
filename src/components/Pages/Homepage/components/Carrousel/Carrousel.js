import styles from "./Carrousel.module.scss";

export default function Carrousel() {
  return (
    <div className={`p-10 pt-30 m-auto`}>
      <div className={`${styles.grid}`}>
        <button className={`${styles.btn}`}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className={`${styles.btn}`}>1</button>
        <button className={`${styles.btn}`}>2</button>
        {/* <button className={`${styles.btn}`}>3</button> */}
        <button className={`${styles.btn}`}>
          <i className="fa-sharp fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
