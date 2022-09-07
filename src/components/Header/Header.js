import styles from "./Header.module.scss";

function Header({ setPage }) {
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

      <ul className="d-flex">
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
    </header>
  );
}

export default Header;
