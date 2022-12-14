import styles from "./Homepage.module.scss";
import Search from "./components/Search/Search";
import Recipe from "./components/Recipe/Recipe";
import useFetchData from "../../../hook/useFecthData";
import { useContext, useState } from "react";
import { ApiContext } from "../../../context/ApiContext";
import Loading from "../../Loading/Loading";

function Homepage() {
  const base_url = useContext(ApiContext);
  const [pages, setPages] = useState(1);
  const [[recipes, setRecipes], loading] = useFetchData(base_url, pages);
  const [filter, setFilter] = useState("");

  function updateRecipe(updatedRecipe) {
    const newRecipes = recipes.map((recipe) =>
      recipe._id === updatedRecipe._id ? updatedRecipe : recipe
    );
    setRecipes(newRecipes);
  }

  function deleteRecipe(id) {
    const newRecipes = recipes.filter((recipe) => recipe._id !== id);
    setRecipes(newRecipes);
  }

  return (
    <div className="flex-fill container d-flex flex-column p-20">
      <h1 className="mb-20">Découvrez nos nouvelles recettes</h1>
      <div className="card flex-fill d-flex flex-column p-30">
        <Search setFilter={setFilter} />
        {loading && !recipes.length ? (
          <Loading></Loading>
        ) : (
          <div className={`${styles.grid}`}>
            {recipes
              .filter((recipe) =>
                recipe.title.trim().toLowerCase().startsWith(filter)
              )
              .map((recipe) => (
                <Recipe
                  key={recipe._id}
                  recipe={recipe}
                  toggleLikeRecipe={updateRecipe}
                  toggleDeleteRecipe={deleteRecipe}
                />
              ))}
          </div>
        )}
        <div className="d-flex justify-content-center align-items-center p-20">
          <button
            onClick={() => {
              setPages(pages + 1);
            }}
            className="btn btn-primary"
          >
            charger plus de recettes
          </button>
        </div>
        {/* <Carrousel /> */}
      </div>
    </div>
  );
}
export default Homepage;
