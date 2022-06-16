import React from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../store/profile";
import { closeModal } from "../../store/profile";

const FormDataProfile = () => {
  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    name: "",
    occupation: "",
    description: "",
  });

  const {
    name: oldName,
    occupation: oldOcuppation,
    description: oldDescription,
  } = useSelector((state) => state.profile);

  const { name, occupation, description } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateData(values));
    dispatch(closeModal());
  };
  return (
    <form className="form-profile" onSubmit={handleSubmit}>
      <h1>Edición del perfil</h1>
      <p className="form-subtitle">
        Acá puedes editar la información sobre tu perfil
      </p>
      <div className="form-profile__name">
        <p>
          Nombre Actual
        </p>
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleInputChange}
          placeholder={oldName}
        />
      </div>
      <div className="form-profile__occupation">
        <p>Profesion Actual</p>
        <input
          type="text"
          value={occupation}
          name="occupation"
          onChange={handleInputChange}
          placeholder={oldOcuppation}
        />
      </div>
      <div className="form-profile__description">
        <p>Descripcion Actual</p>
        <input
          type="text"
          value={description}
          name="description"
          onChange={handleInputChange}
          placeholder={oldDescription}
        />
      </div>
      <div className="form-btns">
        <button className="form-cancelar__btn">Cancelar</button>
        <button className="form-guardar__btn" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default FormDataProfile;
