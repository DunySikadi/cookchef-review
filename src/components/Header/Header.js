import styles from "./Header.module.scss";
import HeaderMenu from "./component/HeaderMenu/HeaderMenu";
import { useState } from "react";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center p-10`}
    >
      <div
        onClick={() => setPage("Home")}
        className={`${styles.logo} d-flex align-items-center justify-content-center`}
      >
        <i className="fa-solid fa-kitchen-set"></i>
        <h1>COOKCHEF</h1>
      </div>
      <ul className={`d-flex ${styles.menu}`}>
        <li>
          <button
            onClick={() => setPage("Admin")}
            className="btn btn-reverse-primary mr-15"
          >
            Ajouter une recette
          </button>
        </li>
        <li>
          <button className="btn btn-reverse-primary mr-15">
            <i className="mr-5 fa-solid fa-heart"></i>
            Wishlist
          </button>
        </li>
        <li>
          <button className="btn btn-primary mr-15">connexion</button>
        </li>
      </ul>

      <ul className={`${styles.headerxs}`}>
        <i
          onClick={() => {
            setShowMenu(true);
          }}
          className={`fa-solid fa-bars`}
        ></i>
        {showMenu && (
          <>
            <div
              onClick={() => {
                setShowMenu(false);
              }}
              className="calc"
            ></div>
            <HeaderMenu setPage={setPage}></HeaderMenu>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
