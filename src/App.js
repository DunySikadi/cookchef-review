import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Pages/Homepage/Homepage";
import styles from "./App.module.scss";
import { useState } from "react";
import Admin from "./components/Pages/Admin/Admin";
import { ApiContext } from "./context/ApiContext";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <ApiContext.Provider value="https://restapi.fr/api/recipeCook">
      <div className={`d-flex flex-column ${styles.appContainer} br`}>
        <Header setPage={setPage}></Header>
        {page === "Home" && <Homepage></Homepage>}
        {page === "Admin" && <Admin></Admin>}
        <Footer></Footer>
      </div>
    </ApiContext.Provider>
  );
}

export default App;
