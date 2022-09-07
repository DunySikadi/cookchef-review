import styles from "./Search.module.scss";

function Search({ setFilter }) {
  function handleInput(e) {
    setFilter(e.target.value);
  }
  return (
    <div className={`d-flex b1 ${styles.search} align-items-center mb-30`}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onInput={handleInput}
        className="flex-fill align-items-center"
        type="text"
        placeholder="rechercher"
        id="search"
      />
    </div>
  );
}

export default Search;
