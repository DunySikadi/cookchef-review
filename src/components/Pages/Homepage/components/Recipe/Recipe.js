import { useContext, useState } from "react";
import { ApiContext } from "../../../../../context/ApiContext";
import Modal from "../../../../Modal/Modal";
import styles from "./Recipe.module.scss";

function Recipe({
  recipe: { _id, title, image, liked },
  toggleLikeRecipe,
  toggleDeleteRecipe,
}) {
  const base_url = useContext(ApiContext);
  const [modal, setModal] = useState(false);

  async function handleLike() {
    try {
      const response = await fetch(`${base_url}/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !liked,
        }),
      });

      if (response.ok) {
        const updatedRecipe = await response.json();
        toggleLikeRecipe(updatedRecipe);
      }
    } catch (error) {
      console.log("Error");
    }
  }

  async function handleDelete() {
    try {
      const response = await fetch(`${base_url}/${_id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toggleDeleteRecipe(_id);
      }
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div className={`${styles.container} d-flex flex-column`}>
      <div className={`${styles.containerImage}`}>
        <img src={image} alt="" />
      </div>

      <h3>{title}</h3>
      <button
        onClick={handleLike}
        className={`${styles.btn} ${styles.btnLike} ${
          liked ? `${styles.clic}` : ""
        }`}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
      <button
        onClick={() => {
          setModal(true);
        }}
        className={`${styles.btn} ${styles.btnDrop}`}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
      {modal && (
        <Modal
          title={title}
          handleDelete={handleDelete}
          setModal={setModal}
        ></Modal>
      )}
    </div>
  );
}

export default Recipe;
