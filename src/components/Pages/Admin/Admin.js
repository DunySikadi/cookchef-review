import style from "./Admin.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { ApiContext } from "../../../context/ApiContext";

function Admin() {
  const Base_url = useContext(ApiContext);
  const schema = yup.object({
    title: yup
      .string("le titre doit etre une chaine de caratere")
      .required("le titre est obligatoire")
      .min(6, "le titre doit etre explicite"),
    image: yup
      .string()
      .url("Veuillez introduire un lien")
      .required("l'image est obligatoire"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });

  async function Submit(values) {
    try {
      const response = await fetch(Base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        reset();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error");
    }
    reset();
  }

  return (
    <div
      className={`${style.container} flex-fill container d-flex flex-column p-20`}
    >
      <form
        onSubmit={handleSubmit(Submit)}
        className="card d-flex flex-column p-30"
      >
        <h2 className="mb-20">Ajouter une recette</h2>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="title">Titre de la recette</label>
          <input {...register("title")} type="text" id="title" />
          {errors?.title && <p>{errors.title.message}</p>}
        </div>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="image">Image pour la recette</label>
          <input {...register("image")} type="text" id="image" />
          {errors?.image && <p>{errors.image.message}</p>}
        </div>
        <div>
          <button disabled={isSubmitting} className="btn btn-primary">
            Sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
