import styles from "./Modal.module.scss";

export default function Modal({ title, handleDelete, setModal }) {
  return (
    <div className={`calc d-flex align-items-center justify-content-center`}>
      <div className={`${styles.card}`}>
        <div className="d-flex align-items-center">
          <i className={`fa-solid fa-circle-info mr-5`}></i>
          <p>Voulez-vous vraiment supprimer "{title}" ?</p>
        </div>

        <div className="d-flex justify-content-end ">
          <button onClick={handleDelete}>Oui</button>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            Non
          </button>
        </div>
      </div>
    </div>
  );
}
