import { useEffect, useState } from "react";

export default function useFetchData(Base_url, pages) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;
    async function FetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `${Base_url}/?skip=${(pages - 1) * 6}&limit=6`
        );
        if (response.ok && !cancel) {
          const data = await response.json();
          Array.isArray(data)
            ? setRecipes((x) => [...x, ...data])
            : setRecipes((x) => [...x, data]);
        } else {
        }
      } catch (error) {
        setError("Error");
      } finally {
        if (!cancel) {
          setLoading(false);
        }
      }
    }
    FetchData();
    return () => (cancel = true);
  }, [Base_url, pages]);

  return [[recipes, setRecipes], loading, error];
}
