import styles from "./HeaderMenu.module.scss";

export default function HeaderMenu({ setPage }) {
  return (
    <ul className={`${styles.menu} d-flex flex-column p-10`}>
      <li className="p-5" onClick={() => setPage("Admin")}>
        Ajouter une recette
      </li>
      <li className="p-5">Wishlist</li>
      <li className="p-5">connexion</li>
    </ul>
  );
}
