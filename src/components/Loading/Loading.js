import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <div
      className={`${styles.spinner} flex-fill d-flex align-items-center justify-content-center `}
    >
      <i className="fa-solid fa-spinner"></i>
    </div>
  );
}
