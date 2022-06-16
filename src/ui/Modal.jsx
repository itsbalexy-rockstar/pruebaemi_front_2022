import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/profile";

const Modal = ({ component }) => {
  const { openModal } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const isOpenModal = () => {
    if (openModal) {
      return { display: "flex" };
    }
    return { display: "none" };
  };
  return (
    <div
      className="modal animate__animated animate__zoomIn"
      style={isOpenModal()}
    >
      <div className="x" onClick={() => dispatch(closeModal())}>
        <i class="fa-solid fa-x fa-clapperboard"></i>
      </div>
      {component()}
    </div>
  );
};

export default Modal;
